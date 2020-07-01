import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"

// 投稿をレンダリングする
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      {postData.tag}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

// id = ファイル名のリストを返す非同期関数を定義
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths, fallback: false
  }
}

// 与えられたid = ページ名を持つブログ記事に必要なデータを取得する非同期関数を定義
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}