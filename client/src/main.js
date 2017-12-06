import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar/NavBar';
import AutoCompleteExampleSimple from './NavBar/Search';
import DrawerOpenRightExample from './NavBar/Drawer';
import Paper from './NavBar/Paper';
import ServicesContainer from './containers/ServicesContainer';

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
        <AutoCompleteExampleSimple />
        <DrawerOpenRightExample />
        <Paper />
        <ServicesContainer type={'Video'} services={['Netflix', 'Hulu']} />
        <ServicesContainer type={'Music'} services={['Spotify', 'Pandora']} />
      </div>
    </MuiThemeProvider>
  </Provider>, document.getElementById('content')
);
