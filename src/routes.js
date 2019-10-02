import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Base components
import Menu from './components/Menu'
import Header from './components/Header'
import Main from './components/Main'

// Pages/Views
import Welcome from './views/Welcome'
import Form from './views/Form'
import Table from './views/Table'

export default function Routes({ children }) {
  return (
    <BrowserRouter>
      <Menu />
      <Header />

      <Main>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/form" component={Form} />
          <Route path="/table" component={Table} />
          <Route path="/logout" component={Welcome} />
          <Route component={Error404} />
        </Switch>
      </Main>
    </BrowserRouter>
  )
}

function Error404({ location }) {
  return (
    <div>
      <h1>Erro 404</h1>
      <p>
        Página não encontrada <code>{location.pathname}</code>
      </p>
    </div>
  )
}
