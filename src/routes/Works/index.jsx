import React from 'react'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import HeroImage from 'assets/images/hero-image.jpg'

import styles from './Works.module.scss'

const Works = () => {
  return (
    <article>
      <div className={styles.heroSection}>
        <img
          src={HeroImage}
          alt='Some title text with sophisticated text goes here'
        />
        <LogoLarge />
        <div className={styles.content}>
          <h1>Some title text with sophisticated text goes here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,{' '}
          </p>
        </div>
      </div>
    </article>
  )
}

export default Works
