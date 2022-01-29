import React, { useState, useEffect } from 'react'
import Card from '../components/card/Card'
import InputGroup from '../components/filter/InputGroup'

const Locations = () => {
  let [results, setResults] = useState([])
  let [info, setInfo] = useState([])
  let { dimension, type, name } = info
  let [id, setID] = useState(1)

  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    ;(async () => {
      let data = await fetch(api).then((res) => res.json())
      console.log(data)
      setInfo(data)

      let a = await Promise.all(
        data.residents.map((resident) => {
          return fetch(resident).then((res) => res.json())
        })
      )
      setResults(a)
    })()
  }, [api])

  return (
    <div className='container'>
      <div className='row mb-3'>
        <h1 className='text-center mb-3'>
          Location :{' '}
          <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-center'>
          Dimension: {dimension === '' ? 'Unknown' : dimension}
        </h5>
        <h6 className='text-center'>Type: {type === '' ? 'Unknown' : type}</h6>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12 mb-4'>
          <h4 className='text-center mb-4'>Pick Location</h4>
          <InputGroup name='Location' setID={setID} total={126} />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations
