import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './item.css';

const Item = ({ text, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={text} />
    <figcaption>
      <Title>{text}</Title>
    </figcaption>
  </figure>
);

Item.propTypes = {
  text: PropTypes.string,
  // copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
