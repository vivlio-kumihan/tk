import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import Date from "../components/date"

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
      <h1>
        Hello!
      </h1>
      <p>
        Hi, I'm Nob. I'm a DTP operator and photographer.
        <br />
        Welcome my boring Blog...
      </p>
      <style jsx>{`
        h1 { margin-top: 1rem; font-size: 10rem; line-height: 0.5; text-align: center; letter-spacing: -0.6rem;}
        p { text-align:center }
      `}</style>
      </section>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}<br />
              {/* {id}<br /> */}
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}