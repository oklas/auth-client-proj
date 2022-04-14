import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import checkConfig from './consts/checkConfig';

checkConfig()

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
