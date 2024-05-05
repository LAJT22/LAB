import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../Context/Context';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';

const MoneyTransfer = () => {
  const navigate = useNavigate();
  const {
    formValues: { transferName, amount },
    handleInputChange,
    createHandleSubmit,
  } = useContext(FormContext);

  return (
    <div className="flex h-dvh flex-col items-center gap-5 p-5 md:gap-10">
      <h2 className="mt-5 text-3xl font-bold text-black md:mt-10 ">Make a transfer</h2>
      <form
        onSubmit={createHandleSubmit(navigate)}
        className="bg-bgAccent flex h-[70%] w-[90%] flex-col items-center justify-around gap-4 rounded-lg border-2 border-black p-6  text-black shadow-xl md:h-[70%]  md:w-[30%]"
      >
        <Input
          name="transferName"
          onChange={handleInputChange}
          width="md:w-[80%]"
          type="text"
          value={transferName}
          placeholder="Enter the transfer name"
          required
        />
        <Input
          name="amount"
          onChange={handleInputChange}
          value={amount}
          width="md:w-[80%]"
          type="number"
          placeholder="Enter the amount $"
          required
        ></Input>
        <div className="flex w-[100%] items-center  justify-between md:w-[80%]">
          <div className="flex flex-col items-center gap-1">
            <label className="" htmlFor="income">
              Income
            </label>
            <Input
              onChange={handleInputChange}
              name="transactionType"
              type="radio"
              value="income"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <label htmlFor="expenses">Expenses</label>
            <Input
              width=""
              onChange={handleInputChange}
              name="transactionType"
              type="radio"
              value="expenses"
              required
            />
          </div>
        </div>
        <div className="m flex w-[100%] flex-col gap-4 md:w-[80%]">
          <label htmlFor="option">Category:</label>
          <select
            onChange={handleInputChange}
            className=" bg-bgAccent rounded-full border-2 border-black p-3 text-black"
            name="option"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment & Travels</option>
            <option value="health">Health & Beauty</option>
            <option value="transport">Car & Transport</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="flex w-[100%]  flex-col justify-between gap-5 md:w-[80%] md:flex-row ">
          <Button width="md:w-[50%] w-[100%]" type="submit">
            Confirm
          </Button>
          <Button
            width="md:w-[50%] w-[100%]"
            onClick={() => {
              navigate('/');
            }}
            outline
          >
            Back
          </Button>
        </div>
      </form>
      <Navbar />
    </div>
  );
};

MoneyTransfer.propTypes = {};

export default MoneyTransfer;
