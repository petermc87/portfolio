import styles from '../Competency/Competency.module.scss'

export default function Competency ({ skills, title }) {
  return (
    <div className={styles.competency}>
      <h2>{title}</h2>
        <div className={styles.skillsWrapper}>
          <div className={styles.skillContainer}>{skills}</div>
          </div>
    </div>
  )
}
