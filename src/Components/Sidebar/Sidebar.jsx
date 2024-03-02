"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
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
  FaPlus,
} from "react-icons/fa6";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-blue-950 p-4 lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto">
      <nav>
        <ul className="flex flex-col text-gray-500 font-bold font-mono e">
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/" ? "text-white" : "text-gray-500"
            } `}
            href={"/"}
          >
            <FaHouseChimneyWindow /> Home
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/development"
                ? "text-white"
                : "text-gray-500"
            } `}
            href={"/dashboard/development"}
          >
            <FaWhmcs />
            Development
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/ui" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/ui"}
          >
            <FaWandSparkles />
            UI/UX
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/learn" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/learn"}
          >
            <FaUserGraduate /> Learning
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/ai" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/ai"}
          >
            <FaGithubAlt />
            AI
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/github" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/github"}
          >
            <FaSquareGithub />
            GitHub
          </Link>

          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/news" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/news"}
          >
            <FaGlobe /> News
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/google" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/google"}
          >
            <FaGoogle />
            Google
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/resume" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/resume"}
          >
            <FaIdCard />
            Resume
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/search" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/search"}
          >
            <FaSistrix /> Search Engines
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/others" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/others"}
          >
            <FaTag /> Others
          </Link>
          <Link
            className={`mb-3 hover:text-white flex items-center gap-2 link ${
              pathname === "/dashboard/others" ? "text-white" : "text-gray-500"
            } `}
            href={"/dashboard/add"}
          >
            <FaPlus /> Add website
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
