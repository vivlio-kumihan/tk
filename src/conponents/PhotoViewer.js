import { useState } from 'react';
import { photoList } from '../img/photoList';
import Controller from './Controller';

const PhotoViewer = () => {
  // インポートした写真を受ける
  const [photo, setPhoto] = useState(photoList);

  return (
    <div className="photo-viewer">
      <Controller {...{photo}} />
    </div>
  )

};

export default PhotoViewer;