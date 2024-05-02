import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Navbar from '../Navbar/Navbar';

const MoneyTransfer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-dvh flex-col items-center justify-start gap-10">
      <h2 className="mt-10 text-3xl font-bold text-white">Make a transfer</h2>
      <div className="flex h-[70%] w-[90%] flex-col items-center justify-around rounded-lg border-2 border-black bg-gray-700 p-6 text-white md:h-[70%]  md:w-[30%] ">
        <Input type="text" placeholder="Enter the transfer name" />
        <Input type="number" placeholder="Enter the amount $"></Input>
        <div className="flex w-full justify-around ">
          <div className="flex flex-col items-center gap-5">
            <label htmlFor="">Income</label>
            <Input type="radio" />
          </div>
          <div className="flex flex-col items-center gap-5">
            <label htmlFor="">Select </label>
            <Input type="radio" />
          </div>
        </div>
        <div className="flex w-[75%] flex-col gap-5">
          <label htmlFor="" className="">
            Category:
          </label>
          <select className=" rounded-full p-3 text-black" name="" id="">
            <option value="" disabled selected>
              Select the category
            </option>
            <option value="">Shopping</option>
            <option value="">Entertainment & Travels</option>
            <option value="">Healthy & Beauty</option>
            <option value="">Car & Transport</option>
            <option value="">Others</option>
          </select>
        </div>
        <div className="flex justify-center gap-10 md:w-[225%]">
          <Button>Confirm transfer</Button>
          <Button
            onClick={() => {
              navigate('/');
            }}
            outline
          >
            Back to home
          </Button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

MoneyTransfer.propTypes = {};

export default MoneyTransfer;
