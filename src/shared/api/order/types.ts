export interface CreateOrder {
  phone: string;
  cart: OrderCartEntity[];
}
export interface OrderCartEntity {
  id: number;
  quantity: number;
}

export interface CreateOrderResponse {
  success: number;
  error: string;
}

// по факту в случае ошибки наблюдался тип CreateOrderResponseError
export interface CreateOrderResponseError {
  detail?: DetailEntity[] | null;
}
export interface DetailEntity {
  type: string;
  loc?: string[] | null;
  msg: string;
  input: string;
  ctx: Ctx;
}
export interface Ctx {
  max_length: number;
}
