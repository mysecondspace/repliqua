import React, { useContext, useState, useCallback } from 'react'
import clsx from 'clsx'

import { ScrollOffsetContext } from 'utils/ScrollOffsetContext'

import images from './images'
import ImageViewer from 'components/ImageViewer'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import HeroImage from 'assets/images/hero-image.jpg'

import styles from './Works.module.scss'

const ImageElement = ({ index, openModal }) => (
  <div className={styles.hoverImageWrapper}>
    <img
      src={images[index].src}
      alt={images[index].alt}
      onClick={() => openModal(index)}
    />
  </div>
)

const Works = () => {
  const scrollOffset = useContext(ScrollOffsetContext)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(1)

  const openModal = (imageIndex) => {
    setIsOpen(true)
    setCurrentImageIndex(imageIndex)
  }

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => setCurrentImageIndex(0), 250)
  }

  const changeImage = useCallback(
    (change) => {
      setOpacity(0)

      setTimeout(() => {
        setCurrentImageIndex(
          (currentImageIndex + change + images.length) % images.length
        )

        setOpacity(1)
      }, 250)
    },
    [currentImageIndex]
  )

  const prevImage = useCallback(() => changeImage(-1), [changeImage])
  const nextImage = useCallback(() => changeImage(1), [changeImage])

  const getTransformStyle = (offset, factor) => ({
    transform: `translateY(-${offset * factor}px)`,
  })

  return (
    <>
      <section className={styles.heroSection}>
        <img
          src={HeroImage}
          alt='Some title text with sophisticated text goes here'
        />
        <LogoLarge style={getTransformStyle(scrollOffset, 0.15)} />
        <div
          className={styles.heroSectionContent}
          style={getTransformStyle(scrollOffset, 0.05)}
        >
          <h1>Some title text with sophisticated text goes here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel.
          </p>
        </div>
      </section>
      <section className={clsx(styles.columnSection, styles.mainContainer)}>
        <ImageElement index={0} openModal={openModal} />
        <div>
          <ImageElement index={1} openModal={openModal} />
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
        <ImageElement index={2} openModal={openModal} />
        <div className={styles.mainContainer}>
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
      <section className={styles.rowSection}>
        <div className={styles.mainContainer}>
          <ImageElement index={3} openModal={openModal} />
          <ImageElement index={4} openModal={openModal} />
        </div>
        <div className={styles.mainContainer}>
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
      <section className={clsx(styles.columnSection, styles.mainContainer)}>
        <ImageElement index={5} openModal={openModal} />
        <div>
          <ImageElement index={6} openModal={openModal} />
          <div className={clsx(styles.sectionContent, styles.colorSand)}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              molestiae qui facere quidem. Et tempore vitae at facilis sed,
              soluta enim nam, sint nostrum aperiam corrupti consectetur
              provident tenetur. Minus.
            </p>
          </div>
        </div>
      </section>
      <section className={clsx(styles.columnSection, styles.mainContainer)}>
        <ImageElement index={7} openModal={openModal} />
        <div>
          <ImageElement index={8} openModal={openModal} />
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
      <section>
        <ImageElement index={9} openModal={openModal} />
      </section>
      <section className={clsx(styles.columnSection, styles.mainContainer)}>
        <ImageElement index={10} openModal={openModal} />
        <div>
          <ImageElement index={11} openModal={openModal} />
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
      <section>
        <ImageElement index={12} openModal={openModal} />
      </section>
      <ImageViewer
        isOpen={isOpen}
        closeModal={closeModal}
        images={images}
        currentImageIndex={currentImageIndex}
        opacity={opacity}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </>
  )
}

export default Works
