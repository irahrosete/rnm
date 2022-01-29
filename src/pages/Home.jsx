import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import Search from '../components/search/Search'
import Pagination from '../components/pagination/Pagination'
import Filter from '../components/filter/Filter'

const Home = () => {
  let [fetcheddata, setFetcheddata] = useState([])
  let { info, results } = fetcheddata
  let [pageNumber, setPageNumber] = useState(1)
  let [search, setSearch] = useState('')
  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    ;(async () => {
      let data = await fetch(api).then((res) => res.json())
      setFetcheddata(data)
    })()
  }, [api])

  return (
    <div className='App'>
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className='container'>
        <div className='row'>
          <Filter
            pageNumber={pageNumber}
            status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <Card results={results} />
              <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
