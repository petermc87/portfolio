import styles from '../Competency/Competency.module.scss'

export default function Competency ({ skillOne, skillTwo, skillThree }) {
  return (
    <div className={styles.competency}>
      <div className={styles.skillContainer}>{skillOne}</div>
      <div className={styles.skillContainer}>{skillTwo}</div>
      {skillThree
        ? <div className={styles.skillContainer}>{skillThree}</div>
        : ''}
    </div>
  )
}
