import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import indexStyle from "./index.module.css"
import Date from "../components/date"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={indexStyle.mainImg}>
        <img src="/images/AdobeStock_108590062.png" alt="" />
      </div>
      <section className={indexStyle.sec01}>
        <h2>
          キャッチコピーどうする？　つくってきたものが、プロフィールです。
        </h2>
      </section>
      <section className={indexStyle.sec02}>
        <header>
          <h2><span>Gallery</span></h2>
        </header>
        <ul className={indexStyle.gallery}>
          <li><img src="/images/photo01.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo02.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo03.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo04.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo05.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo06.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo07.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo08.jpg" width="426" height="418" alt="" /></li>
          <li><img src="/images/photo09.jpg" width="426" height="418" alt="" /></li>
        </ul>
      </section>      
    </Layout>
  )
}