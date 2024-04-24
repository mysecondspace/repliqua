import React from 'react'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.regularPage}>
      <div className={styles.mainContainer}>
        <LogoLarge />
        <div>
          <div className={styles.regularPageContent}>
            <h1>Contact us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>
          </div>
          <a href='mailto:repliqua@contact.co'>repliqua@contact.co</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
