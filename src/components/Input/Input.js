import React from 'react';
import './Input.scss';

const Input = ({ input, meta, label, options, placeholder }) => {
  const renderInput = param => {
    switch (param) {
      case 'text':
        return <input {...input} placeholder={placeholder} className="input__field" />;
      case 'password':
        return <input {...input} className="input__field" />;
      case 'email':
        return <input {...input} className="input__field" />;
      case 'select':
        return (
          <select {...input} className="input__field">
            {options.map(option => (
              <option key={option.type} value={option.type}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return <textarea {...input} className="input__field" />;
      default:
        break;
    }
  };

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      {renderInput(input.type)}
      {meta.error && meta.touched && <span className="input__error">{meta.error}</span>}
    </div>
  );
};

export default Input;
