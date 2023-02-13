import styles from '../Header/Header.module.scss'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
export default function Header () {

  const [openHamburger, setOpenHamburger] = useState(false)
  const [hamburgerInitializer, setHamburgerInitializer] = useState(false)
  const navigate = useNavigate()

  const handleHomeNavigate = () => {
    navigate('/')
  }

  const handleAboutNavigate = () => {
    navigate('/about')
  }

  function sendEmail(){
    window.location.assign("mailto:peter.mcgibney@gmail.com")
  }
  

  return (
    <>
      <div className={styles.navigation} >
        <div className={styles.logo} onClick={()=>{handleHomeNavigate()}}>
          <div className={styles.straight} />
          <div className={styles.circle} />
          <div className={styles.line} />
          <div className={styles.lineTwo} />
          <div className={styles.straightEnd} />
        </div>
         <div className={styles.navSelector} onClick={()=>{handleHomeNavigate()}}>
          <h2>Home</h2>
        </div>
          <div className={styles.navSelector}>
            <a href='https://drive.google.com/file/d/19UmH_5bRH1q4gbGMsO8-35fRxT8dFDvZ/view?usp=share_link'>
              <h2>Resume</h2>
            </a>
          </div>
        <div className={styles.navSelector} onClick={()=>{handleAboutNavigate()}}>
          <h2 >About</h2>
        </div>
        <div className={styles.navSelector} onClick={()=>{sendEmail()}}>
          <h2>Contact</h2>
        </div>
        {!openHamburger
          ? <div
              onClick={() => {
                setOpenHamburger(true)
                setHamburgerInitializer(true)
              }} className={styles.hMenu}
            >
            <div className={styles.lineOneHm} />
            <div className={styles.lineTwoHm} />
            <div className={styles.lineThreeHm} />
            </div>
          : <div onClick={() => { setOpenHamburger(false) }} className={styles.hMenu}>
            &#10005;
          </div>}

      </div>
      {openHamburger && hamburgerInitializer
        ? <div className={styles.hamburgerNav}>
          <div className={styles.navItem} onClick={()=>{
              handleHomeNavigate()
              setOpenHamburger(false)
            }}><h1>Home</h1></div>
            <a href='https://drive.google.com/file/d/19UmH_5bRH1q4gbGMsO8-35fRxT8dFDvZ/view?usp=share_link'>
              <div className={styles.navItem}><h1>Resume</h1></div>
            </a>
          <div className={styles.navItem} onClick={()=>{
              handleAboutNavigate()
              setOpenHamburger(false)
            }}><h1>About</h1></div>
          <div className={styles.navItem} onClick={()=>{sendEmail()}}><h1>Contact</h1></div>
        </div>
        : !openHamburger && hamburgerInitializer
            ? <div className={styles.hamburgerNavOut}>
              <div className={styles.navItem} onClick={()=>{
                  handleHomeNavigate()
                  setOpenHamburger(false)
                }}><h1>Home</h1></div>
              <a href='https://drive.google.com/file/d/19UmH_5bRH1q4gbGMsO8-35fRxT8dFDvZ/view?usp=share_link'>
                <div className={styles.navItem}><h1>Resume</h1></div>
              </a>
              <div className={styles.navItem} onClick={()=>{handleAboutNavigate()}}><h1>About</h1></div>
              <div className={styles.navItem} onClick={()=>{sendEmail()}}><h1 >Contact</h1></div>
            </div>
            : ''}
    </>
  )
}
