import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux'
import App from './routes/App.jsx';
import './index.css';
import Bag from './routes/Bag.jsx'; // Ensure this path and file extension are correct
import Home from './routes/Home.jsx';
import myntraStore from './store/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", 
        element: <Home/>
      },
      {
        path: "/Bag", 
        element: <Bag />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
