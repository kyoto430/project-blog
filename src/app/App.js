import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/UI/navBar'
import Articles from './pages/articles'
import Login from './pages/login'
import Main from './pages/main'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/articles/:articleId?/:edit?" component={Articles} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
      </Switch>
      <Redirect to="/" />
    </div>
  )
}

export default App
