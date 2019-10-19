import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './header';
import CarIndex from './cover_container';
import Search from './search';
import ScrollToTop from './scroll_to_top';

const App = () => {
  return (
    <div>
      <Router history={ history }>
          <Header />
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={CarIndex} />
              <Route path="/search" exact component={Search} />
            </Switch>
          </ScrollToTop>
      </Router>
    </div>
  )
}



export default App;
