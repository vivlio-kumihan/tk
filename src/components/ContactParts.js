import { useState } from "react";

const ContactParts = () => {
  // カウンター
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0)
  }

  // input要素へ入力
  const value = { name: "john", age: 40 };
  const [input, setInput] = useState(value);
  const inputName = (e) => {
    setInput({ ...input, name: e.target.value});
  };
  const inputAge = (e) => {
    setInput({ ...input, age: e.target.value});
  };
  const resetInput = () => {
    setInput({name: "", age: 0});
  };

  return (
    <>
      <div className="wrapper">
        <p>カウント数／{count}</p>
        <button onClick={countUp}>Count Up</button>
        <button onClick={countDown}>Count Down</button>
        <button onClick={resetCount}>Reset Count</button>
      </div>

      {/* 問題点がある。
      value={input.name}でリセットボタンは効くが、placeholderだとタメだ。
      ただ、ユーザビリティーを考えたらここはvalueではダメ。 */}
      <div className="wrapper input-sample">
        <h3>Name: {input.name}</h3>
        <h3>Age: {input.age}</h3>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={input.name} onChange={inputName} />
          </li>
          <li>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number" value={input.age} onChange={inputAge} />
          </li>
          <li>
            <button onClick={resetInput}>Input Reset</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactParts;