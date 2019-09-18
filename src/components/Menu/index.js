import React, { useState } from 'react'
import './style.scss'

import { FiUser, FiLayout, FiFileText, FiList } from 'react-icons/fi'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'

export default function Menu() {
  return (
    <>
      <Link to="/form" data-tip="Form">
        <List>
          <ListItem button>
            <ListItemIcon>
              <FiUser size={23} />
            </ListItemIcon>
            <ListItemText primary="Teste" />
          </ListItem>
        </List>
      </Link>
    </>
  )
}
{
  /* <nav className={!menu ? 'default' : 'expand'}>
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
    </nav> */
}
