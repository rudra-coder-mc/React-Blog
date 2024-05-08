import React from "react";

function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 bg-slate-200 dark:bg-black dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
