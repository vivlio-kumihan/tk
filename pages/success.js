import React from 'react'
import Layout from "../components/layout"
import Head from "next/head"
import utilStyle from "../styles/util.module.css"

const Success = () => {
  return (
    <Layout>
      <Head>
        <title>送信完了報告</title>
      </Head>
      <div>
        <h4>
          メッセージの送信に成功しました。<br />
          追って担当者からメールをお送りいたします。<br />
          今しばらくお待ちください。
        </h4>
      </div>
    </Layout>
  )
}

export default Success