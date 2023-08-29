import Form from "./Form.js"

const numArr = [1, 2, 3, 4, 5]
const Contact = () => {
  const member = {name: "takahiro", age: 58, address: "大阪"};
  const thisFunc = () => {
    return numArr
      .map(i => i * 10)
      .reduce((acc, val) => acc + val, 0);
  }
  const myFunc = (arg) => {
    return `hello ${arg}`
  };

  return(
    <Form 
      color={"green"}     // 文字列を渡す
      num={650331}         // 数値を渡す
      member={member}     // オブジェクトを渡す
      myFunc={myFunc}     // 関数を渡す　引数あり
      thisFunc={thisFunc} // 関数を渡す
      // bool             // 真偽値を渡す　true => defaultで渡るから記述の必要はない。
    />
  )
}
export default Contact