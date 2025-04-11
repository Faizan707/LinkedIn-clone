import React from 'react';
import { FaPlus } from "react-icons/fa";

function BusinessOptions() {
  return (
    <div className="    w-auto mt-10 absolute left-[-218px] bg-white shadow-lg rounded-xl p-6 ">
      <h1 className="font-black text-xl text-gray-800 mb-2">
        Explore More Business Opportunities
      </h1>
      <p className="text-black  mb-4 hover:underline decoration-blue-500 cursor-pointer">Post a job for free and start hiring today.</p>

      <div className="flex items-center gap-2  p-3 rounded-lg  cursor-pointer">
        <p className="font-bold text-lg text-black">Create a Company Page</p>
        <FaPlus className="text-black" />
      </div>
    </div>
  );
}

export default BusinessOptions;
