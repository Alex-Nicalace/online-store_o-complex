import cn from 'classnames';
import cls from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};
export function Loader({ className }: LoaderProps) {
  return <div className={cn(cls.Loader, className)}></div>;
}
