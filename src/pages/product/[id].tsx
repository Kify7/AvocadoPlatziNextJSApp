import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductSummary from '@components/ProductSummary/ProductSummary';
import Layout from '@components/Layout/Layout';

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
    <Layout>
      <section className="container w-screen flex justify-center mt-14">
        <ProductSummary product={product} />
      </section>
    </Layout>
  );
};

export default ProductItem;
