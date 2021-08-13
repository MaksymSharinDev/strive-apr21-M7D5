import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
//TODO setup store configs ( second M7D4 homework solution )
//TODO follow the structure
// ./ComponentName/ComponentName.jsx ( with import './ComponentName.css' )
// ./ComponentName/ComponentName.css
// ./ComponentName/reducer.jsx
// ./ComponentName/actions.jsx





import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

