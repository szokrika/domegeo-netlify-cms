import React from 'react';
import PropTypes from 'prop-types';

import { PartnersContainer } from './partners.css';
import Item from './item/item';

const Partners = ({ items }) => {
  console.log('------- items --------->', items);
  return (
    <PartnersContainer>
      {items.map(item => (
        <Item key={item.name} item={item} />
      ))}
    </PartnersContainer>
  );
};

Partners.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
};
export default Partners;
