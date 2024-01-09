import { AnimationOnScroll } from "react-animation-on-scroll";
import Competency from "../../Competency/Competency";
import styles from "../CompetenciesSection/CompetenciesSection.module.scss";

export default function CompetenciesSection() {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div className={styles.competenciesWrapper}>
        <div className={styles.heading}>
          <div className={styles.dash} />
          <h4>SKILLS</h4>
        </div>
        <div className={styles.competenciesContainersWrapper}>
          <Competency title="Databases" skills="MongoDB, Postgres" />
          <Competency
            title="Languages"
            skills="JavaScript, HTML, CSS, SCSS, Python, GOLang, TypeScript"
          />
          <Competency
            title="Frameworks"
            skills="React.js, Node.js, Express.js, Mongoose.js, Bootsrap, Next.js, Storybook, Strapi"
          />
          <Competency
            title="Software Development Tools"
            skills="Postman, Git, Github, Heroku, Digital Ocean, Netlify, Visual Studio, Docker"
          />
          <Competency
            title="Methodologies"
            skills="Design Research, User Flows, MVC Architecture, Test-Driven Development, Responsive Design, Authentication, User Stories, ERDs, Wireframing, Agile Development"
          />
          <Competency
            title="Data Analytics"
            skills="DAX, PowerBI, Data Modeling"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </AnimationOnScroll>
  );
}
