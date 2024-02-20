import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import App from './Home';
import Days from "./Days";
import Error from "./Error";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path= "/" element={<App />} />
        <Route path= "/days" element={<Days />} />

        <Route path = "*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
