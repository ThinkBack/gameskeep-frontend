import React from 'react';
import { render } from 'react-dom';

import Layout from './components/layout/layout.jsx';

import './icons/fontawesome';
import './index.scss';

const App = () => <Layout />;

render(<App />, document.getElementById('root'));
