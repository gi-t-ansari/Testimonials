import React from "react";

const ProgressBar = ({ testimonial, setStartIndex, setEndIndex }) => {
  const handleProgress = () => {
    const arrOfTestimonial = testimonial?.split(" ");
  };
  return (
    <div className="w-full h-full bg-gray-300 rounded-md">
      <div className="h-full w-1/2 bg-[#520FB7] rounded-md"></div>
    </div>
  );
};

export default ProgressBar;
