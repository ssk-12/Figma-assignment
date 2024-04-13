import React from 'react';


type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: Option[];
  placeholder?: string;
  label?: string;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value: string;
  icon?: JSX.Element;
  onIconClick?: () => void;
};

const SelectField: React.FC<SelectFieldProps> = ({
  options,
  placeholder,
  label,
  id,
  onChange,
  className,
  value,
  icon,
  onIconClick
}) => {
  return (
    <div className={`relative mt-1`}>
      {label && id && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-[#14213d]">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <select
          id={id}
          onChange={onChange}
          className={`flex-1 p-2 text-gray-500 appearance-none  ${className}`}
          value={value}
          style={{ paddingRight: icon ? '2.5rem' : '1rem' }} 
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {icon && (
          <div onClick={onIconClick} className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
