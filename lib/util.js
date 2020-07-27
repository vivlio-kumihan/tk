export default function Util() {
  // 変数を出してみる
  const str = "nobu"
  // 変数を出してみる
  const arr = ["nobu", "kazu", "mari"]
  const rows = arr.map(person => {
    return (
      <li>hello {person}</li>
    )
  }) 

  return (
    <div>
      <h1>{str}</h1>
      <ul>{rows}</ul>
    </div>
  )
}
