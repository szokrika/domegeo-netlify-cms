import React from 'react';
import { StyledLink } from './link.css';

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, color, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledLink
        to={to}
        activeClassName={activeClassName}
        color={color}
        {...other}
      >
        {children}
      </StyledLink>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={to}
      css={{ color: color }}
      {...other}
    >
      {children}
    </a>
  );
};

export default Link;
