import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { Container } from './hero.css';

const Hero = ({ children, image, className, type, effects }) => {
  const imageData = image && image.childImageSharp && image.childImageSharp.fluid;
  return (
    <Container style={{ minHeight: '300px' }} type={type} effects={effects}>
      {imageData && <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={'#040e18'}
      >
        {children}
      </BackgroundImage>}
    </Container>
  );
};

Hero.defaultProps = {
  className: 'hero',
  type: 'primary',
  effects: false,
};

Hero.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  image: PropTypes.shape().isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  effects: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default Hero;
