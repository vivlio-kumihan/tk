const Controller = ({ photo }) => {
  return (
    <div className="controller">
      <ul>
        <li>
          {/* <div className="mask"></div> */}
          {/* <div className="image"></div> */}
          <img src={photo[0]} alt="" />
        </li>
        <li>
          {/* <div className="mask"></div> */}
          {/* <div className="image"></div> */}
          <img src={photo[1]} alt="" />
        </li>
        <li>
          {/* <div className="mask"></div> */}
          {/* <div className="image"></div> */}
          <img src={photo[2]} alt="" />
        </li>
        <li>
          {/* <div className="mask"></div> */}
          {/* <div className="image"></div> */}
          <img src={photo[3]} alt="" />
        </li>
      </ul>
    </div>
  )
};

export default Controller;