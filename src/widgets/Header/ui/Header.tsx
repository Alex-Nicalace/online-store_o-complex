import cn from 'classnames';

import cls from './Header.module.scss';
import type { HeaderProps } from './Header.types';
import { Container, Panel } from '@shared/ui';

function Header({ className }: HeaderProps) {
  return (
    <Container as="header" className={cn(cls.Header, className)}>
      <Panel as="h1" dark className={cls.title}>
        тестовое задание
      </Panel>
    </Container>
  );
}

export default Header;
