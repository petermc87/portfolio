import Article from "../../components/About/Article/Article";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import improv from "../../images/improv.jpeg";
import meandsaorla from "../../images/merandsaorla.png";
import styles from "../About/About.module.scss";

export default function About() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.aboutMe}>
        <Article heroimage={meandsaorla} improvimage={improv} />
      </div>
      <Footer />
    </>
  );
}
