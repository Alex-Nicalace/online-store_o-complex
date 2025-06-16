import cn from 'classnames';
import cls from './Loader.module.scss';

type LoaderProps = {
  className?: string;
  isSmall?: boolean;
};
export function Loader({ className, isSmall }: LoaderProps) {
  return (
    <span
      className={cn(cls.Loader, className, { [cls.Loader_small]: isSmall })}
    ></span>
  );
}
