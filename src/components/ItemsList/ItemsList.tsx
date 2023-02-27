import Item from '@components/Item/Item';
import React from 'react';

const ItemsList = ({ productList }: { productList: TProduct[] }) => {
  return (
    <div className="flex w-screen flex-wrap justify-center">
      {productList.map((product) => (
        <Item avocado={product} />
      ))}
    </div>
  );
};

export default ItemsList;
