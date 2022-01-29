import React from 'react'

const FilterButton = () => {
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
        <input type='radio' />
        <label htmlFor=''></label>
      </div>
    </div>
  )
}

export default FilterButton
