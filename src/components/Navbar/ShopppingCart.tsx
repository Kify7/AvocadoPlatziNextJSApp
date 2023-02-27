import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const shopCart = (
  <FontAwesomeIcon
    icon={faCartShopping}
    className="text-cream hover:text-green text-2xl py-2"
  />
);

type ShoppingCartIconProps = {
  cartCount: number;
  name: string;
};

const ShopppingCart = ({ cartCount, name }: ShoppingCartIconProps) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`;
    }
    if (cartCount > 9) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      );
    }
    return `(${cartCount})`;
  };

  return (
    <div className='flex hover:text-green"'>
      <button type="button">{shopCart}</button>
      <div className="text-base text-cream px-2">{showCartCount()}</div>
    </div>
  );
};

export default ShopppingCart;
