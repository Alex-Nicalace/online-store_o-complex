import cn from 'classnames';

import type { ButtonProps } from './Button.types';
import cls from './Button.module.scss';

export function Button({ className, ...props }: ButtonProps) {
  return <button className={cn(cls.Button, className)} {...props} />;
}
