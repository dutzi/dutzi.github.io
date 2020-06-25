import React, { useEffect } from 'react'
import { Howl } from 'howler'

const numPartySounds = 8

export function isMobile() {
  return (
    typeof window === 'object' &&
    !!window.navigator.userAgent
      .toLocaleLowerCase()
      .match(
        /(mobile|iemobile|android|webos|iphone|ipad|ipod|blackberry|windows phone)/
      )
  )
}

const PartyBox = () => {
  useEffect(() => {
    if (isMobile()) {
      return
    }
    for (let i = 1; i < numPartySounds; i++) {
      new Howl({
        src: [`/sounds/party${i}.mp3`],
      })
    }
  }, [])

  function handlePartyBoxClick() {
    const index = Math.floor(Math.random() * (numPartySounds - 1)) + 1

    new Howl({
      src: [`/sounds/party${index}.mp3`],
    }).play()
  }

  if (isMobile()) {
    return null
  }

  return (
    <div
      className="party-box-wrapper"
      tabIndex={0}
      onMouseDown={handlePartyBoxClick}
    >
      <div className="party-box">
        🎉
        <div className="inset-box" />
      </div>
    </div>
  )
}

export default PartyBox
