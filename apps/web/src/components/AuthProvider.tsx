import { ReactNode, createContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export const AuthContext = createContext<Session | null | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Provide the current user session to the app.
 * @param props
 * @returns The AuthProvider component.
 */
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setData(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setData(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
