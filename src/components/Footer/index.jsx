import React from 'react'
import clsx from 'clsx'

import styles from './Footer.module.scss'

const Footer = ({ data: { email, socials, links, copyright } }) => {
  return (
    <footer className={clsx(styles.footer, styles.mainContainer)}>
      <div>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.url} rel='noreferrer noopener' target='_blank'>
                  {social.name}
                </a>
              </li>
            ))}
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <span>{copyright}</span>
      </div>
    </footer>
  )
}

export default Footer
