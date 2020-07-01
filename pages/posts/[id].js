import Layout from "../../components/Layout"
import Date from "../../components/date"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import utilStyles from "../../styles/utils.module.css"

// 投稿をレンダリングする
export default function Post({ postData }) {
  return (
    <Layout>
    <Head>
      <title>{postData.tilte}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXL}>
      {postData.title}
      </h1>
      <div className={utilStyles.lightText} >
        {/* Replace {postData.date} with this */}
        <Date dateString={postData.date} />
      </div>
      {/* postコンポーネントを更新して、dangerouslySetInnerHTMLを使いcontentHtmlをレンダリングする。 */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
    </Layout>
  )
}

// {postData.id}
// {postData.tag}

// id = ファイル名のリストを返す非同期関数を定義
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths, fallback: false
  }
}

// 与えられたid = ページ名を持つブログ記事に必要なデータを取得する非同期関数を定義
export async function getStaticProps({ params }) {
  // 関連してここにもawaitキーワードが必要。
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}