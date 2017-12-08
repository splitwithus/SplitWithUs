import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Search from './Search';
import DrawerOpenRightExample from './Drawer';
import Dialog from 'material-ui/Dialog';
import Modal from './Modal';
import {
  Link
} from 'react-router-dom';
/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={<Link to='/'><img src="client/assets/images/logo.png" width="50px" height="50px" >
          </img></Link>}
          style={{ 'backgroundColor': 'white' }}
          title={<Search onChange={this.onChange} onRequestSearch={this.onRequestSearch} />}
          titleStyle={{ 'paddingTop': '15px', 'paddingRight': '200px', 'paddingLeft': '10px' }}
          iconElementRight={<Modal />}
          iconStyleRight={{ 'marginTop': '22px' }}
        />
      </div>
    )
  }
};

export default NavBar;
