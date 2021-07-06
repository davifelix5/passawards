import { Route, Switch } from 'react-router-dom'

import Categories from './pages/Categories'
import About from './pages/About'
import Tutorial from './pages/Tutorial'
import Contestants from './pages/Contestants'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Categories />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/tutorial">
        <Tutorial />
      </Route>
      <Route path="/contestants">
        <Contestants />
      </Route>
    </Switch>
  )
}