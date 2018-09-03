import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Layout from './components/Layout.jsx';

ReactDOM.render( <Layout />, document.getElementById('root'))


registerServiceWorker();

