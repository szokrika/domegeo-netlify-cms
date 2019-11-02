import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li className="home">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/partners">Partners</Link>
      </li>
      <li>
        <Link to="/services">Our Services</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact us</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
