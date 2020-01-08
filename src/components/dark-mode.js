import React, { useEffect } from 'react'

export default function DarkMode() {
  function handleClick() {
    const isDark = !window.localStorage.getItem('dark')

    if (isDark) {
      document.body.classList.add('dark')
      document.querySelector('html').classList.add('dark')
      window.localStorage.setItem('dark', '1')
    } else {
      document.body.classList.remove('dark')
      document.querySelector('html').classList.remove('dark')
      window.localStorage.removeItem('dark')
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
