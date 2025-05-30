import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { About } from './about';
import { Universe } from './Univers';
import { Nivells } from './Nivells';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/univers', element: <Universe /> },
  { path: '/nivells', element: <Nivells /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
