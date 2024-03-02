import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
        Loading...
        <span className="animated-emoji">🔍</span>
      </h1>
    </div>
  );
};

export default LoadingPage;
