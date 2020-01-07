import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

const body = `Dear reader,

I'm using Github Issues as a **platform for discussion** (using [Gitalk](https://github.com/gitalk/gitalk)).

You can join the conversation either by commenting here, or in [my blog](https://dutzi.party/) 🌈`

export default function Conversation({ title }) {
  const wrapper = useRef()

  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: 'Iv1.b081efd1a044309f',
      clientSecret: 'edb326c0324dade12d63e4e5dbad487757056682',
      repo: 'dutzi.github.io',
      owner: 'dutzi',
      admin: ['dutzi'],
      id: window.location.pathname.slice(1, -1),
      distractionFreeMode: false,
      body,
      title,
      labels: ['Post Discussion'],
    })

    gitalk.render(wrapper.current)
  }, [])

  return <div ref={wrapper} className="conversation-outer-wrapper"></div>
}
