import Link from 'next/link';
import React from 'react';

const Item = ({ avocado }: { avocado: TProduct }) => {
  return (
    <Link
      key={avocado.id}
      href="/product/[id]"
      as={`/product/${avocado.id}`}
      passHref
      className="container flex border-0 rounded-lg shadow-lg p-8 font-tilt text-base justify-self-center items-center m-6 w-1/3 hover:translate-y-3 cursor-pointer hover:translate-x-3 hover:shadow-terracotta"
    >
      <div className="w-2/3">
        <img src={avocado.image} />
      </div>

      <div className="w-2/3">
        <div className="flex mt-2">
          <div className="text-lg font-karla-bold text-tree">
            Item:
            <div className="text-base font-karla">{avocado.name}</div>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="text-lg font-karla-bold text-tree">
            Precio:
            <div className="text-base font-karla">{avocado.price}</div>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="text-lg font-karla-bold text-tree">
            Código:
            <div className="text-base font-karla">{avocado.sku}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
