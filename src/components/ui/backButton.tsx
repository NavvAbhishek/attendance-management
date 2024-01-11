// BackButton.tsx
import React from 'react';
import { MdArrowBackIosNew } from "react-icons/md";

// Define a type for the component props
type BackButtonProps = {
  className?: string;
};

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  return (
    <button
      type="button"
      className={`absolute bg-light-blue hover:bg-dark-blue text-light-yellow px-2 py-1 rounded-md flex items-center justify-center sm:top-5 sm:left-7 left-4 top-3 hover-effect ${className}`}
    >
      <MdArrowBackIosNew className="w-[15px] h-[15px] transition-transform icon" />
      <h1 className="text-md transition-transform text">Back</h1>
    </button>
  );
};

export default BackButton;
