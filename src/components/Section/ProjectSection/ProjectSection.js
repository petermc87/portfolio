import Project from '../../Project/Project'
import styles from '../ProjectSection/ProjectSection.module.scss'
import Gamescreen from '../../../images/PM-gamescreen.png'
import Yum2me from '../../../images/yum2me.png'
import Instafake from '../../../images/instafake.png'

const piranhaMBlurb = 'Arcade style game where the player has control over a selected sprite, modeled on a fish, with the objective of eating smaller sprites (fish) before hull points are reduced to 0 by the impending Piranhas!'
const yum2meBlurb = 'Food delivery MERN stack application comprising multiple functionalities across three different profiles and a comprehensive rating system.'
const instafakeBlurb = 'Instfake is an Insragram clone, modeled on the real thing, but without the annoyance of sponsored content. I also provided the user the ability to edit commments in place, a feature Instagram does not have.'
 
export default function ProjectSection () {
  return (
    <div className={styles.projectSection}>
      <br />
      <div className={styles.heading}><div className={styles.dash}></div><h4>WORK</h4></div>
      <Project
        image={Gamescreen}
        title='Piranha Madness!'
        url='https://petermc87.github.io/project_1_piranha_madness/'
        blurb={piranhaMBlurb}
      />
      <Project
        image={Yum2me}
        title='Yum2me'
        url='https://starfish-app-glmra.ondigitalocean.app/'
        blurb={yum2meBlurb}
      />
      <Project
        image={Instafake}
        title='Instafake'
        url='https://instafake.herokuapp.com/'
        blurb={instafakeBlurb}
      />
    </div>
  )
}
