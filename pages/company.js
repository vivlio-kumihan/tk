import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import companyStyle from "./company.module.css"

export default function Company() {
  return (
    <Layout>
      <Head>
        <title>会社概要</title>
      </Head>
      <h1>会社概要</h1>
      <div className={companyStyle.flexContainer}>
        <div className={companyStyle.flexItem}>1</div>
        <div className={companyStyle.flexItem}>2</div>
        <div className={companyStyle.flexItem}>3</div>
        <div className={companyStyle.flexItem}>4</div>
      </div>
    </Layout>
  )
}