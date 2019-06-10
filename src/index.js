import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './layouts/App';
import * as serviceWorker from './serviceWorker';
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init();


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
