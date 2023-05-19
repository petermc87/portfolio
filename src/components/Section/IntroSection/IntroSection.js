import styles from '../IntroSection/IntroSection.module.scss'
export default function IntroSection () {
  return (
    <div className={styles.intro}>
      <h1>Hi, <span>Peter here</span>&#x1F44B;</h1>
      <p>I'm a <span>Full-Stack Software Engineer</span> with a strong interest in <span>backend</span> technologies 
          and a keen eye for modern <span>UI design</span>. With expertise in both <span>frontend</span> and <span>backend development</span>, 
          I create visually appealing and efficient applications that meet the needs of users.</p>
      <br />
    </div>
  )
}
