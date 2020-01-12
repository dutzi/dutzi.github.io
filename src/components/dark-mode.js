import React, { useEffect } from 'react'

export default function DarkMode() {
  function handleClick() {
    const isLight = !window.localStorage.getItem('light')

    if (isLight) {
      document.body.classList.remove('dark')
      document.querySelector('html').classList.remove('dark')
      window.localStorage.setItem('light', '1')
    } else {
      document.body.classList.add('dark')
      document.querySelector('html').classList.add('dark')
      window.localStorage.removeItem('light')
    }
  }

  return (
    <div className="darkModeButtonWrapper">
      <button onClick={handleClick} className="darkModeButton">
        <div className="moon1" />
        <div className="moon2" />
      </button>
    </div>
  )
}
