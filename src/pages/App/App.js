// import logo from './logo.svg';
// import './App.css';
import styles from '../App/App.module.scss'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import { Helmet } from 'react-helmet'

function App () {
  return (
    <div className={styles.app}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Peter McGibney</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name='description' content='Portfolio website' />
      </Helmet>
      <Routes>
        <Route
          path='/' element={
            <Home />
        }
        />
        <Route
          path='/about' element={
            <About />
        }
        />
      </Routes>
    </div>
  )
}

export default App
