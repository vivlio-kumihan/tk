import Head from "next/head"
import Link from "next/link"
import layoutStyle from "./layout.module.css"
import utilStyle from "../styles/util.module.css"

export const siteTitle = "西村印刷株式会社"

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyle.container}>
      <Head>
        <link rel="icon" href="/profile_image_Apple.ico" />
        <meta name="description" content="hogehoge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script src="js/script.js"></script>
      </Head>
      <header className={layoutStyle.header}>
        <div className={layoutStyle.headerLogo}>
          <img src="/images/nishipri-logo.png" width="500px" alt="logo" />
        </div>
        <nav>
          <ul className={layoutStyle.mainNavUl}>
            <li className={layoutStyle.mainNavLi}>
              <a href="/">HOME</a>
            </li>
            <li className={layoutStyle.mainNavLi}>
              <Link href="/company">
                <a>COMPANY</a>
              </Link>
            </li>       
            <li className={layoutStyle.mainNavLi}>
              <a href="/access">ACCESS</a>
            </li>
            <li className={layoutStyle.mainNavLi}>
              <a href="/blog">BLOG</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={layoutStyle.backToHome}>
          <Link href="/">
            <a>← Back to Home</a>
          </Link>
        </div>
      )}
    </div>
  )
}