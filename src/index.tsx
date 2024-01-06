import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {BrowserRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51OV6GMJwT2JIelrexjnF0v5gNE5bTlTROp2gd1y4Z2kIOJVFlaRVDdD47rI6sUGJYkGzplOvvYQlKN1KTJAsWvXu005hyahe6O');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Elements stripe={stripePromise}>
              <App/>
          </Elements>
      </BrowserRouter>
  </React.StrictMode>
);
