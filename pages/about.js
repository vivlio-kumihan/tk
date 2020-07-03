import Link from 'next/link'

export default () => (
  <div>
    <div>About us</div>
    <div>Back to <Link href='/' as={ process.env.BACKEND_URL + '/'}><a>Home</a></Link></div>
  </div>
)

// この書き方が出来ない謎
// export default function About() {
//   <div>
//     <div>About us</div>
//     <div>Back to <Link href='/' as={ process.env.BACKEND_URL + '/'}><a>Home</a></Link></div>
//   </div>
// }