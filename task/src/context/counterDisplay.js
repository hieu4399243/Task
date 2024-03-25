import React, { useContext } from 'react'
import {ContextTheme} from './context'


export default function CounterDisplay() {
  const content = useContext(ContextTheme);
  console.log(content);
  return (
    <div>
      <p className={content}>Hello</p>
    </div>
  )
}
