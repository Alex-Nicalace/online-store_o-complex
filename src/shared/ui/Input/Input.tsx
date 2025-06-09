import cn from 'classnames';

import cls from './Input.module.scss';
import type { InputProps } from './Input.types';

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(cls.Input, className)} {...props} />;
}
