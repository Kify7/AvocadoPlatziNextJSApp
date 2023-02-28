import React from 'react';
import ProductAttributes from './ProductAttributes';
import { formatMoney } from '@utils/formatters';
import AddToCart from './AddToCart';

const ProductSummary = ({ product }: { product?: TProduct }) => {
  return (
    <div className="flex w-4/6 mt-8 rounded-lg shadow-gray shadow-sm flex-col">
      <div className="flex">
        <div className="w-1/2 flex">
          <img src={product?.image} alt="" className="rounded-lg" />
        </div>
        <div className="flex w-1/2 flex-col  mt-10 px-4">
          <div className="font-karla-bold text-terracotta text-2xl flex-col">
            {product?.name}
          </div>
          <div className="font-tilt text-gray">{product?.sku}</div>
          <div className="font-tilt text-gray">
            {formatMoney(product?.price)}
          </div>
          <div className="mt-8 justify-center">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-karla-bold text-terracotta text-xl">
          Acerca de este Aguacate
        </div>
        <div className="font-tilt text-base text-gray">
          {product?.attributes.description}
        </div>
        <div className="border-b border-smoke-400 h-2 w-full mt-2"></div>
        <ProductAttributes product={product} />
      </div>
    </div>
  );
};

export default ProductSummary;
