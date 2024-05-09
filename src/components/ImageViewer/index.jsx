import React, { useEffect } from 'react'
import Modal from 'react-modal'

import { ReactComponent as ArrowIcon } from 'assets/icon-arrow.svg'

import styles from './ImageViewer.module.scss'

Modal.setAppElement('#root')

const useKeydown = (key, callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) callback()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [callback, key])
}

const ImageViewer = ({
  isOpen,
  closeModal,
  images,
  currentImageUrl,
  opacity,
  prevImage,
  nextImage,
}) => {
  useKeydown('ArrowLeft', prevImage)
  useKeydown('ArrowRight', nextImage)

  const currentImage = images.find((image) => image.url === currentImageUrl)

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={250}
      onRequestClose={closeModal}
      overlayClassName={{
        base: styles.overlay,
        afterOpen: styles.openOverlay,
        beforeClose: styles.closeOverlay,
      }}
      className={styles.modal}
    >
      <span className={styles.buttonClose} onClick={closeModal}>
        Close
      </span>
      <div className={styles.body}>
        <img
          src={currentImage ? currentImage.url : ''}
          alt={currentImage ? currentImage.alt : ''}
          style={{ opacity: opacity }}
        />
        <div className={styles.controls}>
          <span onClick={prevImage}>
            <ArrowIcon />
            previous
          </span>
          <p>{currentImage ? currentImage.alt : ''}</p>
          <span onClick={nextImage}>
            next
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Modal>
  )
}

export default ImageViewer
