import React from 'react';
import ServicesContainer from './ServicesContainer';
import Header from './../components/Header';

const style = {
  paddingLeft: '50px'
};

const HomeContainer = (props) => {
  return (
    <div>
      <Header />
      <div style={style}>
        <ServicesContainer type={'Video'} services={['Netflix', 'Hulu']} />
        <br /><br />
        <ServicesContainer type={'Music'} services={['Spotify', 'Pandora']} />
      </div>
    </div>
  );
};

export default HomeContainer;
