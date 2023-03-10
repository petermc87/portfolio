import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '../src/pages/App/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactGA from 'react-ga4'

const root = ReactDOM.createRoot(document.getElementById('root'))

ReactGA.initialize('G-M7XDQBFWG1')
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname
  })
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics)
