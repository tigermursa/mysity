import Sidebar from "@/Components/Sidebar/Sidebar";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 border">
      <Sidebar />
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
