import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>();
  const {
    query: { id }
  } = useRouter();
  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(id);
        setProduct(data);
      });
  }, [id]);

  return (
    <section className="container w-screen flex justify-center">
      <div className="flex w-4/6 mt-8 rounded-lg shadow-gray shadow-sm flex-col">
        <div className="flex">
          <div className="w-1/2 flex">
            <img src={product?.image} alt="" className="rounded-lg" />
          </div>
          <div className="flex w-1/2 flex-col  mt-10 px-4">
            <div className="font-karla-bold text-terracotta text-2xl flex-col">
              {product?.name}
            </div>
            <div className="font-tilt text-gray">{product?.price}</div>
            <div className="font-tilt text-gray">{product?.sku}</div>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-karla-bold text-terracotta text-xl">
            Acerca de este Aguacate
          </div>
          <div className="font-tilt text-base text-gray">
            {product?.attributes.description}
          </div>
          <div className="border-b border-smoke-400 h-2 w-full "></div>
          <div>Aqui la tabla</div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
