import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { properties } from './configs/properties';

let state =  {};
window.setState = (changes) => {
    state = Object.assign({},state, changes);
    ReactDOM.render(
      <Auth0Provider
          domain={properties.domain}
          clientId={properties.clientId}
          redirectUri={properties.redirectUri}>
        <App {...state}/>
      </Auth0Provider>,
      document.getElementById('root')
    );
};

let initialState = {
    name: "Shazwan",
    // eslint-disable-next-line no-restricted-globals
    location: location.pathname.replace(/^\/?|\/$/g, "")

};

window.setState(initialState);
