import cn from 'classnames';

import { Loader } from '../Loader';
import cls from './Button.module.scss';
import type { ButtonProps } from './Button.types';

export function Button({
  className,
  isPending,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(cls.Button, className)}
      {...props}
      disabled={isPending}
    >
      {isPending && (
        <span className={cls.loader}>
          <Loader isSmall />
        </span>
      )}
      {children}
    </button>
  );
}
