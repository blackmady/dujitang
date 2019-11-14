/*
 * @Author: None
 * @LastEditors: None
 * @Date: 2019-11-14 12:27:50
 * @LastEditTime: 2019-11-14 15:36:55
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
