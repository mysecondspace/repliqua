import React from 'react'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import styles from './Contact.module.scss'

const Contact = ({ data: { heading, description, email } }) => {
  return (
    <section className={styles.regularPage}>
      <div className={styles.mainContainer}>
        <LogoLarge />
        <div className={styles.contactBlock}>
          <div className={styles.regularPageContent}>
            <h1>{heading}</h1>
            <p>{description}</p>
          </div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
