import React from 'react';
import { RegisterFormWrapper } from '../components/RegisterFormWrapper/RegisterFormWrapper';

const RegisterFormContainer = () => {
  const validateFormValues = () => {};
  const handleSubmitForm = values => {};

  return (
    <RegisterFormWrapper
      validateFormValues={validateFormValues}
      handleSubmitForm={handleSubmitForm}
    />
  );
};

export { RegisterFormContainer };
