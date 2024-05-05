import React from "react";

function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4 bg-white dark:bg-black dark:text-white">{children}</div>;
}

export default Container;
