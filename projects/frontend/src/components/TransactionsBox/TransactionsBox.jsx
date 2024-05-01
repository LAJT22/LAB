import React from 'react';

const Transactions = () => {
  return (
    <div className="w-full p-3">
      <div className="flex justify-between">
        <h2 className="text-xl text-white">Recent transactions</h2>
        <button className="bg-transparent text-xl text-white">See All</button>
      </div>
    </div>
  );
};

Transactions.propTypes = {};

export default Transactions;
