import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <a href='mailto:hello@repliqua.eu'>hello@repliqua.eu</a>
            </li>
            <li>
              <a
                href='https://instagram.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Instagram
              </a>
            </li>
            <li>
              <a href='/'>Terms of serivce</a>
            </li>
            <li>
              <a href='/'>Privacy policy</a>
            </li>
          </ul>
        </nav>
        <span>repliqua studio, Inc. or its affiliates</span>
      </div>
    </footer>
  )
}

export default Footer
