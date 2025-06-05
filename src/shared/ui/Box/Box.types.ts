import { type JSX } from 'react';

export type BoxProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  as?: T; // Ограничение по ключам JSX.IntrinsicElements
} & JSX.IntrinsicElements[T]; // Атрибуты соответствующего тега

export type ContainerProps<T extends keyof JSX.IntrinsicElements> =
  BoxProps<T> & {
    narrow?: boolean;
  };

export type PanelProps<T extends keyof JSX.IntrinsicElements> = BoxProps<T> & {
  dark?: boolean;
};
