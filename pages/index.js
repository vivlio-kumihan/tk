import Head from 'next/head'
import Layout, { siteTilte } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}

const Home = ({allPostsData}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTilte}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMD} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLG}>
          Blog
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title, tag}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home