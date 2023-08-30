import { useState, useRef } from 'react';
import { tracks } from '../data/track';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef();
  const progressBarRef = useRef();

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack {...{currentTrack, audioRef}} />
        <Controls {...{audioRef}} />
        <ProgressBar {...{progressBarRef, audioRef}} />
      </div>
    </div>
  );
};

export default AudioPlayer;