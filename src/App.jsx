import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Routes as RoutePaths } from './routePaths.js'

import Header from './components/Header'

import Works from './routes/Works'
import About from './routes/About'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={RoutePaths.WORKS} element={<Works />} />
          <Route path={RoutePaths.ABOUT} element={<About />} />
          <Route path={RoutePaths.CONTACT} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
