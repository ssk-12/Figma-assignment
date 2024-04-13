import React from 'react';

type InputFieldProps = {
  type: string;
  placeholder?: string;
  label?: string; 
  id?: string;  
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  MclassName?: string;
  value: string;
  icon?: JSX.Element;
  onIconClick?: () => void;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  label,
  id,
  onChange,
  MclassName,
  className,
  value,
  icon,
  onIconClick
}) => {
  return (
    <div className="relative mt-1 flex-wrap">
      {label && id && (
        <label htmlFor={id} className=" text-sm font-medium text-[#14213d]">
          {label}
        </label>
      )}
      <div className={`flex items-center flex-wrap relative ${className}`}>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          className={`flex-1 p-2 ${className}`}
          value={value}
          style={{ paddingRight: icon ? '2.5rem' : undefined }}
        />
        {icon && (
          <div onClick={onIconClick} className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
