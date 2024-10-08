import React from "react";
import { ProgressBar } from "../ProgressBar";

const TestimonialCard = ({
  cardData,
  setStartIndex,
  setEndIndex,
  totalTestimonial,
  endIndex,
}) => {
  return (
    <div className="md:w-[862px] w-[392px] h-fit bg-white rounded-xl md:py-14 md:px-10 py-10 px-5 shadow-lg">
      <div className="w-full md:h-1.5 h-1">
        <ProgressBar
          totalTestimonial={totalTestimonial}
          endIndex={endIndex}
          setStartIndex={setStartIndex}
          setEndIndex={setEndIndex}
          testimonial={cardData?.testimonial}
        />
      </div>
      <div className="md:mt-8 mt-4 flex md:flex-col flex-col-reverse md:gap-y-8 gap-y-4">
        <p className="text-center text-xl">{cardData?.testimonial}</p>
        <div className="flex md:flex-row flex-col-reverse md:justify-end items-center">
          <div className="flex flex-col md:items-end items-center ">
            <h3 className="text-2xl font-bold">{cardData?.name}</h3>
            <p className="opacity-60">{cardData?.profession}</p>
          </div>
          <div className="w-14 h-14 rounded-full bg-gray-300 ml-3"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
