import { Container } from '@shared/ui/Container';
import cn from 'classnames';
import cls from './Header.module.scss';

type HeaderProps = { className?: string };
function Header({ className }: HeaderProps) {
  return (
    <Container tag="header">
      <h1 className={cn(cls.Header, className)}>тестовое задание</h1>
    </Container>
  );
}

export default Header;
