import { useMutation } from 'react-query';
import {
  AuthTokenResponse,
  SignInWithPasswordCredentials,
} from '@supabase/supabase-js';
import { useTranslation } from 'react-i18next';
import supabase from '@/lib/supabase';

/**
 * Sign in a user with their email and password.
 * @returns The mutation object.
 */
export const useSignInMutation = () => {
  const { t } = useTranslation();

  return useMutation<
    AuthTokenResponse['data'],
    {
      message: string;
    },
    SignInWithPasswordCredentials
  >(async (req: SignInWithPasswordCredentials) => {
    let data: AuthTokenResponse;
    const error = new Error();
    try {
      data = await supabase.auth.signInWithPassword(req);
    } catch (_error) {
      error.message = t('generic_error'); // Likely a network error
      throw error;
    }

    if (data.error) {
      // Provide more specific error messages
      switch (data.error?.name) {
        case 'AuthApiError':
          error.message = t('invalid_credentials_error');
          break;
        default:
          error.message = t('generic_error');
          break;
      }

      throw error;
    }

    return data.data;
  });
};
