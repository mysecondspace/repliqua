import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Routes as RoutePaths } from './routePaths.js'

import { ReactComponent as ArrowIcon } from 'assets/icon-arrow.svg'

import Header from './components/Header'
import Footer from './components/Footer'

import Works from './routes/Works'
import About from './routes/About'
import Contact from './routes/Contact'

import styles from './App.module.scss'

function App() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100

      setPercentage(scrolled)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

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
            <div className={styles.pageScroll}>
              <div style={{ top: `${percentage}%` }}></div>
            </div>
            <ArrowIcon
              className={styles.buttonOnScroll}
              onClick={handleScroll}
            />
          </article>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
