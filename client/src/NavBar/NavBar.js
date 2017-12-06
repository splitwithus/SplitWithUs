import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from './Search';
import DrawerOpenRightExample from './Drawer';

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */


class NavBar extends React.Component {

  onChange = () => {
    
  };
    
  onRequestSearch = () => {
  
  };

  render() {
    return (
    <AppBar
      style={{ 'backgroundColor': 'white' }}
      title={<SearchBar onChange={this.onChange} onRequestSearch={this.onRequestSearch}/>}
      titleStyle={{ 'paddingTop': '15px', 'paddingRight': '200px', 'paddingLeft': '10px' }}
      iconElementRight={<div>
        <FlatButton label="Sign Up" />
        <FlatButton label="Log In" />
      </div>}
      iconStyleRight={{ 'marginTop': '22px' }}
    />
    )}
};

export default NavBar;
