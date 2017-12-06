import React from 'react';
import ServicesContainer from './ServicesContainer';

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const HomeContainer = (props) => {
  return (
    <div>
      <ServicesContainer type={'Video'} services={['Netflix', 'Hulu']} />
      <ServicesContainer type={'Music'} services={['Spotify', 'Pandora']} />
    </div>
  );
};

export default HomeContainer;
