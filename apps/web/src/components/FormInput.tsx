import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

export type FormInputProps = React.InputHTMLAttributes<HTMLDivElement> & {
  label: string;
  htmlFor: string;
  error?: string;
};

/**
 * A form component that wraps an input.
 */
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, htmlFor, error, className, children, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-col space-y-1.5', className)}
        ref={ref}
        {...props}
      >
        <Label htmlFor={htmlFor}>{label}</Label>
        {children}
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);
FormInput.displayName = 'FormInput';

export { FormInput };
