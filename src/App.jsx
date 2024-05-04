import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useQuery } from 'graphql-hooks'

import { Routes as RoutePaths } from './routePaths.js'

import Header from 'components/Header'
import Footer from 'components/Footer'
import SmoothScroll from 'components/SmoothScroll'

import Works from 'routes/Works'
import About from 'routes/About'
import Contact from 'routes/Contact'

import styles from './App.module.scss'

const QUERY = `query {
  work {
    heading
    description
  }
  about {
    heading
    description
  }
  contact {
    heading
    description
    email
  }
}`

function App() {
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return 'Loading...'
  if (error) return 'Error'

  const { work, about, contact } = data

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <SmoothScroll>
            <article>
              <Routes>
                <Route
                  path={RoutePaths.WORKS}
                  element={<Works data={work} />}
                />
                <Route
                  path={RoutePaths.ABOUT}
                  element={<About data={about} />}
                />
                <Route
                  path={RoutePaths.CONTACT}
                  element={<Contact data={contact} />}
                />
              </Routes>
            </article>
            <Footer />
          </SmoothScroll>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
