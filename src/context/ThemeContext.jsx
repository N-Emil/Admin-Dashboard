import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')
  const switchMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const root = window.document.documentElement // HTML tag
    if (mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider