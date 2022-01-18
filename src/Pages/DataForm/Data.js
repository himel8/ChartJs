import React from "react";

const Data = ({ handleData, i }) => {
  return (
    <div className="flex items-center justify-center gap-x-6">
      <label className="">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          X
        </span>
        <input
          type="number"
          name="xData"
          onChange={(e) => handleData(e, i)}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="type x-axis value"
        />
      </label>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Y
        </span>
        <input
          type="number"
          name="yData"
          onChange={(e) => handleData(e, i)}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="type y-axis value"
        />
      </label>
    </div>
  );
};

export default Data;
