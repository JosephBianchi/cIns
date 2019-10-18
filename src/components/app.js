import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './header';
import CarIndex from './cover_container';
import Search from './search';

const App = () => {
  return (
    <div>
      <Router history={ history }>
          <Header />
          <Switch>
            <Route path="/" exact component={CarIndex} />
            <Route path="/search" exact component={Search} />
          </Switch>
      </Router>
    </div>
  )
}



export default App;
