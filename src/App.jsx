import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useQuery } from 'graphql-hooks'

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
  footer {
    email
    socials {
      name
      url
    }
    links {
      name
      link
    }
    copyright
  }
}`

function App() {
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const { work, about, contact, footer } = data

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <SmoothScroll>
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
            <Footer data={footer} />
          </SmoothScroll>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
