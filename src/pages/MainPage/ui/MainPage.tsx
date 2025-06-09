import { Cart } from '@entities/Cart';
import { ReviewList } from '@entities/Review';
import { MakeOrder } from '@features/make-order';
import { Container, Panel } from '@shared/ui';

import cls from './MainPage.module.scss';

// type TMainPageProps = { }
function MainPage(/*{ }: TMainPageProps*/) {
  return (
    <Container as="main" narrow>
      <section className={cls.reviews}>
        <h2 hidden>Отзывы</h2>
        <ReviewList />
      </section>
      <Panel as="section" className={cls.cart}>
        <h2 className={cls.cart__title}>Добавленные товары</h2>
        <Cart className={cls.cart__list} />
        <MakeOrder />
      </Panel>
    </Container>
  );
}

export default MainPage;
