import Header from '../../components/Header/Header'
import IntroSection from '../../components/Section/IntroSection/IntroSection'
import ProjectSection from '../../components/Section/ProjectSection/ProjectSection'
import CompetenciesSection from '../../components/Section/CompetenciesSection/CompetenciesSection'
import Footer from '../../components/Footer/Footer'

export default function Home () {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <ProjectSection />
        <CompetenciesSection />
      </main>
      <Footer />
    </>
  )
}
