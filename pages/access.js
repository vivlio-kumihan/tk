import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import utilStyle from "../styles/util.module.css"
import accessStyle from "./access.module.css"

export default function Company() {
  return (
    <Layout>
      <Head>
        <title>交通</title>
      </Head>
      <div className={accessStyle.container}>
        <h2 className={utilStyle.headingLg}><span>Access</span></h2>
        <h4>西村印刷株式会社</h4>
        <h5>
        〒534-0021<br />
        大阪市都島区都島本通5丁目15-3<br />
        TEL：<a href="tel:06-6925-6555">06-6925-6555</a><br />
        FAX：06-6923-5710<br />
        E-mail：<a href="mailto:nishipri@chive.ocn.ne.jp">nishipri@chive.ocn.ne.jp</a><br />
        </h5>
        <div>
          <a href="https://goo.gl/maps/rm7tWM8DN4bR4hyW9" target="_blank">
            <img src="/images/nishipri-map.jpg" alt="map" />
          </a>
        </div>
        </div>
    </Layout>
  )
}
