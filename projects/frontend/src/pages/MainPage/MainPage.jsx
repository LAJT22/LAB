import React from 'react';
import AccountBallance from '../../components/AccountBallance/AccountBallance';
import Navbar from '../../components/Navbar/Navbar';
import Transactions from '../../components/TransactionsBox/TransactionsBox';
import UserBox from '../../components/UserBox/UserBox';

const MainPage = () => {
  return (
    <div className="relative flex h-dvh flex-col gap-10 items-center p-5">
      <UserBox />
      <AccountBallance />
      <Transactions />
      <Navbar />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
