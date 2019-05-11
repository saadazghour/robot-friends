import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './Hello';
// import Card from './Card';
// import CardList from './CardList';
import App from './Containers/App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { serch_Robots } from './reducers';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
// import { robots } from './robots';


// const store = createStore(rootReducer)

const store = createStore( serch_Robots )

ReactDOM.render(
    <Provider store= { store } >
        <App />
    </Provider>, document.getElementById('root')
);

// ReactDOM.render(<Hello greeting = {"Hello Azghour-Saad"}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
