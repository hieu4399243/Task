import React, { createContext, useState } from 'react'
import CounterDisplay from './counterDisplay'

export const ContextTheme = createContext();

export default function Context() {
    const [content, setContent] = useState('dark');
    const change = () =>{
        setContent(content === 'dark' ? 'light' : 'dark');
    }

  return (
    <ContextTheme.Provider value={content}>
        <button onClick={change}>Toggle change</button>
        <CounterDisplay/>
    </ContextTheme.Provider >
  )
}
