import { createElement, type JSX } from 'react';
import type { BoxProps, ContainerProps, PanelProps } from './Box.types';
import cls from './Box.module.scss';
import cn from 'classnames';

export function Box<T extends keyof JSX.IntrinsicElements = 'div'>({
  children,
  as = 'div' as T,
  ...props
}: BoxProps<T>) {
  return createElement(as, props, children);
}

export function Container<T extends keyof JSX.IntrinsicElements = 'div'>({
  className,
  as,
  narrow,
  ...props
}: ContainerProps<T>) {
  return (
    <Box
      as={as}
      className={cn(
        cls.container,
        { [cls.container_narrow]: narrow },
        className
      )}
      {...props}
    />
  );
}

export function Panel<T extends keyof JSX.IntrinsicElements = 'div'>({
  className,
  as,
  dark,
  ...props
}: PanelProps<T>) {
  return (
    <Box
      as={as}
      className={cn(cls.panel, { [cls.panel_dark]: dark }, className)}
      {...props}
    />
  );
}
