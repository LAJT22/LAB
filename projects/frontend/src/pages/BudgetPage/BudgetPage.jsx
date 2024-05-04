import React from 'react';
import Chart from '../../components/Chart/Chart';
import Navbar from '../../components/Navbar/Navbar';

const BudgetPage = () => {
  return (
    <div className="flex h-dvh flex-col items-center p-5 ">
      <h2 className=" mt-5 text-center text-3xl font-semibold text-black md:mt-10">
        Percentage summary of your budget
      </h2>
      <Chart />
      <Navbar />
    </div>
  );
};

BudgetPage.propTypes = {};

export default BudgetPage;
