import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN}
  clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
  redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI_REACT_SITE_URL}
  >
    <App />
  </Auth0Provider>
);
