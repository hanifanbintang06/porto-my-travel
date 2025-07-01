import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/pages/Home.jsx';
import NotFoundPage from './assets/pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
