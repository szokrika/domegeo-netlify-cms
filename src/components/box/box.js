import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, padding, slim, className, width }) => (
  <Container padding={padding} slim={slim} className={className} width={width}>
    {children}
  </Container>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  slim: PropTypes.bool,
};

export default Box;
