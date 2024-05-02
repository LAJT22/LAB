import React from 'react';

const Button = ({ children, outline, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        outline
          ? 'w-[75%] rounded-full  text-white outline outline-2 text-sm p-2 md:text-lg outline-white md:w-[15%]'
          : 'w-[75%] rounded-full bg-white text-black text-sm p-2 md:text-lg md:w-[15%]'
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
