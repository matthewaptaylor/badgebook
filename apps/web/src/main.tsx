import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from '@/components/AuthProvider';
import queryClient from '@/lib/queryClient';
import router from '@/lib/router';
import '@/lib/i18n';
import '@/assets/globals.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
