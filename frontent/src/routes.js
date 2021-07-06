import { Route, Switch } from 'react-router-dom'

import Categories from './pages/Categories'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Categories />
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/tutorial">
        <h1>Tutorial</h1>
      </Route>
      <Route path="/contestants">
        <h1>Contestants</h1>
      </Route>
    </Switch>
  )
}