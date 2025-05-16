import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from "./App";
import {About} from "./about";
import {Universe} from "./Univers";
import { Layout } from './Layout';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Conté la capçalera i el menú
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/univers", element: <Universe /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

