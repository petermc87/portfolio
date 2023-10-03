import styles from '../Project/Project.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Project ({ image, title, url, blurb, tech, github }) {
  return (
    <AnimationOnScroll animateIn='animate__fadeIn'>
      <div className={styles.projectContainer}>
        <div className={styles.projectImage}><img src={image} alt='hero' /></div>
        <div className={styles.projectDescription}>

          <div>
            <h2>{title}</h2>
            <p>{blurb}</p>
            <div>
              <p><span>Technologies Used:</span> {tech}</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {/* Create a ternary to determine whether there is a live link to the app. */}
            {/* If not, make sure there is a greyed out button */}
            {url !== 'IN DEVELOPMENT'
              ? <a href={url} target='_blank' rel='noopener noreferrer'>
                <div className={styles.button}><h4>Launch App</h4></div>
              </a>

              : <div className={styles.button} style={{ borderColor: 'gray' }}><h4 style={{ color: 'gray' }}>Coming Soon...</h4></div>}

            <a href={github}>
              <div className={styles.button}><h4>Github</h4></div>
            </a>
          </div>

        </div>
      </div>
    </AnimationOnScroll>
  )
}
