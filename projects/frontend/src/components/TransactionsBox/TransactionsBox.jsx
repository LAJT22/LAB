import React from 'react';
import TransactionItem from './TransactionItem/TransactionItem';

const Transactions = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between">
        <h2 className="text-xl ">Recent transactions</h2>
        <button className="bg-transparent text-xl ">See All</button>
      </div>
      <TransactionItem/>
    </div>
  );
};

Transactions.propTypes = {};

export default Transactions;
