import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/ionicons/dist/css/ionicons.min.css'
import './../node_modules/tailwindcss/dist/tailwind.min.css'
import './assets/style/main.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
