import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Routes as RoutePaths } from './routePaths.js'

import Header from './components/Header'
import Footer from './components/Footer'

import Works from './routes/Works'
import About from './routes/About'
import Contact from './routes/Contact'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <article>
            <Routes>
              <Route path={RoutePaths.WORKS} element={<Works />} />
              <Route path={RoutePaths.ABOUT} element={<About />} />
              <Route path={RoutePaths.CONTACT} element={<Contact />} />
            </Routes>
          </article>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
