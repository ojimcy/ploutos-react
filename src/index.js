import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import '../src/assets/css/animate.min.css';
import './assets/css/dashboard.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

