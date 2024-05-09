import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCustomQuery } from 'useCustomQuery'

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
    slug
  }
  about {
    heading
    description
    steps {
      id
      title
      description
    }
    slug
  }
  contact {
    heading
    description
    email
    slug
  }
}`

function App() {
  const [error, data] = useCustomQuery(QUERY)

  if (error) {
    console.error(error)

    return null
  }

  const { work, about, contact } = data

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <SmoothScroll>
            <div>
              <article>
                <Routes>
                  <Route path={work.slug} element={<Works data={work} />} />
                  <Route path={about.slug} element={<About data={about} />} />
                  <Route
                    path={contact.slug}
                    element={<Contact data={contact} />}
                  />
                </Routes>
              </article>
              <Footer />
            </div>
          </SmoothScroll>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
