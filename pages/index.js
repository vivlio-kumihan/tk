import Link from 'next/link'
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>takahiro blog</title>
        <link rel="icon" href="/profile_image_Apple.ico"
          as={process.env.BACKEND_URL + '/profile_image_Apple.ico'} />
      </Head>
      <h1>
        Hello World.
      </h1>
      <Link href='/about' as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <div>
        <img  src="/kumihan.svg" alt="kumihan logo" className="logo"
          as={process.env.BACKEND_URL + "/kumihan.svg"} />
      </div>
      <style jsx> {`
        .logo {
          width: 10rem;
        }
      `}</style>
    </div>
  )
}




// export default () => (
// )