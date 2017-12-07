import React from 'react';

const containerStyle = {
  width: '100%',
  padding: '40px 0px'
};
const headerStyle = {
  margin: 'auto',
  width: '50%',
  fontSize: '60px'
};
const subHeaderStyle = {
  margin: 'auto',
  width: '50%',
  fontSize: '25px'
};

const ServiceCard = (props) => (
  <div style={containerStyle}>
    <div style={headerStyle}><center>Split With Us</center></div>
    <div style={subHeaderStyle}><center>splitting things for fun</center></div>
  </div>
);

export default ServiceCard;
