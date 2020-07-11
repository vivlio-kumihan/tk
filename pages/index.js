import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import indexStyles from "./index.module.css"
import Date from "../components/date"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h1>index page</h1>
      </section>
    </Layout>
  )
}