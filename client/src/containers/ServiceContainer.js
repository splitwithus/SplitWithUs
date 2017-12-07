import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Link,
  Route
} from 'react-router-dom';

const logoStyle = {
  width: '200px'
};
class ServiceContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      'name': 'blank',
      'description': '',
      'cost': '',
      'type': '',
      'id': '',
      'max_users': '',
      'image_uri': '',
      'serviceChoice': this.props.match.params.service.toLowerCase(),
      'error': false
    };
  }
  componentDidMount () {
    fetch('http://localhost:8080/services').then((response) => {
      console.log('fetched');
      return response.json();
    }).then((data) => {
      const serviceData = data.find((service) => this.state.serviceChoice === service.name.toLowerCase());
      if (serviceData !== undefined) {
        this.setState((prevState, props) => {
          return serviceData;
        });
      } else {
        this.setState((prevState, props) => {
          return {error: true};
        });
      }
      return data;
    }).catch((err) => {
      console.log('THERE WAS AN ERROR');
      this.setState((prevState, props) => {
        return {error: true};
      });
      return err;
    });
  }

  render () {
    if (this.state.name !== 'blank') {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <h2>{this.state.description}</h2>
          <h2>{this.state.cost}</h2>
          <h2>{this.state.id}</h2>
          <h2>max users: {this.state.max_users}</h2>
          <img style={logoStyle} src={`http://localhost:8080/client/assets/images/${this.state.name.toLowerCase()}.png`} />
        </div>
      );
    } else if (this.state.error) {
      return (
        <div>404: This page does not exist</div>
      );
    } else {
      return (
        <div>
          <br /><br /><br />
          <center><CircularProgress size={150} thickness={10} /></center>
        </div>
      );
    }
  }
}

export default ServiceContainer;

// {props.match.params.topicId}
