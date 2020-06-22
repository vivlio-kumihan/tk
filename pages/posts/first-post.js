import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
        <link rel="icon" href="/profile_image_Apple.ico" />
      </Head>
      <h1>First Post</h1>
      <p>hello, hello, hello.</p>
    </Layout>
  ) 
}

export default FirstPost