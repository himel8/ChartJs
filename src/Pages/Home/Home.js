import React, { useState } from "react";
import Chart from "../Chart/Chart";
import DataForm from "../DataForm/DataForm";

const Home = () => {
  const [inputData, setInputData] = useState([{ xData: "", yData: "" }]);
  return (
    <div>
      <h1 className="text-center text-3xl mt-5 mb-10 underline text-red-500">
        Welcome Graph Page
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-10">
        <DataForm inputData={inputData} setInputData={setInputData} />
        <Chart inputData={inputData} />
      </div>
    </div>
  );
};

export default Home;
