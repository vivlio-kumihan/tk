// import Form from "./Form.js" // 必要であれば改めて作成する

const Contact = () => {

  return(
    <>
      <label htmlFor="">お名前</label>
      <input type="text" />
      <label htmlFor="">Email</label>
      <input type="email" />
      <label htmlFor="">お問い合わせ内容</label>
      <input type="string" />
      <button type="button">送信</button>
    </>
  )
}
export default Contact