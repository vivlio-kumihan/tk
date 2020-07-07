import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import Date from "../../components/date"

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h2>
        {postData.title}
      </h2>
      <style jsx>{`
        h2 {
          margin-top: 1rem;
          line-height: 1.5rem;
        }
      `}</style>
      {/* {postData.id}<br />  ファイル名を記載する必要は無いと判断する。 */}
      {/* {postData.date}<br />  this is origin code. under one replace code. */}
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
    </Layout>
  )
}

export async function getStaticPaths() {
  // idから得た値をリストで返す。
  const paths = getAllPostIds()
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  // パラメータのidを使って、ブログ投稿から必要なデータを収集する。
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}