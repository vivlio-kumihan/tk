const Controller = ({ photo }) => {
  const photoList = photo.map((p, idx) => (
    <li key={ idx }>
      <img src={ p } alt="" />
    </li>   
  ));

  return (
    <div className="controller">
      <ul>
        {photoList}
      </ul>
    </div>
  );
};

export default Controller;