import React from "react";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";
import Example from "./components/Example";
import PhotoViewer from "./components/PhotoViewer";
import Contact from "./components/Contact";
import Count from "./components/Count";
import ContactParts from "./components/ContactParts";

const Main = () => {
  return (
    <main>
      <Hero />
      <section className="greeting">
        <h1>Hello</h1>
        <p lang="en">Hello everyone, it's been a while.</p>
        <p lang="en">It's been two years since Nishimura Printing closed its doors, and now I'm working on web projects at Hokuto Print Co. located in the northern part of Kyoto.</p>
        <p lang="en">I'm dedicated to continuing my efforts to contribute to your information needs, just as before.</p>
        <p lang="en">Thank you very much for your support.</p><br />
        <p lang="en">Best regards.</p>
      </section>

      <section className="words">
        <Example />
      </section>

      <section className="photos">
        <PhotoViewer />
      </section>

      <section className="audio-player">
        <React.StrictMode>
          <AudioPlayer />
        </React.StrictMode>
      </section>

      <section id="contact" className="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Main;