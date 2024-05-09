import clsx from 'clsx'
import React from 'react'
import { useCustomQuery } from 'useCustomQuery'

import styles from './Footer.module.scss'

const QUERY = `{
  footer {
    email
    socials {
      id
      name
      url
    }
    links {
      id
      name
      link
    }
    copyright
  }
}`

const Footer = () => {
  const [error, data] = useCustomQuery(QUERY)

  if (error) {
    console.error(error)

    return null
  }

  const {
    footer: { email, socials, links, copyright },
  } = data

  return (
    <footer className={clsx(styles.footer, styles.mainContainer)}>
      <div>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} rel='noreferrer noopener' target='_blank'>
                  {social.name}
                </a>
              </li>
            ))}
            {links.map((link) => (
              <li key={link.id}>
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
