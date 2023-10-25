import { createBrowserRouter } from 'react-router-dom';
import Root from '@/routes/Root';
import Login from '@/routes/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
