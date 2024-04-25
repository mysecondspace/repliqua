import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

import { ReactComponent as ArrowIcon } from 'assets/icon-arrow.svg'

import styles from './SmoothScroll.module.scss'

Scrollbar.use(OverscrollPlugin)

const dampingValue = 0.05
const options = {
  damping: dampingValue,
  plugins: {
    overscroll: {
      effect: 'glow',
      glowColor: 'white',
      damping: dampingValue,
      maxOverscroll: 50,
      enable: true,
    },
  },
}

const SmoothScroll = ({ children }) => {
  const [percentage, setPercentage] = useState(0)
  const scroll = useRef(null)
  const ref = useRef(null)

  const handleScroll = () => {
    scroll.current?.scrollTo(0, scroll.current.contentEl.scrollHeight, 2500, {
      damping: dampingValue,
    })
  }

  const updateScrollPercentage = ({ offset: { y } }) => {
    const scrollPercent = y / scroll.current.limit.y

    setPercentage(scrollPercent * 100)
  }

  useEffect(() => {
    if (ref.current) {
      const currentRef = ref.current

      scroll.current = Scrollbar.init(currentRef, options)
      Scrollbar.detachStyle()

      scroll.current.addListener(updateScrollPercentage)

      return () => {
        if (Scrollbar.has(currentRef)) {
          Scrollbar.destroy(currentRef)
        }
      }
    }
  }, [])

  SmoothScroll.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      <div className={styles.smoothScroll} ref={ref}>
        {children}
      </div>
      <div className={styles.pageScroll}>
        <div style={{ top: `${percentage}%` }}></div>
      </div>
      <ArrowIcon className={styles.buttonOnScroll} onClick={handleScroll} />
    </>
  )
}

export default SmoothScroll
