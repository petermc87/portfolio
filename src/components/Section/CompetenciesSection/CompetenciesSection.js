import styles from '../CompetenciesSection/CompetenciesSection.module.scss'
import Competency from '../../Competency/Competency'

export default function CompetenciesSection () {
  return (
    <div className={styles.competenciesSection}>
      <Competency />
      <Competency />
      <Competency />
    </div>
  )
}
