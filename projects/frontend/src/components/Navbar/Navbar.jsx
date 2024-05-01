import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-0 flex w-screen justify-around bg-gray-200 p-3 ">
      <button onClick={() => navigate(`/`)}>Home</button>
      <div className="absolute bottom-6 flex h-[50px] w-[50px] justify-center rounded-full bg-white">
        <button onClick={() => navigate(`/transfer`)}>+</button>
      </div>
      <button onClick={() => navigate(`/budget`)}>Budget</button>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
