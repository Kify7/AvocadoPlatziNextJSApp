export type CartItemType = TProduct & { quantity: number };

export type CartState = {
  [key: string]: CartItemType;
};

export type CartAction = {
  type: 'add' | 'remove';
  item: TProduct;
  quantity?: number;
};
