import './vendor/fonts/fonts.css';
import './vendor/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { MoviesProvider } from './contexts/MoviesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
