import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { UserProvider } from './contexts/UserContext'; // ✅ Import the context provider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider> {/* ✅ Wrap your entire app */}
      <App />
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
