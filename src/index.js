import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Roster from './components/Roster'
import AboutUs from './components/AboutUs'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN}
  clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
  redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI_REACT_SITE_URL}
  >
    <Router>
    <Header />
    <Routes>
      <Route
        path="/"
        element={<App/>}
      />
      <Route
        path="/roster"
        element={<Roster/>}
      />
      <Route
        path="/about"
        element={<AboutUs/>}
      />
    </Routes>          
    <Footer />
    </Router>
  </Auth0Provider>
  </>
);
