import React from "react";

const CardSkeleton = ({ number = 1 }) => {
  const arr = new Array(number).fill(0);
  return (
    <>
      {arr.map((_, i) => (
        <div role="status" class="max-w-sm animate-pulse" key={i}>
          <div class="h-20 w-96 bg-gray-200  dark:bg-gray-700  mb-4"></div>
          <span class="sr-only">Loading...</span>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;
