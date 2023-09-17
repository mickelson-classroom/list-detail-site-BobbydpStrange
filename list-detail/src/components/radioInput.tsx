import React from 'react';

interface RadioInputProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, value, onChange }) => {
  const handleInputChange = () => {
     onChange(!value);
  };

  return (
    <div className='form-check'>
      <input
        type="radio"
        name={label}
        className="form-check-input"
        checked={value}
        onChange={handleInputChange}
      />
      <label className="form-ceck-label">{label}</label>
      
    </div>
  );
};

export default RadioInput;
