import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar/NavBar';
<<<<<<< HEAD
import AutoCompleteExampleSimple from './NavBar/Search';
import DrawerOpenRightExample from './NavBar/Drawer';
import Paper from './NavBar/Paper';
import HomeContainer from './containers/HomeContainer';
=======
import ServicesContainer from './containers/ServicesContainer';
>>>>>>> a8b83850423be7d73224bc0c894acc027d3799b1

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <NavBar />
<<<<<<< HEAD
        <AutoCompleteExampleSimple />
        <DrawerOpenRightExample />
        <Paper />
        <HomeContainer />
=======
        <ServicesContainer type={'Video'} services={['Netflix', 'Hulu']} />
        <ServicesContainer type={'Music'} services={['Spotify', 'Pandora']} />
>>>>>>> a8b83850423be7d73224bc0c894acc027d3799b1
      </div>
    </MuiThemeProvider>
  </Provider>, document.getElementById('content')
);
