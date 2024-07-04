import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/Section/AboutSection/AboutSection";
import CompetenciesSection from "../../components/Section/CompetenciesSection/CompetenciesSection";
import IntroSection from "../../components/Section/IntroSection/IntroSection";
import ProjectSection from "../../components/Section/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <ProjectSection />
        <CompetenciesSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
