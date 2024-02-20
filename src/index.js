import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Days from "./pages/Days";
import Error from "./pages/Error";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/days" element={<Days />} />

        <Route path = "*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
