import React from 'react';

const TransactionItem = () => {
  return (
    <div className="flex justify-between   text-white mt-10">
      <div className='flex items-center gap-5'>
        <img className='w-[5%]' src="https://www.creativefabrica.com/wp-content/uploads/2021/11/02/shopping-cart-icon-vector-illustration-Graphics-19544556-1.jpg" alt="" />
        <p>Transfer name</p>
      </div>
      <p>-300$</p>
    </div>
  );
};

TransactionItem.propTypes = {};

export default TransactionItem;
