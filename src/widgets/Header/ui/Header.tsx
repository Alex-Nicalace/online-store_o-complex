import cn from 'classnames';

import Container from '@shared/ui/Container';
import cls from './Header.module.scss';
import type { HeaderProps } from './Header.types';

function Header({ className }: HeaderProps) {
  return (
    <Container tag="header" className={cn(cls.Header, className)}>
      <h1 className={cls.title}>тестовое задание</h1>
    </Container>
  );
}

export default Header;
