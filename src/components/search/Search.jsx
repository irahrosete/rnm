import React from 'react'
import styles from './Search.module.scss'

const Search = ({ setPageNumber, setSearch }) => {
  let searchButton = (e) => {
    e.preventDefault()
  }
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        className={styles.input}
        onChange={(e) => {
          setPageNumber(1)
          setSearch(e.target.value)
        }}
        placeholder='Search for characters'
        type='text'
      ></input>
      <button
        className={`${styles.btn} btn btn-primary fs-5`}
        onClick={searchButton}
      >
        Search
      </button>
    </form>
  )
}

export default Search
