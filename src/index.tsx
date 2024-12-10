import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './App/store/state';
import App from './App/App';
import LayoutStorageStyle from './App/Layout/LayoutStorageStyle';

import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// запрещаем контекстное меню, т. к. предполагаем что у нас будет свое
document.addEventListener('contextmenu', event => {
  event.preventDefault();
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LayoutStorageStyle>
        <App />
      </LayoutStorageStyle>
    </Provider>
  </React.StrictMode>
);