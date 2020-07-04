import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyle from "../styles/util.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>
        Hello!
      </h1>
      <p>
        Hi, I'm Nob. I'm a DTP operator and photographer.
        <br />
        Welcome my boring Blog...
      </p>
      <style jsx>{`
        h1 { margin-top: 1rem; font-size: 10rem; line-height: 0.5; text-align: center; letter-spacing: -0.6rem;}
        p { text-align:center }
      `}</style>
    </Layout>
  )
}