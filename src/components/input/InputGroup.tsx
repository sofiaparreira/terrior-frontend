import React, { ChangeEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputGroupProp {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}

const InputGroup: React.FC<InputGroupProp> = ({ label, onChange, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        <input
          className="border border-gray-200 rounded-md outline-none px-4 py-2 md:text-sm text-base w-full pr-10"
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputGroup;