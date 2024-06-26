import React from 'react';

const UserBox = () => {
  return (
    <div className=" flex items-center gap-5 self-start text-black mt-5 md:mt-10 ">
      <img
        className="h-14 rounded-2xl"
        src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
      />
      <div>
        <p className="text-xl ">Welcome back,</p>
        <h2 className="text-mainColor text-2xl font-bold">Marek Goldman</h2>
      </div>
    </div>
  );
};

UserBox.propTypes = {};

export default UserBox;
