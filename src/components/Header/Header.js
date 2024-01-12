import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Header/Header.module.scss";
export default function Header() {
  // Hamburger open state.
  const [openHamburger, setOpenHamburger] = useState(false);
  // Initializing the hamburger state -> this is so that it doesnt open on page load.
  const [hamburgerInitializer, setHamburgerInitializer] = useState(false);
  const navigate = useNavigate();

  // Variable for the link to the updated resume.
  // NOTE: Resume up to 1/10/2024: "https://drive.google.com/file/d/1LaVL8Wi6fC5TyvBpWzHEyl-yKSTZzNdQ/view?usp=sharing";
  const resume =
    "https://drive.google.com/file/d/1CauAg3se1MYALEpsMsi0v8SuwxCIvKDV/view?usp=sharing";

  const handleHomeNavigate = () => {
    navigate("/");
  };

  const handleAboutNavigate = () => {
    navigate("/about");
  };

  function sendEmail() {
    window.location.assign("mailto:peter.mcgibney@gmail.com");
  }

  return (
    <>
      <div className={styles.navigation}>
        <div
          className={styles.logo}
          onClick={() => {
            handleHomeNavigate();
          }}
        >
          <div className={styles.straight} />
          <div className={styles.circle} />
          <div className={styles.line} />
          <div className={styles.lineTwo} />
          <div className={styles.straightEnd} />
        </div>
        <div
          className={styles.navSelector}
          onClick={() => {
            handleHomeNavigate();
          }}
        >
          <h2>Home</h2>
        </div>
        <div className={styles.navSelector}>
          {/* Target attribute will open a new tab. The rel will prevent tab nabbing. */}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <h2>Resume</h2>
          </a>
        </div>
        <div
          className={styles.navSelector}
          onClick={() => {
            handleAboutNavigate();
          }}
        >
          <h2>About</h2>
        </div>
        <div
          className={styles.navSelector}
          onClick={() => {
            sendEmail();
          }}
        >
          <h2>Contact</h2>
        </div>
        {!openHamburger ? (
          <div
            onClick={() => {
              setOpenHamburger(true);
              setHamburgerInitializer(true);
            }}
            className={styles.hMenu}
          >
            <div className={styles.lineOneHm} />
            <div className={styles.lineTwoHm} />
            <div className={styles.lineThreeHm} />
          </div>
        ) : (
          <div
            onClick={() => {
              setOpenHamburger(false);
            }}
            className={styles.hMenu}
          >
            &#10005;
          </div>
        )}
      </div>
      {openHamburger && hamburgerInitializer ? (
        <div className={styles.hamburgerNav}>
          <div
            className={styles.navItem}
            onClick={() => {
              handleHomeNavigate();
              setOpenHamburger(false);
            }}
          >
            <h1>Home</h1>
          </div>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <div className={styles.navItem}>
              <h1>Resume</h1>
            </div>
          </a>
          <div
            className={styles.navItem}
            onClick={() => {
              handleAboutNavigate();
              setOpenHamburger(false);
            }}
          >
            <h1>About</h1>
          </div>
          <div
            className={styles.navItem}
            onClick={() => {
              sendEmail();
            }}
          >
            <h1>Contact</h1>
          </div>
        </div>
      ) : !openHamburger && hamburgerInitializer ? (
        <div className={styles.hamburgerNavOut}>
          <div
            className={styles.navItem}
            onClick={() => {
              handleHomeNavigate();
              setOpenHamburger(false);
            }}
          >
            <h1>Home</h1>
          </div>
          <a href={resume}>
            <div className={styles.navItem}>
              <h1>Resume</h1>
            </div>
          </a>
          <div
            className={styles.navItem}
            onClick={() => {
              handleAboutNavigate();
            }}
          >
            <h1>About</h1>
          </div>
          <div
            className={styles.navItem}
            onClick={() => {
              sendEmail();
            }}
          >
            <h1>Contact</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
