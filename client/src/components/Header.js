import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';

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

const mapStateToProps = store => {
  // console.log(store);
  return {services: store.productServices};
};

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(actions.test())
});

const ServiceCard = (props) => {
  // props.test();
  return (
    <div style={containerStyle}>
      <div style={headerStyle}><center>Split With Us</center></div>
      <div style={subHeaderStyle}><center>splitting things for fun</center></div>
      <button onClick={props.test}>HELLO</button>
    </div>
  );
};

// export default ServiceCard;
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);
