import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: 175,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const ServiceCard = (props) => (
  <Paper style={style} zDepth={2}>
    {props.service}
  </Paper>
);

export default ServiceCard;
