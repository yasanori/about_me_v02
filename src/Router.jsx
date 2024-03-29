import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Top, AboutMe, Work, Contact } from './Pages';
import Header from './Components/Presentations/Commons/Header';


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exect path="/about_me" component={AboutMe} />
        <Route exect path="/work" component={Work} />
        <Route exect path="/contact" component={Contact} />
        <Route exect path={"(/)?"} component={Top} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
