import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { loadStorage,saveStorage } from './localstorage/localStorageApi';
import { surveyQuestions } from './reducers';

const getLocalStorredState = loadStorage();
const store = createStore(surveyQuestions,getLocalStorredState);

store.subscribe(()=>{
	saveStorage({
		surveyQuestions: store.getState().surveyQuestions
	})
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
