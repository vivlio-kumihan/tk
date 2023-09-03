import { useState, useEffect, useRef, useCallback } from "react";
import { BsSkipBackward } from "react-icons/bs";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp
} from 'react-icons/io5';
import { tracks } from "../data/tracks";

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  const playAnimationRef = useRef();
  const repeat = useCallback(() => {
    // console.log('run');
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, progressBarRef, duration, setTimeProgress])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      // これと、
      // playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      // これを削除して、
      // cancelAnimationFrame(playAnimationRef.current)
    }
    // これをこっちに移動する意味がわからない。
    // useCallback()関数が再生を開始したらずっと動き続けていることに違和感がある。
    // とりあえず従うか。
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };
  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length -1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };
  const hancleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };
  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={skipForward}> 
          <IoPlayForwardSharp />
        </button>
        <button onClick={hancleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;