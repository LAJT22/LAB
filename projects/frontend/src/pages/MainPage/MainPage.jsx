import React from 'react';
import AccountBallance from '../../components/AccountBallance/AccountBallance';
import Navbar from '../../components/Navbar/Navbar';
import Transactions from '../../components/TransactionsBox/TransactionsBox';
import UserBox from '../../components/UserBox/UserBox';

const MainPage = () => {
  return (
    <div className="mx-auto  flex h-dvh max-w-[1400px] flex-col items-center gap-10 p-5 pt-0 ">
      <UserBox />
      <AccountBallance />
      <Transactions />
      <Navbar />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
