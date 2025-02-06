import React from "react";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
