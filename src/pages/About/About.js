import Header from "../../components/Header/Header"
import Article from "../../components/About/Article/Article"
import styles from '../About/About.module.scss'

export default function About () {
    return(
        <>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <h1>About Page</h1>
             */}
             <div className={styles.aboutMe}></div>
             <Article/>
        </>
    ) 
}