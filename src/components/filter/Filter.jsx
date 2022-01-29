import React from 'react'
import Gender from './categories/Gender'
import Species from './categories/Species'
import Status from './categories/Status'

const Filter = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
  let clear = () => {
    setStatus('')
    setGender('')
    setSpecies('')
    setPageNumber('')
  }
  return (
    <>
      <div className='col-lg-3 col-12 mb-5'>
        <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
        <div
          style={{ cursor: 'pointer' }}
          onClick={clear}
          className='text-primary text-decoration-underline text-center mb-3'
        >
          Clear Filters
        </div>
        <div className='accordion' id='accordionExample'>
          <Status setPageNumber={setPageNumber} setStatus={setStatus} />
          <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
          <Gender setPageNumber={setPageNumber} setGender={setGender} />
        </div>
      </div>
    </>
  )
}

export default Filter
