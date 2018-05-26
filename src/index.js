import React from 'react';
import ReactDOM from 'react-dom';
import ExpensifyApp from './Components/ExpensifyApp/ExpensifyApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisionApp />, appRoot);