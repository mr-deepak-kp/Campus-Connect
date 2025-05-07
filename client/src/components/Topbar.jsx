import React from 'react';

const Topbar = ({ name }) => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-800">
        Welcome, <span className="text-blue-600">{name.toUpperCase()}</span>
      </h2>
    </header>
  );
};

export default Topbar;