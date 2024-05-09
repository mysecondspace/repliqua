import React from 'react'
import { useLocation } from 'react-router-dom'
import { useCustomQuery } from 'useCustomQuery'

import { ReactComponent as LogoSmall } from 'assets/repliqua-logo-small.svg'

import styles from './Header.module.scss'

const QUERY = `{
  header {
    menu {
      name
      link {
        ... on WorkRecord {
          id
          slug
        }
        ... on AboutRecord {
          id
          slug
        }
        ... on ContactRecord {
          id
          slug
        }
      }
    }
  }
}`

const Header = () => {
  const [error, data] = useCustomQuery(QUERY)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? styles.active : ''
  }

  if (error) {
    console.error(error)

    return null
  }

  const { menu } = data.header

  const item = (item) => (
    <li key={item.link.id}>
      <a href={`/${item.link.slug}`} className={isActive(`/${item.link.slug}`)}>
        {item.name}
      </a>
    </li>
  )

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href='/' className={styles.logo}>
          <LogoSmall />
        </a>
        <nav>
          <ul className={styles.navigation}>{menu.map(item)}</ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
