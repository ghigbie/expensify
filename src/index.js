import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './Components/IndecisionApp/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisionApp />, appRoot);