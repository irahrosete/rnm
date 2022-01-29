import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './App.css'

import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  let [fetcheddata, setFetcheddata] = useState([])
  let { results } = fetcheddata

  let api = `https://rickandmortyapi.com/api/character?page=1`

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
      <div className='container'>
        <div className='row'>
          Filter component here
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
