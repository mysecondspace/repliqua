import React from 'react'
import clsx from 'clsx'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import HeroImage from 'assets/images/hero-image.jpg'
import BuildingDayImage from 'assets/images/building-day.jpg'
import BuildingNightImage from 'assets/images/building-night.jpg'
import AirportFarImage from 'assets/images/airport-far.jpg'
import StonesImage from 'assets/images/stones.jpg'
import SilhouetteImage from 'assets/images/silhouette.jpg'
import BuildingTallImage from 'assets/images/building-tall.jpg'
import SeaImage from 'assets/images/sea.jpg'
import BridgeGlassImage from 'assets/images/bridge-glass.jpg'
import BridgeImage from 'assets/images/bridge.jpg'
import FunicularImage from 'assets/images/funicular.jpg'
import BuildingSquaredImage from 'assets/images/building-squared.jpg'
import RainImage from 'assets/images/rain.jpg'
import AirportClose from 'assets/images/ariport-close.jpg'

import styles from './Works.module.scss'

const Works = () => {
  return (
    <article className={styles.worksPage}>
      <section className={styles.heroSection}>
        <img
          src={HeroImage}
          alt='Some title text with sophisticated text goes here'
        />
        <LogoLarge />
        <div className={styles.heroSectionContent}>
          <h1>Some title text with sophisticated text goes here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            ipsam modi possimus aliquam pariatur totam quaerat omnis tempora
            necessitatibus. Earum dicta distinctio repellendus illo mollitia.
            Consequuntur nesciunt ad tenetur aliquid.
          </p>
        </div>
      </section>
      <section className={styles.columnSection}>
        <div className={styles.hoverImageWrapper}>
          <img
            src={BuildingDayImage}
            alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
          />
        </div>
        <div>
          <div className={styles.hoverImageWrapper}>
            <img
              src={BuildingNightImage}
              alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
            />
          </div>
          <div className={clsx(styles.sectionContent, styles.colorBlue)}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              molestiae qui facere quidem. Et tempore vitae at facilis sed,
              soluta enim nam, sint nostrum aperiam corrupti consectetur
              provident tenetur. Minus.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.rowSection}>
        <div className={styles.hoverImageWrapper}>
          <img
            src={AirportFarImage}
            alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
          />
        </div>
        <div>
          <div className={styles.colorGreen}></div>
          <div className={clsx(styles.sectionContent, styles.colorSand)}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              deserunt doloribus. Corporis officia nostrum ex. Nisi hic maiores
              modi suscipit repellendus, minus nihil quaerat omnis assumenda
              dolores optio rem et.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.rowSection}>
        <div>
          <div className={styles.hoverImageWrapper}>
            <img
              src={StonesImage}
              alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
            />
          </div>
          <div className={styles.hoverImageWrapper}>
            <img
              src={SilhouetteImage}
              alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
            />
          </div>
        </div>
        <div>
          <div className={styles.colorGreen}></div>
          <div className={clsx(styles.sectionContent, styles.colorFoggy)}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              deserunt doloribus. Corporis officia nostrum ex. Nisi hic maiores
              modi suscipit repellendus, minus nihil quaerat omnis assumenda
              dolores optio rem et.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.columnSection}>
        <div className={styles.hoverImageWrapper}>
          <img
            src={BuildingTallImage}
            alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
          />
        </div>
        <div>
          <div className={styles.hoverImageWrapper}>
            <img
              src={SeaImage}
              alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
            />
          </div>
          <div className={clsx(styles.sectionContent, styles.colorFoggy)}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              molestiae qui facere quidem. Et tempore vitae at facilis sed,
              soluta enim nam, sint nostrum aperiam corrupti consectetur
              provident tenetur. Minus.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.columnSection}>
        <div className={styles.hoverImageWrapper}>
          <img
            src={BridgeGlassImage}
            alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
          />
        </div>
        <div>
          <div className={styles.hoverImageWrapper}>
            <img
              src={BridgeImage}
              alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
            />
          </div>
          <div className={clsx(styles.sectionContent, styles.colorForest)}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              molestiae qui facere quidem. Et tempore vitae at facilis sed,
              soluta enim nam, sint nostrum aperiam corrupti consectetur
              provident tenetur. Minus.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.hoverImageWrapper}>
        <img
          src={FunicularImage}
          alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
        />
      </section>
      <section className={styles.columnSection}>
        <div className={styles.hoverImageWrapper}>
          <img
            src={BuildingSquaredImage}
            alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
          />
        </div>
        <div>
          <div className={styles.hoverImageWrapper}>
            <img
              src={RainImage}
              alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
            />
          </div>
          <div className={clsx(styles.sectionContent, styles.colorFoggy)}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              molestiae qui facere quidem. Et tempore vitae at facilis sed,
              soluta enim nam, sint nostrum aperiam corrupti consectetur
              provident tenetur. Minus.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.hoverImageWrapper}>
        <img
          src={AirportClose}
          alt='Lorem ipsum dolor sit amet consectetur adipisicing eli'
        />
      </section>
    </article>
  )
}

export default Works
