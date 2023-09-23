const Form = ({}) => {
  return(
    <>
    </>
  )
};

export default Form;

// {/* propsで文字列を受信する。JSX内で変数を文字列展開する。 */}
// <h1 lang="en" className={`form-style ${color}`}>props &gt; string</h1>
// <h2 lang="en">props &gt; {num}</h2>
// <h3 lang="en">props &gt; {member.name}</h3>
// {/* 関数を持ち運んで最後は実行 => ()が必要 */}
// <h4 lang="en">props &gt; total amount: {thisFunc()}</h4>
// <h5 lang="en">props &gt; {myFunc("Paul")}</h5>
// <p lang="en">props &gt; {`${bool === 0}`}</p>

// const numArr = [1, 2, 3, 4, 5]
// const Contact = () => {
//   const member = {name: "takahiro", age: 58, address: "大阪"};
//   const thisFunc = () => {
//     return numArr
//       .map(i => i * 10)
//       .reduce((acc, val) => acc + val, 0);
//   }
//   const myFunc = (arg) => {
//     return `hello ${arg}`
//   };

//   return(
//     <Form 
//       color={"green"}     // 文字列を渡す
//       num={650331}         // 数値を渡す
//       member={member}     // オブジェクトを渡す
//       myFunc={myFunc}     // 関数を渡す　引数あり
//       thisFunc={thisFunc} // 関数を渡す
//       // bool             // 真偽値を渡す　true => defaultで渡るから記述の必要はない。
//     />
//   )
// }