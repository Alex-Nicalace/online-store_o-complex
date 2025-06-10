import { Cart } from '@entities/Cart';
import { ReviewList } from '@entities/Review';
import { MakeOrder } from '@features/make-order';
import { Button, Container, Panel } from '@shared/ui';

import cls from './MainPage.module.scss';
import { ProductList } from '@entities/product';

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
      <ProductList
        className={cls.products}
        renderActionSlotItem={() => {
          return <Button>Купить</Button>;
        }}
      />
    </Container>
  );
}

export default MainPage;
