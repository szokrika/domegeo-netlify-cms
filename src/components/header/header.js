import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from '../link/link';
import Nav from '../header/nav/nav';
import LinkedIn from '../icons/linkedin';
import { Container } from './header.css';

const Header = ({ title, logo }) => (
  <Container>
    <div className="top">
      <Link className="logo" to="/">
        <img src={logo} alt={title} />
      </Link>
      <OutboundLink
        className="linkedin"
        aria-label="Link to Domegeo LinkedIn profile"
        href="https://www.linkedin.com/in/istv%C3%A1n-alm%C3%A1si-52530230/"
      >
        <LinkedIn width="30px" height="30px" />
      </OutboundLink>
    </div>
    <Nav />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Header;
