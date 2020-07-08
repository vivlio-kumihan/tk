// このAppコンポーネントは、すべての異なるページに共通するトップレベルのコンポーネント。
// 例えば、ページ間を移動する際に状態を保持するために、このAppコンポーネントを使用することができる。

import "../styles/reset.css"
import "../styles/global.css"

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}