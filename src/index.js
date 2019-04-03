import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { loadStorage,saveStorage } from './localstorage/localStorageApi';
import { surveyQuestions } from './reducers';
import { Provider } from 'react-redux';

const getLocalStorredState = loadStorage();
const localstorage = getLocalStorredState && getLocalStorredState.surveyQuestions;
const store = createStore(surveyQuestions,localstorage);
store.subscribe(()=>{
	saveStorage({
		surveyQuestions: store.getState()
	})
});

ReactDOM.render(
	<Provider store = { store }>
		<App />
	</Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();