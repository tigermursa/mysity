import React from "react";

const NotFoundPage = () => {
  const animatedEmojiStyle = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }

    .animated-emoji {
      animation: bounce 1s infinite;
    }
  `;

  return (
    <div>
      <style>{animatedEmojiStyle}</style>
      <h1 className="text-8xl font-bold text-red-700 flex justify-center items-center h-screen bg-black">
        404
        <span className="animated-emoji">🔍</span>
      </h1>
      
    </div>
  );
};

export default NotFoundPage;
