import React from 'react'

const Card = ({ results }) => {
  let display = ''

  if (results) {
    display = results.map((char) => {
      let { id, name } = char
      return <div key={id}>{name}</div>
    })
  } else {
    display = 'No characters found'
  }

  return <>{display}</>
}

export default Card
