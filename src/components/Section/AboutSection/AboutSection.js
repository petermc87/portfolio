import improv from "../../../images/improv.jpeg";
import meandsaorla from "../../../images/merandsaorla.png";
import Article from "../../About/Article/Article";
import styles from "./AboutSection.module.scss";

export default function AboutSection({ aboutRef }) {
  return (
    <>
      {/* <Header /> */}
      <br />
      <br />
      <br />
      <br />
      <div className={styles.aboutMe}>
        <Article
          heroimage={meandsaorla}
          improvimage={improv}
          aboutRef={aboutRef}
        />
      </div>
    </>
  );
}
