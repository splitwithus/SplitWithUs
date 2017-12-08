import React from 'react';
import NavBar from './NavBar/NavBar';
import HomeContainer from './containers/HomeContainer';
import ServiceContainer from './containers/ServiceContainer';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/service' component={ServiceContainer} />
            <Route path='/service/:service' component={ServiceContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
