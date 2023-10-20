import React from "react";

export default function Box({ children }) {
  return (
    <div className="bg-white p-4 rounded-sm border border-solid border-gray-200 flex flex-col flex-1">
      {children}
    </div>
  );
}
