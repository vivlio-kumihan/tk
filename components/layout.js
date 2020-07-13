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
              <a href="#top">HOME</a>
            </li>
            <li className={layoutStyle.mainNavLi}>
              <a href="#sec01">COMPANY</a>
            </li>
            <li className={layoutStyle.mainNavLi}>
              <a href="#sec02">WORKS</a>
            </li>
            <li className={layoutStyle.mainNavLi}>
              <a href="#sec02">ACCESS</a>
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


{/* <header className={layoutStyle.header}>
  {home ? (
    <div>
      <img src="/images/profile.jpg"
        className={`${layoutStyle.headerHomeImage} ${utilStyle.borderCircle}`}
        alt={name} />
      <h2>{name}</h2>
    </div>
  ) : (
      <div>
        <Link href="/">
          <a>
            <img src="/images/profile.jpg"
              className={`${layoutStyle.headerImage} ${utilStyle.borderCircle}`}
              alt={name} />
          </a>
        </Link>
        <h3>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </h3>
        <style jsx>{`
                h3 { font-weight: 900; }
                a  { color: inherit; text-decoration: none; letter-spacing: -0.025rem; }
              `}</style>
      </div>
    )}
</header> */}