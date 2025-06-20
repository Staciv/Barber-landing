import { useState } from "react";

export function TextInput({
  value,
  onChange,
  placeholder,
  type,
  pattern,
  minLength,
  maxLength,
  require,
  icon,
  error,
}) {
  const [isValid, setIsValid] = useState("invisible");

  const handleInputChange = (event) => {
    if (event.target.validity.valid) {
      setIsValid("invisible");
    } else {
      setIsValid("block");
    }

    onChange(event.target.value);
  };

  return (
    <div className="w-full m-auto text-black tablet:w-2/3 mobile:w-3/4">
      <label className="input input-bordered bg-inputBg border-black flex items-center gap-2 tablet:text-sm">
        {icon}
        <input
          className="grow mobile:text-xs"
          type={type}
          placeholder={placeholder}
          value={value}
          pattern={pattern}
          require={require}
          minLength={minLength}
          maxLength={maxLength}
          onChange={handleInputChange}
        />
      </label>
      <p className={`text-xs mt-1 text-error ${isValid}`}>{error}</p>
    </div>
  );
}
