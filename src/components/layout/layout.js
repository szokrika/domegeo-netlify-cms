import React from 'react';
import PropTypes from 'prop-types';
import FullContainer, { Container as StyledContainer } from './layout.css';
// import Head from 'components/head/head';
import Header from '../header/header';
import Footer from '../footer/footer';
import GlobalStyle from '../../global.css';
import logo from './logo.png';

const Layout = ({ data, children, color }) => {
  return (
    <FullContainer color={color}>
      <GlobalStyle />
      {/* <Head title={data.title} /> */}
      <Header logo={logo} title={data.title} />
      {children}
      <Footer logo={logo} title={data.title} />
    </FullContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export const Container = ({ children, color, full, bottom, flex }) => (
  <StyledContainer color={color} full={full} bottom={bottom} flex={flex}>
    {children}
  </StyledContainer>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  bottom: PropTypes.string,
  full: PropTypes.bool,
  flex: PropTypes.bool,
};

const LayoutWithQuery = ({ data, ...props }) => (
  <Layout data={data} {...props} />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
