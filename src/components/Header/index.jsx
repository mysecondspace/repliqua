import React from 'react'

import { useLocation } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/logo-repliqua.svg'

import styles from './Header.module.scss'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path && styles.active
  }

  const renderLink = (path, text) => (
    <li>
      <a href={path} className={isActive(path)}>
        {text}
      </a>
    </li>
  )

  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo}>
        <Logo />
      </a>
      <nav>
        <ul className={styles.navigation}>
          {renderLink('/', 'Works')}
          {renderLink('/about', 'About')}
          {renderLink('/contact', 'Contact')}
        </ul>
      </nav>
    </header>
  )
}

export default Header