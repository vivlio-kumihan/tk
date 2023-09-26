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

  // 配列　シャッフルしてみる。
  // 1から5までの配列を作る。
  // `undefined`が入ってくる、無視したいので`_`を入れておく
  const arr = [...Array(5)].map((_, idx) => idx + 1);
  const [shaffleArr, setShuffleArr] = useState(arr);
  // 配列の操作は別名を作ってから。
  const clickBtn = () => {
    const asSaveAsArr = [...shaffleArr];
    const popedVal = asSaveAsArr.pop();
    asSaveAsArr.unshift(popedVal);
    setShuffleArr(asSaveAsArr);
  }
  
  // 配列の中の値を合計してみる。
  const addCalcArr = [...Array(5)].map((_, idx) => idx + 1);
  const [addArr, setAddArr] = useState(addCalcArr);
  const addCalc = () => {
    if (typeof addArr === "object") {
      const asSaveAddArr = [...addArr];
      const result = asSaveAddArr.reduce((acc, n) => acc + n, 0);
      return setAddArr(result);
    }
  }

  // 配列を文字列に変換する。
  // const joinArrStr = (arr) => {
  //   return arr.join(", ");
  // };

  // toggleで状態を切り替える
  const [toggle, setToggle] = useState(true);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const toggleComponent = () => {
    setToggle(prev => !prev); 
  };

  return (
    <>
      {/* カウンター */}
      <div className="wrapper">
        <p>カウント数／{count}</p>
        <button onClick={countUp}>Count Up</button>
        <button onClick={countDown}>Count Down</button>
        <button onClick={resetCount}>Reset Count</button>
      </div>

      {/* input要素へ入力 */}
      {/* 問題点がある。解決法見つけられてない。
      value={input.name}でリセットボタンは効くが、placeholderだとタメだ。
      ただ、ユーザビリティーを考えたらここはvalueではダメ。 */}
      <div className="wrapper input-sample">
        <h3>Name: {input.name}</h3>
        <h3>Age: {input.age}</h3>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder={input.name} onChange={inputName} />
            {/* <input id="name" type="text" value={input.name} onChange={inputName} /> */}
          </li>
          <li>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number" placeholder={input.age} onChange={inputAge} />
            {/* <input id="age" type="number" value={input.age} onChange={inputAge} /> */}
          </li>
          <li>
            <button onClick={resetInput}>Input Reset</button>
          </li>
        </ul>
      </div>

      {/* 配列 　シャッフルしてみる */}
      <div className="wrapper for-arr">
        <p>{shaffleArr}</p>
        <button onClick={clickBtn}>シャッフルする</button>
      </div>

      {/* 合計してみる */}
      <div className="wrapper for-arr">
        <p>{addArr}</p>
        <button onClick={addCalc}>合計する</button>
      </div>

      <div className="wrapper for-arr toggle-btn">
        {/* toggleで状態を切り替える */}
          {/* 子コンポーネントに状態を持たせない。親コンポーネントで状態を持つこと。 */}
          {/* 複数の状態を生成しておくこと。 */}
          {/* toggleの関数をsetToggle関数で作っておくこと、これイディオム。 */}
        <button onClick={toggleComponent}>Toggle</button>
        {toggle 
          ? <Counter title="A" key="A" counter={counterA} setCounter={setCounterA} /> 
          : <Counter title="B" key="B" counter={counterB} setCounter={setCounterB} />
        }
      </div>
    </>
  );
};

const Counter = ({ title, counter, setCounter }) => {
  const countUp = () => {
    setCounter(counter + 1)
  };
  const countDown = () => {
    setCounter(counter - 1)
  };

  return (
    <>
      <h3>{title}: {counter}</h3>
      <button onClick={countUp}>Count Up</button>
      <button onClick={countDown}>Count Down</button>
    </>
  );
};

export default ContactParts;