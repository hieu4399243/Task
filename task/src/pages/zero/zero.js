import React from 'react'
import Counter from './class'
import Fun from './fun'

export default function Zero() {
  return (
    <div style={{padding: '10px'}}>
      <h1>Class Component</h1>
      <Counter/>
      <h1>Function Component</h1>
      <Fun/>
    </div>
  )
}
