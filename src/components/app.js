import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './header/';
import CarIndex from './car_index/';
import Search from './search';

const App = () => {
  return (
    <div>
      <Router history={ history }>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={CarIndex} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
