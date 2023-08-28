// オブジェクトだから当たり前、キーの名称で管理している。順番じゃない。
const Form = ({color, num, member, myFunc, thisFunc, bool=false}) => {
  return(
    <>
      {/* propsで文字列を受信する。JSX内で変数を文字列展開する。 */}
      <h1 lang="en" className={`form-style ${color}`}>props &gt; string</h1>
      <h2 lang="en">props &gt; {num}</h2>
      <h3 lang="en">props &gt; {member.name}</h3>
      {/* 関数を持ち運んで最後は実行 => ()が必要 */}
      <h4 lang="en">props &gt; total amount: {thisFunc()}</h4>
      <h5 lang="en">props &gt; {myFunc("Paul")}</h5>
      <p lang="en">props &gt; {`${bool === 0}`}</p>
    </>
  )
};

export default Form;