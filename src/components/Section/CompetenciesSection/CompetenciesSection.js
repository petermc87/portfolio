import styles from '../CompetenciesSection/CompetenciesSection.module.scss'
import Competency from '../../Competency/Competency'

export default function CompetenciesSection () {
  return (
    <div className={styles.competenciesWrapper}>
      <div className={styles.heading}><div className={styles.dash}></div><h4>SKILLS</h4></div>
      <div className={styles.competenciesContainersWrapper}>
      <Competency
        title='Databases'
        skills='MongoDB'
      />
      <Competency
        title='Languages'
        skills='JavaScript, HTML, CSS, SCSS, Python'
      />
      <Competency
        title='Frameworks'
        skills='React.js, Node.js, Express.js, Mongoose.js, Bootsrap'
      />
            <Competency
        title='Software Development Tools'
        skills='Postman, Git, Github, Heroku, Digital Ocean, Netlify, Visual Studio'
      />
      <Competency
        title='Methodologies'
        skills='Design Research, User Flows, MVC Architecture, Test-Driven Development, Responsive Design, Authentication, User Stories, ERDs, Wireframing, Agile Development'
      />


      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
