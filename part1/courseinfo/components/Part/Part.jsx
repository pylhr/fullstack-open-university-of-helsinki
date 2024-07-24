import React from 'react'

const Part = (partProps) => {
  return (
    <div>
        <p> {partProps.part} {partProps.exercises} </p>
    </div>
  )
}

export default Part