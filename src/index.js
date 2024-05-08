import React from 'react'
import ReactDOM from 'react-dom/client'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import axe from '@axe-core/react'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './styles/index.scss'

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,
  },
})

// TODO: temporary console.log to check if the token is being passed
console.log(
  'process.env.REACT_APP_DATOCMS_API_TOKEN: ',
  process.env.REACT_APP_DATOCMS_API_TOKEN
)
console.log(
  'process.env.REACT_APP_DATO_API_TOKEN: ',
  process.env.REACT_APP_DATO_API_TOKEN
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
)

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
