import React from 'react'
import FilterButton from '../FilterButton'

const Species = ({ setPageNumber, setSpecies }) => {
  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ]

  return (
    <div className='accordion-item '>
      <h2 className='accordion-header' id='headingTwo'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseTwo'
          aria-expanded='false'
          aria-controls='collapseTwo'
        >
          Species
        </button>
      </h2>
      <div
        id='collapseTwo'
        className='accordion-collapse collapse'
        aria-labelledby='headingTwo'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {species.map((item, index) => {
            return (
              <FilterButton
                name='species'
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setSpecies}
                input={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Species
