import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: 175,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const imgStyle = {
  width: '150px',
  height: '150px'
};

const ServiceCard = (props) => (
  <Paper style={style} zDepth={2}>
    <img style={imgStyle} src={`http://localhost:8080/client/assets/images/${props.service.toLowerCase()}.png`} />
    <h4>{props.service}</h4>
  </Paper>
);

export default ServiceCard;
