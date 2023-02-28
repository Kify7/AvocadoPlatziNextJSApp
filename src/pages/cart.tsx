import Layout from '@components/Layout/Layout';
import CartItemsList from '@components/ShoppingCartSummary/CartItemsList';
import CartSummary from '@components/ShoppingCartSummary/CartSummary';
import { useCart, useCartMutations } from '@store/Cart';
import React from 'react';

const Cart = () => {
  const { items, count } = useCart();
  const { removeFromCart } = useCartMutations();

  return (
    <Layout>
      <section className="w-screen mt-14 flex justify-center flex-col items-center">
        <div className="w-3/6 flex  flex-col items-center px-10">
          <CartItemsList items={items} removeFromCart={removeFromCart} />
          <div className="border-b border-smoke-400 h-2 w-full my-4"></div>
          <div className="border border-smoke-400 rounded py-4 px-6 flex w-full font-tilt text-lg text-gray justify-between items-center">
            <CartSummary totalAmount={count} />
            <button
              className="rounded bg-green hover:bg-tree font-karla-bold text-cream hover:text-green py-2 px-4"
              type="submit"
            >
              Check out
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
