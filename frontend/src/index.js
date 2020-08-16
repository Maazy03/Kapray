import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  'mdbreact/dist/css/mdb.css';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
