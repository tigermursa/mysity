import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-blue-950 p-4 lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto">
      <nav>
        <ul className="flex flex-col">
          <Link className="text-white font-semibold mb-3" href={"/"}>
            Home
          </Link>
          <Link className="text-white font-semibold mb-3" href={"/dashboard/development"}>
            Development
          </Link>
          <Link className="text-white font-semibold mb-3" href={"/dashboard/ui"}>
            UI
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
