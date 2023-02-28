import React from 'react';
import Link from 'next/link';
import { CartItemType } from '../../AvocadoTypes/types';
import AvocadoLoader from '@components/Loader/AvocadoLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import ProductList from './ProductList';

const closeIcon = <FontAwesomeIcon icon={faXmarkSquare} className="text-lg" />;

type CartItemListProps = {
  items: CartItemType[];
  removeFromCart: (product: TProduct) => void;
  loading?: boolean;
};

const CartItemsList = ({
  items,
  removeFromCart,
  loading = false
}: CartItemListProps) => {
  if (loading) return <AvocadoLoader />;

  if (items.length === 0)
    return (
      <div className="w-full bg-tiger-100 rounded border border-tiger-500 flex flex-col justify-center items-center p-6 text-lg font-tilt">
        <h3>Your cart is empty</h3>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </div>
    );

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem;

      return {
        childKey: id,
        header: (
          <Link href="/product/[id]" as={`/product/${id}/`} passHref>
            <div className="text-lg font-karla-bold text-terracotta">
              {name}
            </div>
          </Link>
        ),
        image: (
          <img
            src={image}
            alt={name}
            style={{ background: '#f2f2f2' }}
            className="object-cover w-64 h-64"
          />
        ),
        meta: `${quantity} x ${price}`,
        description: 'Some more information goes here....',
        extra: (
          <button onClick={() => removeFromCart(cartItem)}> {closeIcon}</button>
        )
      };
    });

  return <ProductList items={mapCartItemsToItems(items)} />;
};

export default CartItemsList;
