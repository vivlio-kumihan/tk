import { useState  } from "react";

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

    const [filterChar, setfilterChar] = useState("");
    const target = ["木田", "門井", "井上", "田代"];
    const targetList = target.map(name => <li key={ name }>{ name }</li>)
    const searchList = (e) => {
      setfilterChar(e.target.value);
    };
    // `person.indexOf(filterChar) !== -1`がカッコ良すぎる。
    // 一致する文字が見つからなかった場合には`-1`を返す。
    const searchResult =  target.filter(person => person.indexOf(filterChar) !== -1)
                                .map(person => <li key={ person }>{ person }</li>)

  return (
    <>
      <ul>
        {animalList}
      </ul>
      <ul>
        {memberList}
      </ul>
      <ul>{targetList}</ul>
      <ul>
        <li>
          <div class="candidate">{searchResult}</div>
          <input type="text" onChange={searchList} value={filterChar} />
        </li>
      </ul>
    </>
  );
}

export default ControlForm;