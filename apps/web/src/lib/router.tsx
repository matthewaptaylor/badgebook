import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import Root from '@/routes/Root';
import Login from '@/routes/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
