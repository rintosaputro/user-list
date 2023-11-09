import React, { FC } from "react";

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className={`flex flex-col gap-2 mb-6w-full`}>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded border-2 border-gray-400 border-solid px-4 py-1 w-full`}
      />
    </div>
  );
};

export default TextField;
