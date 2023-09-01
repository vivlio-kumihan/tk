import { useState } from "react";

const Controller = ({ photo }) => {
  return (
    <div className="controller">
      <ul>
        <li><img src={photo[0]} alt="" /></li>
        <li><img src={photo[1]} alt="" /></li>
        <li><img src={photo[2]} alt="" /></li>
        <li><img src={photo[3]} alt="" /></li>
      </ul>
    </div>
  )
};

export default Controller;