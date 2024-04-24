import React from 'react'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import AvatarPlaceholder from 'assets/avatar-placeholder.jpg'

import styles from './About.module.scss'

const About = () => {
  return (
    <section className={styles.regularPage}>
      <div className={styles.mainContainer}>
        <LogoLarge />
        <div>
          <div className={styles.regularPageContent}>
            <h1>To enlighten the beauty of what you see bla bla bla</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat.
            </p>
          </div>
          <div className={styles.stepsBlock}>
            <div>
              <div className={styles.step}>1</div>
              <div className={styles.info}>
                <p>Clean model</p>
                <span>
                  Obtaining the model from the client (cleaning, repairing, or
                  remodeling as needed).
                </span>
              </div>
            </div>
            <div>
              <div className={styles.step}>2</div>
              <div className={styles.info}>
                <p>Right camera</p>
                <span>
                  Putting camera variations in place and sending them to the
                  client for approve.
                  <br />
                  <br />
                  If the client chooses some angles, then we can proceed to the
                  next step.
                </span>
              </div>
            </div>
            <div>
              <div className={styles.step}>3</div>
              <div className={styles.info}>
                <p>Light and mood</p>
                <span>
                  Light scenario and mood, sending it back for further
                  discussion with the client.
                </span>
              </div>
            </div>
            <div>
              <div className={styles.step}>4</div>
              <div className={styles.info}>
                <p>Filling up & Polishing</p>
                <span>
                  The next step is texturing and filling up the scene with
                  elements (vegetation, scatters, etc.)
                </span>
              </div>
            </div>
            <div>
              <div className={styles.step}>5</div>
              <div className={styles.info}>
                <p>Ready images</p>
                <span>After that round of remarks, the image is ready. </span>
              </div>
            </div>
          </div>
          <div className={styles.teamBlock}>
            <h2>Team</h2>
            <div>
              <div className={styles.member}>
                <img src={AvatarPlaceholder} alt='Name Surname' />
                <h3>Name Surname</h3>
                <span>Position</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className={styles.member}>
                <img src={AvatarPlaceholder} alt='Name Surname' />
                <h3>Name Surname</h3>
                <span>Position</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className={styles.member}>
                <img src={AvatarPlaceholder} alt='Name Surname' />
                <h3>Name Surname</h3>
                <span>Position</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className={styles.member}>
                <img src={AvatarPlaceholder} alt='Name Surname' />
                <h3>Name Surname</h3>
                <span>Position</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className={styles.member}>
                <img src={AvatarPlaceholder} alt='Name Surname' />
                <h3>Name Surname</h3>
                <span>Position</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className={styles.member}>
                <img src={AvatarPlaceholder} alt='Name Surname' />
                <h3>Name Surname</h3>
                <span>Position</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
