import React from 'react';

const Label = ({ children, htmlFor }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

Label.propTypes = {};

export default Label;
