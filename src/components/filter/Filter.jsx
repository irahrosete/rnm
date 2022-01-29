import React from 'react'

const Filter = ({
  pageNumber,
  status,
  setStatus,
  setGender,
  setSpecies,
  setPageNumber,
}) => {
  let clear = () => {
    setStatus('')
    setGender('')
    setSpecies('')
    setPageNumber('')
    window.location.reload(false)
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
          Category components here
        </div>
      </div>
    </>
  )
}

export default Filter
