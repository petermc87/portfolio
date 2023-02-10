import Project from '../../Project/Project'
import styles from '../ProjectSection/ProjectSection.module.scss'

export default function ProjectSection () {
  return (
    <div className={styles.projectSection}>
      <br/>
      <div className={styles.heading}><h4> ---- WORK</h4></div>
      <Project />
      <Project />
      <Project />
    </div>
  )
}
