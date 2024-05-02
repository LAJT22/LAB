import React from 'react';

const Input = ({ type, placeholder, width }) => {
  return (
    <input
      className={` ${width} w-full border-b-2 border-b-white bg-transparent p-3 text-white placeholder:text-gray-400  `}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {};

export default Input;
