import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import hero from '@/assets/hero.png';

const HeroBackground = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('min-h-screen bg-fixed bg-cover', className)}
    style={{
      ...(props.style ?? {}),
      backgroundImage: `url(${hero})`,
    }}
    {...props}
  />
));
HeroBackground.displayName = 'CardBackground';

export default HeroBackground;
