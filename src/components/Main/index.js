import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SideMenu from '../Menu'

import {
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'

import {
  FiUser,
  FiBell,
  FiMoon,
  FiMaximize,
  FiMinimize,
  FiMenu,
} from 'react-icons/fi'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}))

export default function MenuAppBar() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const open = Boolean(anchorEl)

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

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

  const handleDrawer = () => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component="span"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawer()}
          >
            <FiMenu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <div>
            <IconButton color="inherit">
              <FiMoon />
            </IconButton>

            <IconButton color="inherit" onClick={handleFullscreen}>
              {fullscreen ? <FiMinimize /> : <FiMaximize />}
            </IconButton>

            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <FiBell />
              </Badge>
            </IconButton>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <FiUser />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer open={openDrawer} onClose={handleDrawer()}>
        <div
          className={classes.list}
          role="presentation"
          onClick={handleDrawer()}
          onKeyDown={handleDrawer()}
        >
          <SideMenu />
        </div>
      </Drawer>
    </>
  )
}
