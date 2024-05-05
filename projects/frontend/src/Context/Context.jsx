import React, { useState } from 'react';


const initialFormState = {
  transferName: '',
  amount: '',
  transactionType: '',
  option: '',
};

export const FormContext = React.createContext({
  formValues: [],
  handleSubmit: () => {},
  handleInputChange: () => {},
});

const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialFormState);

  const createHandleSubmit = (navigate) => (e) => {
    e.preventDefault();
    navigate('/')
    console.log('dziala');
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormContext.Provider
      value={{
        formValues,
        createHandleSubmit,
        handleInputChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
