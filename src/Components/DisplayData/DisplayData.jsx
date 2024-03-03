import React from "react";
import getAllData from "../../../libs/getAllData";

const DisplayData = async () => {
  const websiteData = await getAllData();
  const { sites } = websiteData;
  console.log(sites);
  return (
    <div>
      <div>
        {sites.map(data => <li key={data._id}>{data.name}</li>)}
      </div>
    </div>
  );
};

export default DisplayData;
