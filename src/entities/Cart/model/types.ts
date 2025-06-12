export interface CartItem {
  productId: number;
  name: string;
  quantity: number;
  price: number;
}
export interface CartListState {
  items: Record<string, CartItem>;
}

export type CartNewItem = Omit<CartItem, 'quantity'>;
