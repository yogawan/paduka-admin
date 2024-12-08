import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePages from './components/pages/HomePages';
import FormPages from './components/pages/FormPages';
import AppPages from './components/pages/AppPages';
import AIPages from './components/pages/AIPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages></HomePages>
  },
  {
    path: '/form',
    element: <FormPages></FormPages>
  },
  {
    path: '/app',
    element: <AppPages></AppPages>
  },
  {
    path: '/chat',
    element: <AIPages></AIPages>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);