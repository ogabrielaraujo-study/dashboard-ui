import React, { useState } from 'react'
import './style.scss'

import { Image, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  FiAtSign,
  FiUser,
  FiMoon,
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
          <span>Dashboard</span>
        </a>
      </div>

      <div className="right">
        <a href="/">
          <FiMoon />
        </a>

        <a href="/" onClick={handleFullscreen}>
          {fullscreen ? <FiMinimize /> : <FiMaximize />}
        </a>

        <Dropdown alignRight>
          <Dropdown.Toggle
            variant="primary"
            size="sm"
            id="dropdown-basic"
            className="account"
          >
            <Image src="https://i.imgur.com/0TwtGPN.png" roundedCircle />
            <span>Username</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">
                <FiUser />
                Perfil
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="/logout">
              <FiLogOut />
              Sair
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}
