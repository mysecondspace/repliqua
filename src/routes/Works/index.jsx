import React, { useContext, useState, useCallback } from 'react'
import { useCustomQuery } from 'useCustomQuery'
import clsx from 'clsx'

import { ScrollOffsetContext } from 'utils/ScrollOffsetContext'

import ImageViewer from 'components/ImageViewer'
import { sizes } from 'components/constants'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import styles from './Works.module.scss'

const QUERY = `
  query ProjectQuery {
    allProjects {
      id
      images {
        url
        alt
      }
      name
      description
      color {
        hex
      }
      alternativeView
    }
  }
`

const ImageElement = ({ image, openModal }) => (
  <div className={styles.hoverImageWrapper}>
    <img src={image.url} alt={image.alt} onClick={() => openModal(image.url)} />
  </div>
)

const SectionContent = ({ backgroundColor, transformStyle, description }) => (
  <div className={styles.sectionContent} style={{ backgroundColor }}>
    <p style={transformStyle}>{description}</p>
  </div>
)

const Project = ({
  project,
  openModal,
  scrollOffset,
  getTransformStylePlusY,
  getTransformStylePlusX,
}) => {
  const { id, images, description, color, alternativeView } = project
  const transformStyle =
    images.length === 2
      ? getTransformStylePlusY(scrollOffset, 0.015)
      : getTransformStylePlusX(scrollOffset, 0.015)

  switch (images.length) {
    case 2:
      if (!alternativeView) {
        return (
          <section
            key={id}
            className={clsx(styles.columnSection, styles.mainContainer)}
          >
            <ImageElement image={images[0]} openModal={openModal} />
            <div>
              <ImageElement image={images[1]} openModal={openModal} />
              <SectionContent
                backgroundColor={color.hex}
                transformStyle={transformStyle}
                description={description}
              />
            </div>
          </section>
        )
      } else {
        return (
          <section key={id} className={styles.rowSection}>
            <div className={styles.mainContainer}>
              <ImageElement image={images[0]} openModal={openModal} />
              <ImageElement image={images[1]} openModal={openModal} />
            </div>
            <div className={styles.mainContainer}>
              <div className={styles.colorGreen}></div>
              <SectionContent
                backgroundColor={color.hex}
                transformStyle={transformStyle}
                description={description}
              />
            </div>
          </section>
        )
      }
    case 1:
      if (description) {
        return (
          <section key={id} className={styles.rowSection}>
            <ImageElement image={images[0]} openModal={openModal} />
            <div className={styles.mainContainer}>
              <div className={styles.colorGreen}></div>
              <SectionContent
                backgroundColor={color.hex}
                transformStyle={transformStyle}
                description={description}
              />
            </div>
          </section>
        )
      } else {
        return (
          <section key={id}>
            <ImageElement image={images[0]} openModal={openModal} />
          </section>
        )
      }
    default:
      return null
  }
}

const Works = ({ data: { hero, heading, description } }) => {
  const scrollOffset = useContext(ScrollOffsetContext)
  const [currentImageUrl, setCurrentImageUrl] = useState(null)
  const [error, data] = useCustomQuery(QUERY)
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(1)

  const openModal = (image) => {
    setIsOpen(true)
    setCurrentImageUrl(image)
  }

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => setCurrentImageUrl(0), 250)
  }

  const changeImage = useCallback(
    (change) => {
      setOpacity(0)

      setTimeout(() => {
        const allImages = data.allProjects.flatMap((project) => project.images)
        const currentIndex = allImages.findIndex(
          (image) => image.url === currentImageUrl
        )
        const nextIndex =
          (currentIndex + change + allImages.length) % allImages.length
        setCurrentImageUrl(allImages[nextIndex].url)

        setOpacity(1)
      }, 250)
    },
    [currentImageUrl, data]
  )

  const prevImage = useCallback(() => changeImage(-1), [changeImage])
  const nextImage = useCallback(() => changeImage(1), [changeImage])

  const getTransformStyleMinusY = useCallback(
    (offset, factor) => ({
      transform: `translateY(-${offset * factor}px)`,
    }),
    []
  )

  const getTransformStylePlusY = useCallback((offset, factor) => {
    if (window.innerWidth <= sizes.DESKTOP_VIEWPORT) return

    return {
      transform: `translateY(${offset * factor}px)`,
    }
  }, [])

  const getTransformStylePlusX = useCallback((offset, factor) => {
    if (window.innerWidth <= sizes.DESKTOP_VIEWPORT) return

    return {
      transform: `translateX(${offset * factor}px)`,
    }
  }, [])

  if (error) {
    console.error(error)

    return null
  }

  return (
    <>
      <section className={styles.heroSection}>
        <img src={hero.url} alt={hero.alt} />
        <LogoLarge style={getTransformStyleMinusY(scrollOffset, 0.15)} />
        <div
          className={styles.heroSectionContent}
          style={getTransformStyleMinusY(scrollOffset, 0.05)}
        >
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </section>

      {data.allProjects.map((project) => (
        <Project
          project={project}
          openModal={openModal}
          scrollOffset={scrollOffset}
          getTransformStylePlusY={getTransformStylePlusY}
          getTransformStylePlusX={getTransformStylePlusX}
        />
      ))}

      <ImageViewer
        isOpen={isOpen}
        closeModal={closeModal}
        images={data.allProjects.flatMap((project) => project.images)}
        currentImageUrl={currentImageUrl}
        opacity={opacity}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </>
  )
}

export default Works
