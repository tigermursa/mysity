import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <div className="bg-slate-950 h-screen flex flex-col text-white justify-center items-center">
      <h1 className="font-mono text-7xl">
        Welcome to My<span className="text-cyan-400 font-serif">s</span>ity 😊
      </h1>
      <Link href={"/dashboard"}>
        <button className="mt-10 p-3 bg bg-gradient-to-r from-cyan-400 to-pink-600 rounded-xl font-semibold text-lg">
          Dashboard
        </button>
      </Link>
    </div>
  );
};

export default HeroPage;
