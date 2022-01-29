import React from 'react'
import styles from './Card.module.scss'
import CardBadge from './CardBadge'

const Card = ({ results }) => {
  let display = ''

  if (results) {
    display = results.map((char) => {
      let { id, image, name, location, status } = char
      return (
        <div
          className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'
          key={id}
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img
              className={`${styles.img} img-fluid`}
              src={image}
              alt='character shot'
            />
            <div className={`${styles.content}`}>
              <div className={`${styles.truncate} fs-5 fw-bold mb-4`}>
                {name}
              </div>
              <div>
                <div className='fs-6 fw-normal'>Last Location</div>
                <div className={`${styles.truncate} fs-5`}>{location.name}</div>
              </div>
            </div>
          </div>
          <CardBadge status={status} />
        </div>
      )
    })
  } else {
    display = 'No characters found'
  }

  return <>{display}</>
}

export default Card
