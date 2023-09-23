import { useState } from 'react';

const Contact = () => {
  const inputVal = { name: '組版太郎', email: 'kumihan@taro.com', contents: ''};
  const [input, setInput] = useState(inputVal);
  const inputName = (e) => {
    setInput(input => ({ ...input, name: e.target.value }))
  };
  const inputEmail = (e) => {
    setInput(input => ({ ...input, email: e.target.value }))
  };
  const inputContents = (e) => {
    setInput(input => ({ ...input, contents: e.target.value }))
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
          <label htmlFor="email">【Email】</label>
          <div className="output">{input.email}</div>
          <label htmlFor="contents">【お問い合せ内容】</label>
          <div className="output">{input.contents}</div>
          <button type="button">送信</button>
        </div>
      </div>
    </>
  )
}
export default Contact