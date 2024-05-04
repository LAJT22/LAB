import React from 'react';
import { AiOutlineHome, AiOutlinePieChart, AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bgAccent absolute bottom-0 flex w-screen max-w-[1400px] justify-around gap-16 rounded-t-3xl p-2  text-black shadow-2xl shadow-black border-2 border-black border-b-0">
      <button className="flex flex-col items-center" onClick={() => navigate(`/`)}>
        <AiOutlineHome size="1.5rem" />
        Home
      </button>
      <div className="bg-mainColor absolute bottom-9 flex h-[3rem] w-[3rem] items-center justify-center   rounded-full  text-white shadow-md shadow-mainColor">
        <button onClick={() => navigate(`/transfer`)}>
          <AiOutlinePlus size="2rem" />
        </button>
      </div>

      <button className="flex flex-col items-center" onClick={() => navigate(`/budget`)}>
        <AiOutlinePieChart size="1.5rem" />
        Budget
      </button>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
