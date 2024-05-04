import React, { useContext } from 'react';
import { FormContext } from '../../Context/Context';

const AccountBallance = () => {
  const {
    formValues: { amount, transactionType },
  } = useContext(FormContext);

  return (
    <div className="bg-mainColor shadow-mainColor flex h-[35%] w-[90%] flex-col justify-between rounded-3xl border-2 border-black p-3 text-white shadow-md md:w-[50%]">
      <h2 className="text-center text-2xl font-semibold">Total Ballance</h2>
      {amount ? (
        <p className="text-center text-3xl font-bold">{`${amount}$`}</p>
      ) : (
        <p className="text-center text-3xl font-bold">0$</p>
      )}
      <div className="flex justify-evenly">
        <div className="space-y-1 text-center">
          <h3 className="font-semibold">Last income</h3>
          <pc className="font-normal">
            {transactionType === 'income' ? '+' + amount + '$' : '0$'}
          </pc>
        </div>
        <div className="space-y-1 text-center">
          <h3 className="font-semibold">Last expenses</h3>
          <p className="font-normal">
            {transactionType === 'expenses' ? '-' + amount + '$' : '0$'}
          </p>
        </div>
      </div>
    </div>
  );
};

AccountBallance.propTypes = {};

export default AccountBallance;
