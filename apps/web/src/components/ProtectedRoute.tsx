import { ReactNode, useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { AuthContext } from './AuthProvider';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Prevent access to routes that require authentication.
 * @param props
 * @returns The ProtectedRoute component.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);

  // Create indeterminate progress bar
  const [progress, setProgress] = useState(0);
  const [intervalNum, setIntervalNum] = useState<NodeJS.Timeout | null>(null);

  // Set interval on mount
  useEffect(() => {
    if (auth === undefined && intervalNum === null)
      // Increment progress if auth is loading
      setIntervalNum(
        setInterval(() => {
          setProgress((progress) => (progress + 1) % 100);
        }, 10),
      );
    else if (auth && intervalNum !== null)
      // Clear interval if auth is loaded
      clearInterval(intervalNum);

    return () => {
      if (intervalNum) clearInterval(intervalNum);
    };
  }, [auth, intervalNum]);

  if (auth === undefined)
    return (
      <div className="min-h-screen">
        <Progress value={progress} className="rounded-none" />
      </div>
    );

  if (auth === null) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
