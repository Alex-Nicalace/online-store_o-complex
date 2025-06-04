import cn from 'classnames';
import { createElement, type JSX } from 'react';
import cls from './Container.module.scss';
import type { ContainerProps } from './Container.types';

function Container<T extends keyof JSX.IntrinsicElements>({
  children,
  tag,
  className,
  ref,
  isNarrow,
  ...props
}: ContainerProps<T>) {
  return createElement(
    tag,
    {
      ...props,
      className: cn(cls.Container, className, { [cls.narrow]: isNarrow }),
      ref,
    },
    children
  );
}

export default Container;
