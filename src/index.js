import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',  // Replace with your GraphQL server URI
  cache: new InMemoryCache(),
});

// Render the App inside ApolloProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
