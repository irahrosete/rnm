import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import styles from './Card.module.scss'

const CardDetails = () => {
  let { id } = useParams()
  let [fetchedData, updateFetchedData] = useState([])
  let { name, location, origin, gender, image, status, species } = fetchedData

  let api = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() => {
    ;(async () => {
      let data = await fetch(api).then((res) => res.json())
      updateFetchedData(data)
    })()
  }, [api])

  const navigate = useNavigate()

  return (
    <div className='container d-flex justify-content-center mb-5'>
      <div className='d-flex flex-column gap-3'>
        <h1 className='text-center'>{name}</h1>
        <img className='img-fluid' src={image} alt='' />

        {(() => {
          if (status === 'Dead') {
            return <div className='badge bg-danger fs-5'>{status}</div>
          } else if (status === 'Alive') {
            return <div className=' badge bg-success fs-5'>{status}</div>
          } else {
            return <div className='badge bg-secondary fs-5'>{status}</div>
          }
        })()}

        <div className='content'>
          <div className=''>
            <span className='fw-bold'>Gender : </span>
            {gender}
          </div>
          <div className=''>
            <span className='fw-bold'>Location: </span>
            {location?.name}
          </div>
          <div className=''>
            <span className='fw-bold'>Origin: </span>
            {origin?.name}
          </div>
          <div className=''>
            <span className='fw-bold'>Species: </span>
            {species}
          </div>
        </div>

        <button
          className={`${styles.btn} btn btn-primary fs-5 mx-5`}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default CardDetails
