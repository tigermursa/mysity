import React from "react";
import getAllData from "../../../libs/getAllData";

const DisplayData = async () => {
  const websiteData = await getAllData();
  const { sites } = websiteData;
  console.log(sites);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {sites.map((data) => (
        <div
          key={data._id}
          className="max-w-xs bg-white shadow-md rounded-md overflow-hidden"
        >
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{data.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
