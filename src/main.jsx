import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPages from './components/pages/AboutPages';
import FormPages from './components/pages/FormPages';
import HomePages from './components/pages/HomePages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPages></AboutPages>
  },
  {
    path: '/form',
    element: <FormPages></FormPages>
  },
  {
    path: '/app',
    element: <HomePages></HomePages>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);