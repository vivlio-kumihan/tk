import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import Date from "../components/date"
// import utilStyle from "../styles/util.module.css"

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h1 className="indexH1">
          Hello!
      </h1>
        <p className="catchCopy">
          Hi, I'm Nob. I'm a DTP operator and photographer.
        <br />
        Welcome my boring Blog...
      </p>
      </section>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="indexLi" key={id}>
              {/* この時点でgithubでブログを表をを諦めざる得ない。 */}
              {/* <Link href="/posts/[id]" as={process.env.BACKEND_URL + '/posts/${id}'}> */}
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link><br />
              {/* {id}<br /> ファイル名はいらないからコメントアウトする。*/}
              <div className="indexListDate">
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <style jsx>{`
        .indexH1 { margin-top: 1rem; font-size: 10rem; line-height: 0.5; text-align: center; letter-spacing: -0.6rem; }
        .catchCopy { font-size: 1.2rem; font-weight: 500; line-height: 1.4rem; text-align:center; }
        .indexLi { font-size: 1.2rem; line-height: 1.3rem; }
        .indexListDate { margin: 0.2rem 0 0.7rem 1.2rem; font-size: 0.9rem; }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}