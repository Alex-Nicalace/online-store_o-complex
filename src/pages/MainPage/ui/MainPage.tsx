import { Cart, selectCartIsEmpty } from '@entities/Cart';
import { ProductList } from '@entities/product';
import { ReviewList } from '@entities/Review';
import { AddToCart } from '@features/AddToCart';
import { MakeOrder } from '@features/make-order';
import { Container, Panel } from '@shared/ui';

import { useAppSelector } from '@shared/lib';
import cls from './MainPage.module.scss';

// type TMainPageProps = { }
function MainPage(/*{ }: TMainPageProps*/) {
  const isEmptyCart = useAppSelector(selectCartIsEmpty);

  return (
    <Container as="main" narrow>
      <section className={cls.reviews}>
        <h2 hidden>Отзывы</h2>
        <ReviewList />
      </section>
      <Panel as="section" className={cls.cart}>
        <h2 className={cls.cart__title}>Добавленные товары</h2>
        {isEmptyCart ? (
          <p className={cls.cart__empty}>Корзина пуста</p>
        ) : (
          <>
            <Cart className={cls.cart__list} />
            <MakeOrder />
          </>
        )}
      </Panel>
      <ProductList
        className={cls.products}
        renderActionSlotItem={({ id, title, price }) => {
          return <AddToCart productId={id} name={title} price={price} />;
        }}
      />
    </Container>
  );
}

export default MainPage;
