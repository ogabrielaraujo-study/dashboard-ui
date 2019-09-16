import React from 'react'

// material ui
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

// colors
import indigo from '@material-ui/core/colors/indigo'
import blueGrey from '@material-ui/core/colors/blueGrey'

// global style
import './styles/global.scss'

// palette
const theme = createMuiTheme({
  palette: {
    spacing: 15,
    primary: {
      main: indigo['A400'],
      contrastText: '#fff',
    },
    secondary: {
      main: blueGrey[400],
      contrastText: '#fff',
    },
  },
})

export default function Template({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
