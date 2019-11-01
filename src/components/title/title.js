import React from 'react';
import PropTypes from 'prop-types';
import { Text, Paragraph } from './title.css';

export const P = ({ children, ...props }) => (
  <Paragraph {...props}>{children}</Paragraph>
);
P.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

const Title = ({ children, as = 'span', size, center, height, border }) => {
  return (
    <Text as={as} size={size} center={center} height={height} border={border}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  as: PropTypes.string,
  height: PropTypes.string,
  center: PropTypes.bool,
  border: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default Title;
