import styles from '../Footer/Footer.module.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {

function sendEmail(){
  window.location.assign("mailto:peter.mcgibney@gmail.com")
}

  return (
    <div className={styles.footer}>
  
      <a href='https://www.linkedin.com/in/petermcgibney/'>
        <div className={styles.linkedin}>
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-solid fa-linkedin fa-3x"></FontAwesomeIcon>
        </div>
      </a>

      <a href='https://www.facebook.com/peter.mcgibney.3/'>
        <div className={styles.facebook}>
          <FontAwesomeIcon icon={faFacebook} className="fa-solid fa-facebook fa-3x"></FontAwesomeIcon>
        </div>
      </a>

      <a href='https://github.com/petermc87'>
        <div className={styles.github}>
          <FontAwesomeIcon icon={faGithub} className="fa-solid fa-github fa-3x"></FontAwesomeIcon>
        </div>
      </a>

      <a href='https://www.instagram.com/petermc/'>
        <div className={styles.instagram}>
          <FontAwesomeIcon icon={faInstagram} className="fa-solid fa-instagram fa-3x"></FontAwesomeIcon>
        </div>
      </a>
      
       <div className={styles.envelope} onClick={()=>{sendEmail()}}>
        <FontAwesomeIcon icon={faEnvelope} className="fa-solid fa-envelope fa-3x"></FontAwesomeIcon>
       </div>
    </div>
  )
}
