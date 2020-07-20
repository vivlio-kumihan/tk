import Head from "next/head"
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
        <img src="/images/AdobeStock_108590062.png" alt="main image" />
      </div>

      <div className={indexStyle.catchCopy}>
        <img src="/images/catch-copy.png" alt="catch copy" />
      </div>

      <div className={indexStyle.ourWork}>
        <h2 className={utilStyle.headingLg}><span>Our Wroks</span></h2>
        <div className={indexStyle.ourWorkImgs}>
          <div><img src="/images/img_nishipri_brochure_cover4.jpg" alt="" /></div>
          <div><img src="/images/img_obamj_covers1.jpg" alt="" /></div>
          <div><img src="/images/img_obamj_covers2.jpg" alt="" /></div>
          <div><img src="/images/img_nishipri_brochure_cover5.jpg" alt="" /></div>
          <div><img src="/images/img_nishipri_brochure_cover2.jpg" alt="" /></div>
          <div><img src="/images/img_nishipri_brochure_cover3.jpg" alt="" /></div>
          <div><img src="/images/img_book_cover1.jpg" alt="" /></div>
          <div><img src="/images/img_nishipri_brochure_cover1.jpg" alt="" /></div>
          <div><img src="/images/img_books.jpg" alt="" /></div>
        </div>
      </div>      
    </Layout>
  )
}