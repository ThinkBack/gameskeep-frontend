import React from 'react';
import { render } from 'react-dom';

import MainLayout from './components/layout/layout.jsx';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

const App = () => <MainLayout />;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
