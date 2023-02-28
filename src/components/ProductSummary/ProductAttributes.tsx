import React from 'react';

const ProductAttributes = ({ product }: { product?: TProduct }) => {
  return (
    <div className="mt-4 font-karla text-gray text-lg flex flex-col border border-smoke-400 rounded-md">
      <div className="bg-smoke-300 text-left px-6 flex items-center font-karla-bold py-2">
        Atributos
      </div>
      <div className="flex border-b border-smoke-300 py-4 px-6">
        <div className="w-1/4">Forma:</div>
        <div className="w-3/4">{product?.attributes.shape}</div>
      </div>
      <div className="flex border-b border-smoke-300 py-4 px-6">
        <div className="w-1/4">Sabor:</div>
        <div className="w-3/4">{product?.attributes.taste}</div>
      </div>
      <div className="flex py-4 px-6">
        <div className="w-1/4">Dureza:</div>
        <div className="w-3/4">{product?.attributes.hardiness}</div>
      </div>
    </div>
  );
};

export default ProductAttributes;
