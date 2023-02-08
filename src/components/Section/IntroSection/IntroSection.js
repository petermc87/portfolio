import styles from '../IntroSection/IntroSection.module.scss'
export default function IntroSection(){
    return(
        <div className={styles.intro}>
           <h1>Hi, <span>I'm Peter.</span></h1>
            {/* <br/> */}
            <p>A <span>Full-Stack Software Engineer</span> with a keen eye for modern <span>UI design</span> and a passion for <span>backend</span> technologies.</p>
            <br/>
        </div>
    ) 
}