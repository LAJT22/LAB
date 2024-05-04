import React from 'react';

const Button = ({ children, outline, onClick, type, width }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        outline
          ? `${width}  outline-mainColor rounded-full p-2 text-sm text-black outline outline-2  md:text-lg`
          : `${width} bg-mainColor rounded-full p-2 text-sm text-white  md:text-lg`
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
