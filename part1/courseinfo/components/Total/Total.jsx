import React from 'react'

const Total = (contentProps) => {
  return (
    <div>
        <p>Number of exercises = {contentProps.exercises1 + contentProps.exercises2 + contentProps.exercises3}</p>
    </div>
  )
}

export default Total