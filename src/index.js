import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { addCharacterById } from './actions';

import { Provider } from 'react-redux';
import { createStore } from 'redux';



const store = createStore(rootReducer);
console.log('store.getState()', store.getState());

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(3));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
//registerServiceWorker();
