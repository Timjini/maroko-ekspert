import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] via-[#fbe4c1] to-[#f6c68a] bg-opacity-50">
      <div className="flex flex-col items-center">
        {/* Spinning circle */}
        <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Optional loading text */}
        <p className="mt-3 text-white font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;