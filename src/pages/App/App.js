// import logo from './logo.svg';
// import './App.css';
import styles from '../App/App.module.scss'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'

function App () {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={
          <Home />
        }/>
        <Route path='/about' element={
          <About />
        }/>
     </ Routes>
    </div>
  )
}

export default App
