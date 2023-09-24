import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    // 非同期で処理されている。
    setCount(count + 1);
    // それを抜ける方法は、別名を作ってやり過ごす。
    setCount(prevState => prevState + 1);
  }
  const countDown = () => {
    // 非同期で処理されている。
    setCount(count - 1)
  }

  return (
    <>
      <div className="wrapper">
        <p>現在のカウント数: {count}</p>
        <ul className="innner-wrap">
          <li>
            <button onClick={countUp}>＋</button>
          </li>
          <li>
            <button onClick={countDown}>−</button>
          </li>
        </ul>
      </div>
    </>
  );
};


export default Count