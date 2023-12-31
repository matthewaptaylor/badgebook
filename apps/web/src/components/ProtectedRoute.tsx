import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import BlankLoader from './BlankLoader';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Prevent access to a route when user is unauthenticated.
 * @param props
 * @returns The component.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth === undefined) return <BlankLoader />;

  if (auth === null) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
