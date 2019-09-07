import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Main
import Main from './components/Main'

// Base components
import Menu from './components/Menu'
import Header from './components/Header'

// Pages/Views
import Welcome from './views/Welcome'
import Form from './views/Form'

export default function Routes({ children }) {
  return (
    <BrowserRouter>
      <Menu />
      <Header />

      <Main>
        <Route path="/" exact component={Welcome} />
        <Route path="/form" component={Form} />
      </Main>
    </BrowserRouter>
  )
}
