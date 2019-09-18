import React from 'react'

// material ui
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, Box } from '@material-ui/core'

// colors
import indigo from '@material-ui/core/colors/indigo'
import blueGrey from '@material-ui/core/colors/blueGrey'

// global style
import './styles/global.scss'

// base components
import Main from './components/Main'

// theme
const theme = createMuiTheme({
  palette: {
    //type: 'dark',
    spacing: 2,
    primary: {
      main: indigo['A400'],
    },
    secondary: {
      main: blueGrey[400],
    },
  },
})

export default function Template({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />

      <Box component="main" m={4}>
        {children}
      </Box>
    </ThemeProvider>
  )
}
