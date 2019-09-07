import React, { useState } from 'react'
import './style.scss'

import {
  FiAtSign,
  FiUser,
  FiMoon,
  FiSun,
  FiMaximize,
  FiMinimize,
  FiLogOut,
} from 'react-icons/fi'

export default function Menu() {
  const [fullscreen, setFullscreen] = useState(false)

  function handleFullscreen(e) {
    e.preventDefault()

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setFullscreen(!fullscreen)
  }

  return (
    <header>
      <div className="left">
        <a href="/">
          <FiAtSign />
          <span>Logo</span>
        </a>
      </div>

      <div className="right">
        <a href="/">
          <FiMoon />
        </a>
        <a href="/" onClick={handleFullscreen}>
          {fullscreen ? <FiMinimize /> : <FiMaximize />}
        </a>
        <a href="/">
          <FiUser />
        </a>
        <a href="/">
          <FiLogOut />
        </a>
      </div>
    </header>
  )
}
