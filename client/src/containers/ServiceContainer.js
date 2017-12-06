import React, {Component} from 'react';
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
      'serviceChoice': this.props.match.params.service
    };
  }
  componentDidMount () {
    fetch('http://localhost:8080/services').then((response) => {
      console.log('fetched');
      return response.json();
    }).then((data) => {
      const serviceData = data.find((service) => this.state.serviceChoice === service.name.toLowerCase());
      this.setState((prevState, props) => {
        return serviceData;
      });
      return data;
    }).catch((err) => {
      // Error :(
      return err;
    });
  }

  render () {
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
  }
}

export default ServiceContainer;

// {props.match.params.topicId}
