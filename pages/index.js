import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import utilStyle from "../styles/util.module.css"
import indexStyle from "./index.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={indexStyle.mainImg}>
        <img src="/images/AdobeStock_108590062.png" alt="" />
      </div>
      <div className={indexStyle.catchCopy}>
        <div>
          <img src="/images/catch-copy.png" alt="catch copy" />
        </div>
      </div>
      <div className={indexStyle.ourWork}>
        <h2 className={utilStyle.headingLg}><span>Our Wroks</span></h2>
        <div className={indexStyle.ourWorkImgs}>
          <div><img src="/images/photo01.jpg" alt="" /></div>
          <div><img src="/images/photo02.jpg" alt="" /></div>
          <div><img src="/images/photo03.jpg" alt="" /></div>
          <div><img src="/images/photo04.jpg" alt="" /></div>
          <div><img src="/images/photo05.jpg" alt="" /></div>
          <div><img src="/images/photo06.jpg" alt="" /></div>
          <div><img src="/images/photo07.jpg" alt="" /></div>
          <div><img src="/images/photo08.jpg" alt="" /></div>
          <div><img src="/images/photo09.jpg" alt="" /></div>
        </div>
      </div>      
    </Layout>
  )
}