import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Routes as RoutePaths } from './routePaths.js'

import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

import Works from './routes/Works/index.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={RoutePaths.WORKS} element={<Works />} />
            <Route path={RoutePaths.ABOUT} element={<About />} />
            <Route path={RoutePaths.CONTACT} element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
