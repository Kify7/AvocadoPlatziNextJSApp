import React from 'react';

type CartSummaryProps = {
  totalAmount: number;
};

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <div>
      <span>
        <strong>Sub total:</strong>
        {` ${totalAmount}`}
      </span>
    </div>
  );
};

export default CartSummary;
