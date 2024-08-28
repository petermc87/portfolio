import "animate.css/animate.min.css";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import styles from "../App/App.module.scss";
import Home from "../Home/Home";

function App() {
  return (
    <div className={styles.app}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter McGibney</title>
        <link rel="canonical" href="https://petermcgibney.com/" />
        <meta name="description" content="Portfolio website" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
