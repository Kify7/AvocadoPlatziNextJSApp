import ItemsList from '@components/ItemsList/ItemsList';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import Layout from '@components/Layout/Layout';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
      });
  }, []);

  return (
    <Layout>
      <div>
        <KawaiiHeader />
        <ItemsList productList={productList} />
      </div>
    </Layout>
  );
};

export default Home;
