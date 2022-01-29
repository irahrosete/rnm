import React from 'react'

const Search = ({ setPageNumber, setSearch }) => {
  let searchButton = (e) => {
    e.preventDefault()
  }
  return (
    <form>
      <input
        onChange={(e) => {
          setPageNumber(1)
          setSearch(e.target.value)
        }}
        placeholder='Search for characters'
        type='text'
      ></input>
      <button onClick={searchButton}>Search</button>
    </form>
  )
}

export default Search
