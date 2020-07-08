import Head from "next/head"
import Link from "next/link"
import layoutStyle from "./layout.module.css"
import utilStyle from "../styles/util.module.css"

const name = "Nob Takahiro"
export const siteTitle = "Blog Kumihan.com"

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyle.container}>
      <Head>
        <link rel="icon" href="/profile_image_Apple.ico" />
        <meta name="description" content="hogehoge" />
      </Head>
      <header className={layoutStyle.header}>
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