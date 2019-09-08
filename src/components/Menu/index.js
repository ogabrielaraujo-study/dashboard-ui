import React, { useState } from 'react'
import './style.scss'

import { FiMenu, FiLayout, FiFileText, FiList } from 'react-icons/fi'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [menu, setMenu] = useState(false)

  function toggleMenu(e) {
    e.preventDefault()

    setMenu(!menu)
  }

  return (
    <nav className={!menu ? 'default' : 'expand'}>
      <ReactTooltip effect="solid" place="right" />
      <a href="/" onClick={toggleMenu} data-tip="Menu">
        <FiMenu />
        <span>Menu</span>
      </a>
      <Link to="/" data-tip="Welcome">
        <FiLayout />
        <span>Welcome</span>
      </Link>
      <Link to="/form" data-tip="Form">
        <FiFileText />
        <span>Form</span>
      </Link>
      <Link to="/table" data-tip="Table">
        <FiList />
        <span>Table</span>
      </Link>
    </nav>
  )
}
