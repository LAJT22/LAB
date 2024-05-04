import React, { useContext } from 'react';
import { FormContext } from '../../../Context/Context';
import { RenderIcon } from '../../../Helpers/RenderIcon';

const TransactionItem = () => {
  const {
    formValues: { transferName, amount, transactionType, option },
  } = useContext(FormContext);
  return (
    <div className="mt-5 flex   justify-between text-black md:mt-10">
      <div className="flex items-center gap-5">
        {option && RenderIcon(option)}
        <p>{transferName}</p>
      </div>
      {amount && (
        <p>
          {transactionType === 'income' ? '+' : '-'}
          {amount}$
        </p>
      )}
    </div>
  );
};

TransactionItem.propTypes = {};

export default TransactionItem;
