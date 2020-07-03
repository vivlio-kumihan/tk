import Link from "next/link"

export default function FisrtPost() {
  return (
    <div>
      <h1>Here is First Post!</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </div>
  ) 
}