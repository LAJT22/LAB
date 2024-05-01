import React from 'react';

const Input = ({ type, placeholder }) => {
  return (
    <input
      className="border-b-2 border-b-white bg-transparent placeholder:text-gray-400 p-3 w-[75%]"
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {};

export default Input;
