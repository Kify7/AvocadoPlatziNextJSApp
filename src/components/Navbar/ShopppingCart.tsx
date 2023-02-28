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
    return (
      <div>
        {' '}
        {` ${name} `}
        {`(${cartCount})`}
      </div>
    );
  };

  return (
    <Link href="/cart" className="flex hover:text-green">
      <div className="cursor-pointer">{shopCart}</div>
      <div className="text-base text-cream px-2">{showCartCount()}</div>
      <div className="text-base text-cream px-2 self-center hover:text-green">
        Ir a la canasta
      </div>
    </Link>
  );
};

export default ShopppingCart;
