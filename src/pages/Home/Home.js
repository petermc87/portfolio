import { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/Section/AboutSection/AboutSection";
import CompetenciesSection from "../../components/Section/CompetenciesSection/CompetenciesSection";
import IntroSection from "../../components/Section/IntroSection/IntroSection";
import ProjectSection from "../../components/Section/ProjectSection/ProjectSection";

export default function Home() {
  // Use ref for navigation from navbar
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Navigate to action
  const refHandleClick = (reference) => {
    reference.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={homeRef}>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        refHandleClick={refHandleClick}
      />
      <main>
        <IntroSection />
        <ProjectSection projectsRef={projectsRef} />
        <CompetenciesSection />
        <AboutSection aboutRef={aboutRef} />
      </main>
      <Footer />
    </div>
  );
}
