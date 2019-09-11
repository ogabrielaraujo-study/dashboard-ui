import React, { useState } from 'react'
import './style.scss'

import { Dropdown } from 'react-bootstrap'
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
        <Link to="/">
          <FiAtSign />
          <span>Dashboard</span>
        </Link>
      </div>

      <div className="right">
        <Link to="/">
          <FiMoon />
        </Link>

        <a href="/" onClick={handleFullscreen}>
          {fullscreen ? <FiMinimize /> : <FiMaximize />}
        </a>

        <Dropdown alignRight>
          <Dropdown.Toggle
            variant="primary"
            size="sm"
            id="dropdown-basic"
            className="account"
            as="div"
          >
            <FiUser />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Username</Dropdown.Header>
            <Dropdown.Item>
              <Link to="/">
                <FiUser />
                Perfil
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/logout">
                <FiLogOut />
                Sair
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}
