import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import layoutStyle from "../components/layout.module.css"
import utilStyle from "../styles/util.module.css"
import { getSortedPostsData } from "../lib/posts"
import Date from "../components/date"

const name = "Nob Takahiro"

export default function Blog({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <Link href="/">
          <a>
            <img src="/images/profile.jpg"
              className={`${layoutStyle.headerImage} ${utilStyle.borderCircle}`}
              alt={name} />
          </a>
        </Link>
        <h3 className="blogTitle">
          <Link href="/">
            <a>{name}</a>
          </Link>
        </h3>
      </div>

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
        .blogTitle {
          font-weight: 900;
          text-align: center;
        }
        .blogTitle a {
          font-size: 2rem;
          color: inherit;
          text-decoration: none;
          letter-spacing: -0.025rem;
        }
        .indexH1 {
          margin-top: 2rem;
          font-size: 8rem;
          line-height: 0.5;
          text-align: center;
          letter-spacing: -0.6rem;
        }
        .catchCopy { font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.4rem;
          text-align:center;
        }
        .indexLi { font-size: 1.2rem;
          line-height: 1.3rem;
        }
        .indexListDate { margin: 0.2rem 0 0.7rem 1.2rem;
          font-size: 0.9rem;
        }
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