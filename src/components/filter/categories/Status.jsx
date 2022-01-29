import React from 'react'
import FilterButton from '../FilterButton'

const Status = ({ setPageNumber, setStatus }) => {
  let status = ['Alive', 'Dead', 'Unknown']

  return (
    <div>
      <h2>
        <button>Status</button>
      </h2>
      <div>
        <div>
          {status.map((item, index) => (
            <FilterButton
              task={setStatus}
              setPageNumber={setPageNumber}
              input={item}
              index={index}
              key={index}
              name='status'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status
