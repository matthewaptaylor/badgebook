import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import BlankLoader from './BlankLoader';

interface PublicOnlyRouteProps {
  children: ReactNode;
}

/**
 * Prevent access to a route when user is authenticated.
 * @param props
 * @returns The component.
 */
const PublicOnlyRoute: React.FC<PublicOnlyRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  console.log(auth);

  if (auth === undefined) return <BlankLoader />;

  if (auth) return <Navigate to="/" />;

  return children;
};

export default PublicOnlyRoute;
