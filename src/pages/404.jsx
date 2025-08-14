import React from "react";
import comingsoon from "../assets/images/comingsoon.svg";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen   ">
      {/* img svg */}
      <img
        src={comingsoon}
        alt="ComingSoon Placeholder"
        className="mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover "
      />

      <h1 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
        ComingSoon
      </h1>
      <p className="text-lg">Coming Soon!</p>
      <p className="text-sm mt-2">Stay tuned for updates.</p>
    </div>
  );
};

export default ComingSoon;
