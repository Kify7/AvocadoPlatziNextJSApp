import Item from '@components/Item/Item';
import ItemsList from '@components/ItemsList/ItemsList';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
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
    <div>
      <KawaiiHeader />
      <ItemsList productList={productList} />
    </div>
  );
};

export default Home;
