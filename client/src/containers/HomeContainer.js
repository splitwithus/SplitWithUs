import React from 'react';
import ServicesContainer from './ServicesContainer';
import Header from './../components/Header';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';

// console.log('actions', actions);
const style = {
  paddingLeft: '50px'
};

const mapStateToProps = store => {
  // console.log(store);
  return {services: store.productServices};
};

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(actions.test())
});

// <ServicesContainer type={'Video'} services={['Netflix', 'Hulu']} />
// <br /><br />
// <ServicesContainer type={'Music'} services={['Spotify', 'Pandora']} />

const HomeContainer = (props) => {
  const homeServices = [];
  for (let key of Object.keys(props.services)) {
    homeServices.push(
      <ServicesContainer key={key} type={key} services={props.services[key]} />
    );
  }

  // props.test();

  return (
    <div>
      <Header />
      <center>
      {homeServices}
      </center>
      <div style={style} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
