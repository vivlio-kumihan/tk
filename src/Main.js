import Hero from "./conponents/Hero"

const Main = () => {
  return (
    <main>
      <Hero />
      <div className="greeting">
        <h1 lang="en">Hello</h1>
        <p lang="en">Hello everyone, it's been a while.</p>
        <p lang="en">It's been two years since Nishimura Printing closed its doors, and now I'm working on web projects at Hokuto Print Co. located in the northern part of Kyoto.</p>
        <p lang="en">I'm dedicated to continuing my efforts to contribute to your information needs, just as before.</p>
        <p lang="en">Thank you very much for your support.</p><br />
        <p lang="en">Best regards.</p>
      </div>
    </main>
  )
}

export default Main