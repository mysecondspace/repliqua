import React, { useContext, useState, useCallback } from 'react'
import { useCustomQuery } from 'useCustomQuery'
import clsx from 'clsx'

import { ScrollOffsetContext } from 'utils/ScrollOffsetContext'

import ImageViewer from 'components/ImageViewer'
import { sizes } from 'components/constants'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import HeroImage from 'assets/images/hero-image.jpg'

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

const ImageElement = ({ image = { url: '', alt: '' }, openModal }) => (
  <div className={styles.hoverImageWrapper}>
    <img src={image.url} alt={image.alt} onClick={() => openModal(image.url)} />
  </div>
)

const Works = ({ data: { heading, description } }) => {
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
        <img src={HeroImage} alt={heading} />
        <LogoLarge style={getTransformStyleMinusY(scrollOffset, 0.15)} />
        <div
          className={styles.heroSectionContent}
          style={getTransformStyleMinusY(scrollOffset, 0.05)}
        >
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </section>

      {data.allProjects.map((project, index) => {
        if (project.images.length === 2) {
          if (project.alternativeView) {
            return (
              <section className={styles.rowSection}>
                <div className={styles.mainContainer}>
                  <ImageElement
                    image={project.images[0]}
                    openModal={openModal}
                  />
                  <ImageElement
                    index={1}
                    image={project.images[1]}
                    openModal={openModal}
                  />
                </div>
                <div className={styles.mainContainer}>
                  <div className={styles.colorGreen}></div>
                  <div
                    className={styles.sectionContent}
                    style={{ backgroundColor: project.color.hex }}
                  >
                    <p style={getTransformStylePlusY(scrollOffset, 0.015)}>
                      {project.description}
                      {index}
                    </p>
                  </div>
                </div>
              </section>
            )
          } else {
            return (
              <section
                key={project.id}
                className={clsx(styles.columnSection, styles.mainContainer)}
              >
                <ImageElement image={project.images[0]} openModal={openModal} />
                <div>
                  <ImageElement
                    index={1}
                    image={project.images[1]}
                    openModal={openModal}
                  />
                  <div
                    className={styles.sectionContent}
                    style={{ backgroundColor: project.color.hex }}
                  >
                    <p style={getTransformStylePlusY(scrollOffset, 0.015)}>
                      {project.description}
                      {index}
                    </p>
                  </div>
                </div>
              </section>
            )
          }
        }

        if (project.images.length === 1) {
          if (project.description) {
            return (
              <section className={styles.rowSection}>
                <ImageElement image={project.images[0]} openModal={openModal} />
                <div className={styles.mainContainer}>
                  <div className={styles.colorGreen}></div>
                  <div
                    className={styles.sectionContent}
                    style={{ backgroundColor: project.color.hex }}
                  >
                    <p style={getTransformStylePlusX(scrollOffset, 0.015)}>
                      {project.description}
                      {index}
                    </p>
                  </div>
                </div>
              </section>
            )
          } else {
            return (
              <section>
                <ImageElement image={project.images[0]} openModal={openModal} />
              </section>
            )
          }
        }
      })}

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
