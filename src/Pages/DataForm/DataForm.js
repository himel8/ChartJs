import React from "react";
import Data from "./Data";

const DataForm = ({ inputData, setInputData }) => {
  const handleData = (e, index) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = [...inputData];
    newData[index][field] = value;

    setInputData(newData);
    console.log([newData]);
  };
  const handleAddItem = () => {
    setInputData([...inputData, { xData: "", yData: "" }]);
  };
  return (
    <div className="w-full mx-auto">
      <form>
        {inputData?.map((item, i) => (
          <Data key={i} handleData={handleData} i={i} />
        ))}
      </form>
      <button
        onClick={handleAddItem}
        className="mt-8 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Add Field
      </button>
    </div>
  );
};

export default DataForm;
