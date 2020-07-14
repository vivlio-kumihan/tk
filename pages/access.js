import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import utilStyle from "../styles/util.module.css"
import companyStyle from "./company.module.css"

export default function Company() {
  return (
    <Layout>
      <Head>
        <title>交通</title>
      </Head>
      <div>
        <h2 className={utilStyle.headingLg}><span>Access</span></h2>
        西村印刷株式会社
        〒534-0021
        大阪市都島区都島本通5丁目15-3
        TEL：06-6925-6555  FAX：06-6923-5710
        E-mail：nishipri@chive.ocn.ne.jp
        <img src="/images/nishipri-map.jpg" width="700px" alt="logo" />
      </div>
    </Layout>
  )
}
