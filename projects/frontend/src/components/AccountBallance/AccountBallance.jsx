import React from 'react';

const AccountBallance = () => {
  return (
    <div className="h-[35%] w-[90%] md:w-[50%] flex flex-col justify-between rounded-3xl bg-slate-300 p-3">
      <h2 className="text-center text-2xl text-gray-800">Total Ballance</h2>
      <p className="text-center text-3xl">1,000.000 $</p>
      <div className='flex justify-evenly'>
        <div className='text-center'>
            <h3>Income</h3>
            <p>200$</p>
        </div>
        <div className='text-center'>
            <h3>Expenses</h3>
            <p>100$</p>
        </div>
      </div>
    </div>
  );
};

AccountBallance.propTypes = {};

export default AccountBallance;
