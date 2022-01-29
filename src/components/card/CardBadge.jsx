import React from 'react'
import styles from './Card.module.scss'

const CardBadge = ({ status }) => {
  return (
    <>
      {(() => {
        if (status === 'Dead') {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-danger`}
            >
              {status}
            </div>
          )
        } else if (status === 'Alive') {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-success`}
            >
              {status}
            </div>
          )
        } else {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-secondary`}
            >
              {status}
            </div>
          )
        }
      })()}
    </>
  )
}

export default CardBadge
