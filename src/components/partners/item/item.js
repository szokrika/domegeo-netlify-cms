import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { ItemContainer } from './item.css';

const Item = ({ item: { text, image, link } }) => {
  return (
    <ItemContainer>
      <OutboundLink href={link}>
        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={text} />
      </OutboundLink>
    </ItemContainer>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.shape(),
  }).isRequired,
};

export default Item;
