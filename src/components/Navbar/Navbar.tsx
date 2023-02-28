import Link from 'next/link';
import React from 'react';
import { Logo } from 'svg';
import ShopppingCart from './ShopppingCart';
import { useCart } from '@store/Cart';

const Navbar = () => {
  const { count: cartCount } = useCart();
  return (
    <nav className="bg-terracotta h-28 w-screen">
      <div className="w-full flex py-2 justify-center">
        <Link href="/">
          <Logo className="text-8xl" />
        </Link>
        <menu className="w-1/3 text-base font-karla-bold text-cream flex content-center items-center justify-evenly">
          <Link href="/" className=" hover:text-green">
            Productos
          </Link>
          <Link href="/about" className=" hover:text-green">
            Acerca de Aguacatl
          </Link>
        </menu>
        <div className="flex items-center w-1/3 justify-end font-karla-bold text-cream hover:text-green">
          <ShopppingCart cartCount={cartCount} name={'Canasta'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
