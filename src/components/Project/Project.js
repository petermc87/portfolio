import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoMdInformationCircleOutline } from "react-icons/io";
import styles from "../Project/Project.module.scss";

export default function Project({
  image,
  title,
  url,
  blurb,
  note,
  tech,
  github,
}) {
  // Split up the blurb here if it has bold text.

  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div className={styles.projectContainer}>
        <div className={styles.projectImage}>
          <img src={image} alt="hero" />
        </div>
        <div className={styles.projectDescription}>
          <div>
            <h2>{title}</h2>
            <p>{blurb}</p>
            {/* NOTE: Render this if the 'note' is not empty. */}
            {note && (
              <p id={styles.note}>
                <IoMdInformationCircleOutline className={styles.alertIcon} />
                {/* Extra instructions for the user for Yum2me. This is so that */}
                {/* the app can be demoed properly. */}
                {title === "Yum2me" && (
                  <>
                    <strong>DEMO LOGIN</strong>
                    <br />
                    <br />- <span>Customer Profile:</span> email:{" "}
                    <strong>j@j.com</strong>, password: <strong>12345</strong>
                    <br />
                    <br />- <span>Restaurant Profile:</span> email:
                    <strong> me@gmail.com</strong>, password:{" "}
                    <strong>12345</strong>
                    <br />
                    <br />- <span>Driver Profile:</span> email:{" "}
                    <strong>jerry@mail.com</strong>, password:{" "}
                    <strong>12345</strong>
                    <br />
                    <br />
                    <strong>DEMO INSTRUCTIONS</strong>
                    <br />
                  </>
                )}
                {note}
              </p>
            )}

            <div>
              <p>
                <span>Technologies Used:</span> {tech}
              </p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {/* Create a ternary to determine whether there is a live link to the app. */}
            {/* If not, make sure there is a greyed out button */}
            {/* --- LIVE LINK AND A GITHUB LINK --- */}
            {url !== "IN DEVELOPMENT" && github !== "n/a" ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div className={styles.button}>
                  <h4>Launch App</h4>
                </div>
              </a>
            ) : // --- LIVE LINK AND NO GITHUB LINK (DATA ANALYTICS) --- //
            url !== "IN DEVELOPMENT" && github === "n/a" ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div className={styles.button}>
                  <h4>Go to download</h4>
                </div>
              </a>
            ) : (
              // --- NO LIVE LINK AND A GITHUB LINK --- //
              <div className={styles.button} style={{ borderColor: "gray" }}>
                <h4 style={{ color: "gray" }}>Coming Soon...</h4>
              </div>
            )}

            {/* If the project is software dev, show GitHub. */}
            {github !== "n/a" || github !== "" ? (
              <a href={github}>
                <div className={styles.button}>
                  <h4>Github</h4>
                </div>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
