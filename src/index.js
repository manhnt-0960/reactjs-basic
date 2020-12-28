import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';

import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./reducers/index";
import { Provider } from "react-redux";

// const store = createStore(appReducer, compose(applyMiddleware(thunk, logger)));
const store = configureStore({
  reducer: appReducer,
})

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
