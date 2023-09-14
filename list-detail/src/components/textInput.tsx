import React, {useState, useEffect} from 'react';

interface TextInputProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    placeholderText: string;
    validationRules: (value: string) => boolean;
    feedbackMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value, 
    onChange, 
    placeholderText,
    validationRules,
    feedbackMessage}) => {

    const [inputValue, setInputValue] = useState<string>(value);
    const [isValid, setIsvalid] = useState(true);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      console.log('New Value:', newValue);
      setInputValue(newValue)

      if (validationRules && !validationRules(newValue)) {
        setIsvalid(false);
      } else {
        setIsvalid(true);
        onChange(newValue);
      }
    };
    return(
      <>
        <label>{label}</label>
        <div className="input-group has-validation">
          <input
            className={`form-control ${isValid ? "is-valid": "is-invalid"}`}
            type="text"
            placeholder={placeholderText}
            onChange={(e) => handleInputChange(e)}
            value={inputValue}
            aria-invalid={!isValid}
          />
          {!isValid && <div className="feedback-message">{feedbackMessage}</div>}
        </div>
      </>
    );
};
export default TextInput;