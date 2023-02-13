import Header from "../../components/Header/Header"
import Article from "../../components/About/Article/Article"
import styles from '../About/About.module.scss'
import meandsaorla from '../../images/merandsaorla.png'
import improv from '../../images/improv.jpeg'

export default function About () {
    return(
        <>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
             <div className={styles.aboutMe}>
                <Article
                    heroimage={meandsaorla}
                    improvimage={improv}
                />
             </div>
        </>
    ) 
}