import Project from '../../Project/Project'
import styles from '../ProjectSection/ProjectSection.module.scss'
import Gamescreen from '../../../images/PM-gamescreen.png'
import MapAndSnap from '../../../images/mapandsnap.png'
import Instafake from '../../../images/instafake.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const piranhaMBlurb = 'Arcade style game where the player has control over a selected sprite, modeled on a fish, with the objective of eating smaller sprites (fish) before hull points are reduced to 0 by the impending Piranhas!'
const instafakeBlurb = 'Instafake is an Insragram clone, modeled on the real thing, but without the annoyance of sponsored content. The user also has the ability to edit commments in place, a feature Instagram does not have.'
const droneServicesBlurb = 'A services website for a small side business of mine offering Photography, Videography and Mapping.'

const piranhaTech = 'HTML, CSS, JavaScript'
const instafakeTech = 'MongoDB, Mongoose, Express, Node, React, SCSS'
const droneTech = 'React, SCSS, Node, EmailJS'

export default function ProjectSection () {
  return (
    <div className={styles.projectSection}>
      <br />
      <div className={styles.heading}><div className={styles.dash}></div><h4>WORK</h4></div>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Project
          image={MapAndSnap}
          title='Drone Map & Snap'
          url='https://dronemapandsnap.netlify.app/'
          github='https://github.com/petermc87/map-and-snap'
          blurb={droneServicesBlurb}
          tech={droneTech}
        />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn"> 
        <Project
          image={Instafake}
          title='Instafake'
          url='https://instafake.herokuapp.com/'
          github='https://github.com/bjlovee/instagram'
          blurb={instafakeBlurb}
          tech={instafakeTech}
        />
       </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Project
          image={Gamescreen}
          title='Piranha Madness!'
          url='https://petermc87.github.io/piranha-madness/'
          github='https://github.com/petermc87/project_1_piranha_madness'
          blurb={piranhaMBlurb}
          tech={piranhaTech}
        />
      </AnimationOnScroll>
    </div>
  )
}
