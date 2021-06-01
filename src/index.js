import React from 'react';
import { render }  from 'react-dom';
import { ApolloProvider } from "@apollo/client/react";
import App from './components/App';
import client from './Apollo';

render(
  <ApolloProvider client={client}>
    <App></App>
    </ApolloProvider>,
  document.getElementById('root')
);
