import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utileStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utileStyles.headingMd}>
        <p>[my self introduction here]</p>
        <p>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}