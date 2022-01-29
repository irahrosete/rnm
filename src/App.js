import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './App.css'

import React, { useEffect, useState } from 'react'
import Card from './components/card/Card'
import Search from './components/search/Search'
import Pagination from './components/pagination/Pagination'

const App = () => {
  let [fetcheddata, setFetcheddata] = useState([])
  let { info, results } = fetcheddata
  let [pageNumber, setPageNumber] = useState(1)
  let [search, setSearch] = useState('')

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}=1&name=${search}`

  useEffect(() => {
    ;(async () => {
      let data = await fetch(api).then((res) => res.json())
      console.log(data)
      setFetcheddata(data)
    })()
  }, [api])

  return (
    <div className='App'>
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className='container'>
        <div className='row'>
          Filter component here
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

export default App
