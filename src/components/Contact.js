import { useState } from 'react';
import Count from "./Count";
import ContactParts from "./ContactParts";
import GridLayout from "./GridLayout";
import Todo from "./Todo";

const Contact = () => {
  const inputVal = { name: '組版太郎', age: 28, email: 'kumihan@taro.com', contents: ''};
  const [input, setInput] = useState(inputVal);
  const inputName = (e) => {
    setInput(input => ({ ...input, name: e.target.value }))
  };
  const inputAge = (e) => {
    setInput(input => ({ ...input, age: e.target.value }))
  };
  const inputEmail = (e) => {
    setInput(input => ({ ...input, email: e.target.value }))
  };
  const inputContents = (e) => {
    setInput(input => ({ ...input, contents: e.target.value }))
  };
  const reset = () => {
    // どれをやっても入力がリセットされない。理由がわからない。
    // setInput(input => ({ ...input, name: '', age: 0, email: '', contents: '' }))
    // setInput({ ...inputVal })
    setInput({ name: '', age: 0, email: '', contents: '' })
  };

  return(
    <>
      <h2>contact form</h2>
      <p className="note">For display purposes only. Please do not input any data.</p>
      <div className="form">
        <div className="input-corner">
          <div>
            <label htmlFor="name">お名前</label>
            <input id="name" type="text" onChange={inputName} placeholder={input.name} />
          </div>
          <div>
            <label htmlFor="age">年齢</label>
            <input id="age" type="number" onChange={inputAge} placeholder={input.age} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={inputEmail} placeholder={input.email} />
          </div>
          <div>
            <label htmlFor="contents">お問い合せ内容</label>
            <textarea name="" id="contents" onChange={inputContents} placeholder={input.contents}></textarea>
          </div>
        </div>
        <div className="output-corner">
          <label htmlFor="name">【お名前】</label>
          <div className="output">{input.name}</div>
          <label htmlFor="name">【年齢】</label>
          <div className="output">{input.age}</div>
          <label htmlFor="email">【Email】</label>
          <div className="output">{input.email}</div>
          <label htmlFor="contents">【お問い合せ内容】</label>
          <div className="output">{input.contents}</div>
          <ul className="button-wrap">
            <li>
              <button type="button">送信</button>
            </li>
            <li>
              <button type="button" onClick={reset}>リセット</button>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="remainder">Remainder</h2>
      <div id='todo' className="todo">
        <Todo />
      </div>
      <div className="grid-layout">
        <GridLayout />
      </div>
      <div className="count">
        <Count />
      </div>
      <div className="contact-parts">
        <ContactParts />
      </div>
    </>
  )
}
export default Contact