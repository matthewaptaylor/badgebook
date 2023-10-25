import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import PublicOnlyRoute from '@/components/PublicOnlyRoute';
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
    element: (
      <PublicOnlyRoute>
        <Login />
      </PublicOnlyRoute>
    ),
  },
]);

export default router;
