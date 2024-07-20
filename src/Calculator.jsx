import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Functions for handling input change
  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

     // Validation function
  const validateInputs = () => {
    if (number1.trim() === '' || number2.trim() === '') {
      setErrorMessage('Both fields are required');
      return false;
    }
    if (!/^-?\d*\.?\d*$/.test(number1) || !/^-?\d*\.?\d*$/.test(number2)) {
      setErrorMessage('Please enter valid numbers');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Operation handling function
  const handleOperation = (operation) => {
    if (validateInputs()) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      switch (operation) {
        case '+':
          setResult(num1 + num2);
          break;
        case '-':
          setResult(num1 - num2);
          break;
        case '*':
          setResult(num1 * num2);
          break;
        case '/':
          if (num2 === 0) {
            setErrorMessage('Division by zero is not allowed');
            setResult('');
          } else {
            setResult(num1 / num2);
          }
          break;
        default:
          break;
      }
      setSuccessMessage('Operation successful');
    } else {
      setResult('');
      setSuccessMessage('');
    }
  };


  return (
    <div className="calculator">
      <input type="text" value={number1} onChange={handleNumber1Change} placeholder="Enter number 1" />
      <input type="text" value={number2} onChange={handleNumber2Change} placeholder="Enter number 2" />
      <br />
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleOperation('*')}>*</button>
      <button onClick={() => handleOperation('/')}>/</button>
      <br />
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}: {result}</div>}
    </div>
  );
};
export default Calculator
