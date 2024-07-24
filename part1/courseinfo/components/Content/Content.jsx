import React from 'react'
import Part from '../Part/Part'
const Content = (contentProps) => {
  return (
    <div>
      <Part part = {contentProps.part1} exercises = {contentProps.exercises1}/>
      <Part part = {contentProps.part2} exercises = {contentProps.exercises2}/>
      <Part part = {contentProps.part3} exercises = {contentProps.exercises3}/>
      
    </div>
  )
}

export default Content