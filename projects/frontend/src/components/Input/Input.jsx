import React from 'react';

const Input = ({ type, placeholder, width, value, onChange, name, required }) => {
  return (
    <input
      className={` ${width} w-full border-b-2  border-b-black bg-transparent p-3 text-black placeholder:text-gray-400  `}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
};

Input.propTypes = {};

export default Input;
