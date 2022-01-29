import React from 'react'

const FilterButton = ({ task, setPageNumber, input, index, name }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type='radio'] {
            display: none;
          }
        `}
      </style>
      <div>
        <input
          className='form-check-input x'
          type='radio'
          name={name}
          id={`${name}-${index}`}
        />
        <label
          className='btn btn-outline-primary'
          onClick={() => {
            task(input)
            setPageNumber(1)
          }}
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  )
}

export default FilterButton
