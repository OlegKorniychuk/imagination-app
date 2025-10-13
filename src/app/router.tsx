import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
