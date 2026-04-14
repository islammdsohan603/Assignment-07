import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import Layout from './Layout.jsx';
import TimeLine from './page/timeline/TimeLine.jsx';
import Stats from './page/stats/Stats.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FriendsProvider from './FriendsContaxtData.jsx';
import FrindesDetails from './page/friends/FrindesDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'timeline', element: <TimeLine /> },
      { path: 'FrindesDetails/:id', element: <FrindesDetails /> },
      { path: 'stats', element: <Stats /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
    </FriendsProvider>
  </StrictMode>,
);
