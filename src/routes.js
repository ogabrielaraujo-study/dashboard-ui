import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages/Views
import Welcome from './views/Welcome'
import Form from './views/Form'
import Table from './views/Table'
import Material from './views/Material'

export default function Routes({ children }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/form" component={Form} />
        <Route path="/table" component={Table} />
        <Route path="/logout" component={Welcome} />
        <Route path="/material" component={Material} />
        <Route component={Error404} />
      </Switch>
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
