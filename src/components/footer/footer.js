import React from 'react';
import PropTypes from 'prop-types';

import { MdMailOutline } from 'react-icons/md';
import { FooterContainer } from './footer.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from '../link/link';
import Title, { P } from '../title/title';
import { Container } from '../layout/layout';
import LinkedIn from '../icons/linkedin';

function Footer({ logo, title }) {
  return (
    <FooterContainer>
      <Container>
        <div className="top">
          <div className="left">
            <Link className="logo" to="/">
              <img src={logo} alt={title} style={{ maxWidth: '160px' }} />
            </Link>
          </div>
          <div className="right">
            <Title as="h4">Contact us</Title>
            <Link className="link" to="/contact-us">
              <MdMailOutline size="20" />
              Send us a message!
            </Link>
            <OutboundLink
              className="linkedin"
              aria-label="Additional link to Domegeo LinkedIn profile"
              href="https://www.linkedin.com/in/istv%C3%A1n-alm%C3%A1si-52530230/"
            >
              <LinkedIn width="20px" height="20px" />
            </OutboundLink>
          </div>
        </div>
        <P className="copy">
          {`${new Date().getFullYear()} domegeo.ca. All rights reserved.`}
        </P>
      </Container>
    </FooterContainer>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
export default Footer;
