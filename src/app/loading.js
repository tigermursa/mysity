import React from 'react';

const LoadingPage = () => {
    return (
        <div>
            <h1 className="text-8xl font-bold text-red-700 flex justify-center items-center h-screen bg-black">
        Loading...
        <span className="animated-emoji">🔍</span>
      </h1>
        </div>
    );
};

export default LoadingPage;