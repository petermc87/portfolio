import styles from "../Competency/Competency.module.scss";

export default function Competency({ skills, title }) {
  // Split the string coming in so the skills can be iterated.
  const skillsArray = skills.split(",");

  return (
    <div className={styles.competency}>
      <h2>{title}</h2>
      <div className={styles.skillsWrapper}>
        {/* Map out the skills to be shown here. */}
        {skillsArray.map((skill, i) => {
          return (
            <div key={i} className={styles.skill}>
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}
