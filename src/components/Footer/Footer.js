import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Footer/Footer.module.scss";

export default function Footer() {
  // Opens a new email window.
  function sendEmail() {
    window.location.assign("mailto:peter.mcgibney@gmail.com");
  }

  // Adding the current year to the footer.
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/petermcgibney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.linkedin}>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="fa-solid fa-linkedin fa-3x"
            />
          </div>
        </a>

        <a
          href="https://www.facebook.com/peter.mcgibney.3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.facebook}>
            <FontAwesomeIcon
              icon={faFacebook}
              className="fa-solid fa-facebook fa-3x"
            />
          </div>
        </a>

        <a
          href="https://github.com/petermc87"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.github}>
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-solid fa-github fa-3x"
            />
          </div>
        </a>

        <a
          href="https://www.instagram.com/petermc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.instagram}>
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-solid fa-instagram fa-3x"
            />
          </div>
        </a>

        <div
          className={styles.envelope}
          onClick={() => {
            sendEmail();
          }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa-solid fa-envelope fa-3x"
          />
        </div>
      </div>
      <div className={styles.bottomText}>
        <strong>Peter McGibney, {currentYear}. All rights reserved.</strong>
      </div>
    </>
  );
}
