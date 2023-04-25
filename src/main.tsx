import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import StateProvider from './api/StateProvider';
import reducer, { initialState } from './api/reducer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
