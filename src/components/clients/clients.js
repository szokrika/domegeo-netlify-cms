import React from 'react';
import PropTypes from 'prop-types';
import ClientsCont from './clients.css';
import { P } from 'components/title';

const Clients = ({ data }) => {
  return (
    <ClientsCont>
      {data.map(client => (
        <P key={client.name}>{client.name}</P>
      ))}
    </ClientsCont>
  );
};
Clients.propTypes = {
  data: PropTypes.arrayOf({
    name: PropTypes.string,
  }).isRequired,
};
export default Clients;
