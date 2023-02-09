import styles from '../Header/Header.module.scss'
import { useState } from 'react'
export default function Header(){

    const [openHamburger, setOpenHamburger] = useState(false)
    const [hamburgerInitializer, setHamburgerInitializer] = useState(false)

    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <div className={styles.straight}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.line}></div>
                    <div className={styles.lineTwo}></div>
                    <div className={styles.straightEnd}></div>
                </div>
                <div className={styles.navSelector}>
                    <h2>Home</h2>
                </div>
                <div className={styles.navSelector}>
                    <h2>Resume</h2>
                </div>            
                <div className={styles.navSelector}>
                    <h2>About</h2>
                </div>
                <div className={styles.navSelector}>
                    <h2>Contact</h2>
                </div>
                {!openHamburger
                    ?
                    <div onClick={()=>{
                        setOpenHamburger(true)
                        setHamburgerInitializer(true)
                        }}className={styles.hMenu}>
                        <div className={styles.lineOneHm}></div>
                        <div className={styles.lineTwoHm}></div>
                        <div className={styles.lineThreeHm}></div>
                    </div>                
                    :
                    <div onClick={()=>{setOpenHamburger(false)}}className={styles.hMenu}>
                        &#10005;
                    </div>     
                }

            </div>
            {openHamburger && hamburgerInitializer
                ?
                    <div className={styles.hamburgerNav}>
                        <div className={styles.navItem}><h1>Home</h1></div>
                        <div className={styles.navItem}><h1>Resume</h1></div>
                        <div className={styles.navItem}><h1>About</h1></div>
                        <div className={styles.navItem}><h1>Contact</h1></div>
                    </div>
            : !openHamburger && hamburgerInitializer ?
                    <div className={styles.hamburgerNavOut}>
                        <div className={styles.navItem}><h1>Home</h1></div>
                        <div className={styles.navItem}><h1>Resume</h1></div>
                        <div className={styles.navItem}><h1>About</h1></div>
                        <div className={styles.navItem}><h1>Contact</h1></div>
                    </div>

                    :
                    ''
            }
        </>
    )
}