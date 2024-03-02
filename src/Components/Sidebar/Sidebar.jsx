import Link from "next/link";
import React from "react";
import {
  FaHouseChimneyWindow,
  FaWhmcs,
  FaWandSparkles,
  FaUserGraduate,
  FaSquareGithub,
  FaGlobe,
  FaGoogle,
  FaIdCard,
  FaSistrix,
  FaTag,
  FaGithubAlt,
} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="bg-blue-950 p-4 lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto">
      <nav>
        <ul className="flex flex-col text-gray-500 font-bold font-mono e">
          <Link
            className="  mb-3 hover:text-white flex items-center gap-2"
            href={"/"}
          >
            <FaHouseChimneyWindow /> Home
          </Link>
          <Link
            className="hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/development"}
          >
            <FaWhmcs />
            Development
          </Link>
          <Link
            className="hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/ui"}
          >
            <FaWandSparkles />
            UI/UX
          </Link>
          <Link
            className="  hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/learn"}
          >
            <FaUserGraduate /> Learning
          </Link>
          <Link
            className="  hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/ai"}
          >
            <FaGithubAlt />
            AI
          </Link>
          <Link
            className=" hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/github"}
          >
            <FaSquareGithub />
            GitHub
          </Link>

          <Link
            className=" hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/news"}
          >
            <FaGlobe /> News
          </Link>
          <Link
            className=" hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/google"}
          >
            <FaGoogle />
            Google
          </Link>
          <Link
            className="  hover:text-white  mb-3 truncate flex items-center gap-2"
            href={"/dashboard/resume"}
          >
            <FaIdCard />
            Resume
          </Link>
          <Link
            className=" hover:text-white  mb-3 truncate flex items-center gap-2 "
            href={"/dashboard/search"}
          >
            <FaSistrix /> Search Engines
          </Link>
          <Link
            className=" hover:text-white  mb-3 truncate flex items-center gap-2 "
            href={"/dashboard/others"}
          >
            <FaTag /> Others
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
