import { useTranslation } from 'react-i18next';
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
import { Label } from '@/components/ui/label';

const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeroBackground className="p-6 flex flex-col justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{t('log_in_title')}</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">{t('email_label')}</Label>
                <Input id="email" placeholder={t('email_placeholder')} />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">{t('password_label')}</Label>
                <Input id="password" placeholder={t('password_placeholder')} />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button>{t('log_in_title')}</Button>
        </CardFooter>
      </Card>
    </HeroBackground>
  );
};

export default Login;
