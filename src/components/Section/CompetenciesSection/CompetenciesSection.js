import styles from '../CompetenciesSection/CompetenciesSection.module.scss'
import Competency from '../../Competency/Competency'

export default function CompetenciesSection () {

  const js = 'JavaScript'
  const html = 'HTML'
  const css = 'CSS'

  const react = 'ReactJS'
  const sass = 'SASS'

  const mongoose = 'MongooseJS'
  const express = 'ExpressJS'
  const node = 'NodeJS'

  const github = 'GitHub'
  const git = 'Git'

  return (
    <div className={styles.competenciesWrapper}>
  
    <div className={styles.heading}><h4> ---- SKILLS</h4></div>
    {/* <div className={styles.competenciesSection}> */}
      {/* <br/>
      <div className={styles.heading}><h4> ---- SKILLS</h4></div> */}
      <Competency 
        skillOne={js}
        skillTwo={html}
        skillThree={css}
      />
      <Competency 
        skillOne={react}
        skillTwo={sass}
      />
      <Competency 
        skillOne={mongoose}
        skillTwo={express}
        skillThree={node}
      />
      <Competency 
        skillOne={github}
        skillTwo={git}
      />
    {/* </div> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
