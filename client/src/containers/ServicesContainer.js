import React from 'react';
import ServiceCard from './../components/ServiceCard';

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const ServicesContainer = (props) => {
  const ServiceCards = [];
  props.services.forEach((service) => {
    ServiceCards.push(<ServiceCard key={service} service={service} />);
  });
  return (
    <div>
      <h3>{props.type}</h3>
      <div>
        {ServiceCards}
      </div>
    </div>
  );
};

export default ServicesContainer;
