// import Form from "./Form.js" // 必要であれば改めて作成する

const Contact = () => {

  return(
    <>
      <h2>contact form</h2>
      <p className="note">For display purposes only. Please do not input any data.</p>
      <div>
        <label htmlFor="name">お名前</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="contents">お問い合わせ内容</label>
        <textarea name="" id="contents"></textarea>
      </div>
      <button type="button">送信</button>
    </>
  )
}
export default Contact