import BackgroundEffects from '@/components/backgrounds/backgroundEffects';
import Footer from '@/components/footer/index';
import Header from '@/components/header/index';
import { Marquee } from '@/components/marquee';
import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import VideoShowcase from '@/components/sections/videos';

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundEffects />
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <Marquee text="cassielxyz" />

        <section id="projects">
          <Projects />
        </section>

        <section id="videos">
          <VideoShowcase />
        </section>

      </main>
      <Footer />
    </>
  );
}
