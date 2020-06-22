import Head from "next/head"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "Nobuyuki Takahiro"
export const siteTilte = "blog kumihan.com"

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/profile_image_Apple.ico" />
        <meta name="discription"
              content="My first blog made by React." />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name} />
            <h1 className={utilStyles.heading2XL}>
              {name}
            </h1>
          </div>
        ) : (
          <div>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name} />
              </a>
            </Link>
            <h2 className={utilStyles.headingLG}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>
                  {name}
                </a>
              </Link>
            </h2>
          </div>
        )}
      </header>
      <main>{children}</main>
      {
        !home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to Home</a>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Layout