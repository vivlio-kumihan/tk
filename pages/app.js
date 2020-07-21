import Layout, { siteTitle } from "../components/layout"
import {greetHello} from "../lib/util"


export default function myApp() {
  const stone = "石"
  return (
    <Layout>
      {greetHello}
      <greetHello />
      <h1>直に書く</h1>
      <h2>{stone}</h2>
    </Layout>
  )
}