import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  
  render() {
    return (
      <div>
        <FlatButton
          label="Help"
          onClick={this.handleToggle}
        />
        <Drawer 
            docked={false} 
            width={200} 
            overlayStyle={{backgroundColor: "transparent"}}
            openSecondary={true} 
            open={this.state.open} 
            onRequestChange={(open) => this.setState({open})}
        >
            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>        
        </Drawer>
      </div>
    );
  }
}