import styles from '../Project/Project.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'


export default function Project ({ image, title, url, blurb, tech, github }) {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
    <div className={styles.projectContainer}>
      <div className={styles.projectImage}><img src={image} alt='image' /></div>
      <div className={styles.projectDescription}>
        
          <div>
            <h2>{title}</h2>
            <p>{blurb}</p>
            <div>
            <p><span>Technologies Used:</span> {tech}</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <a href={url}>
              <div className={styles.button}><h4>Launch App</h4></div>
            </a>
            <a href={github}>
              <div className={styles.button}><h4>Github</h4></div>
            </a>
          </div>
        
      </div>
    </div>
    </AnimationOnScroll>
  )
}
