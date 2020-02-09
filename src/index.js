import React from 'react';
import { render } from 'react-dom';

import Layout from './components/layout/layout.jsx';
import { BrowserRouter } from 'react-router-dom';

import './icons/fontawesome';
import './index.scss';

const App = () => <Layout />;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
