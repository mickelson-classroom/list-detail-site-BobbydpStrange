import React, {useState, useEffect} from 'react';

interface SelectInputProps {
    label: string;
    value: string;
    options: string[];
    onChange: (newValue: string ) => void;
    ref?: React.RefObject<HTMLSelectElement>;
}

const SelectInput = ({
    label,
    value, 
    options,
    onChange, 
}: SelectInputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const [feedbackMessage, setFeedBackMessage] = useState('');

    const handleInputChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value as string;
      setInputValue(newValue);
      onChange(newValue);
    };

    useEffect(() => {
      const isValidValue = inputValue !== '';
      setIsValid(isValidValue);
      setFeedBackMessage(isValidValue ? '': 'Please choose an option.');
    }, [inputValue]);
return(
<>
<label>{label}</label>
  <div className="input-group has-validation">
  <select 
      className={`form-control ${isValid ? "is-valid": "is-invalid"}`}
      aria-invalid={!isValid}
      onChange={(e) => handleInputChange(e)}
      value={inputValue}
      >
      <option selected disabled value="">Choose...</option>
      {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
      ))}
  </select>
  {!isValid && <div className="invalid-feedback feedback-message">{feedbackMessage}</div>}
  </div>
</>
);
};
export default SelectInput;