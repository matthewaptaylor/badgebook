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

const Login: React.FC = () => (
  <HeroBackground className="p-6 flex flex-col justify-center items-center">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Log in</CardTitle>
      </CardHeader>

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Password</Label>
              <Input id="email" placeholder="Not 'password123'" />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button>Log in</Button>
      </CardFooter>
    </Card>
  </HeroBackground>
);

export default Login;
