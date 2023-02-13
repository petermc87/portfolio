import Project from '../../Project/Project'
import styles from '../ProjectSection/ProjectSection.module.scss'
import Gamescreen from '../../../images/PM-gamescreen.png'
import Yum2me from '../../../images/yum2me.png'
import Instafake from '../../../images/instafake.png'

export default function ProjectSection () {
  return (
    <div className={styles.projectSection}>
      <br />
      <div className={styles.heading}><h4> ---- WORK</h4></div>
      <Project
        image={Gamescreen}
        title='Piranha Madness!'
        url='https://petermc87.github.io/project_1_piranha_madness/'
      />
      <Project
        image={Yum2me}
        title='Yum2me'
        url='https://starfish-app-glmra.ondigitalocean.app/'
      />
      <Project
        image={Instafake}
        title='Instafake'
        url='https://instafake.herokuapp.com/'
      />
    </div>
  )
}
