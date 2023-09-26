const ControlForm = () => {
  const animals = ["dog", "cat", "sheep"]
  const animalList = animals.map(animal => <li key={ animal }>Hello, { animal }</li>);
  const member = [
    { name: "Geo", age: 18, hobby: ["sports", "music"] },
    { name: "Tom", age: 25, hobby: ["movie", "music"] },
    { name: "takahiro", age: 21, hobby: ["sports", "travel", "game"] },
  ];
  const memberList = member.map(person => 
    <>
      <ul>
        <li key={person.name}>Name: {person.name}</li>
        <li key={person.age}>Age: {person.age}</li>
        <li>
          <ul>
            Hobby:
            {person.hobby.map(myFev => <li key={myFev}>{myFev}</li>)}
          </ul>
        </li>
      </ul>
    </>);

  return (
    <>
      <ul>
        {animalList}
      </ul>
      <ul>
        {memberList}
      </ul>
    </>
  );
}


export default ControlForm;