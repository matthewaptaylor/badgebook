import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { ExclamationTriangleIcon, ReloadIcon } from '@radix-ui/react-icons';
import HeroBackground from '@/components/HeroBackground';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useSignInMutation } from '@/lib/mutations';
import { FormInput } from '@/components/FormInput';

interface Inputs {
  email: string;
  password: string;
}

/**
 * Login page.
 * @returns The component.
 */
const Login: React.FC = () => {
  const { t } = useTranslation();

  // Handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // Handle mutation
  const mutation = useSignInMutation();

  return (
    <HeroBackground className="p-6 flex flex-col justify-center items-center">
      <Card className="w-[350px]">
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
          <CardHeader>
            <CardTitle>{t('log_in_title')}</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormInput
                label={t('email_label')}
                htmlFor="email"
                error={errors.email?.message}
              >
                <Input
                  id="email"
                  placeholder={t('email_placeholder')}
                  {...register('email', { required: t('required_error') })}
                />
              </FormInput>

              <FormInput
                label={t('password_label')}
                htmlFor="password"
                error={errors.password?.message}
              >
                <Input
                  id="password"
                  placeholder={t('password_placeholder')}
                  type="password"
                  {...register('password', { required: t('required_error') })}
                />
              </FormInput>

              {mutation.isError && (
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>{t('error_label')}</AlertTitle>
                  <AlertDescription>{mutation.error.message}</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              {t('log_in_title')}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </HeroBackground>
  );
};

export default Login;
