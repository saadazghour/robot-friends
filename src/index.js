import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello';
// import Card from './Card';
import CardList from './CardList';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { robots } from './robots';



ReactDOM.render(
    <CardList robots={ robots }/>,
    document.getElementById('root')
);

// ReactDOM.render(<Hello greeting = {"Hello Azghour-Saad"}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
