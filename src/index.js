import React from 'react';
import { render } from 'react-dom';

import MainLayout from './components/layout/layout.jsx';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import 'antd/dist/antd.css';

const App = () => <MainLayout />;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
