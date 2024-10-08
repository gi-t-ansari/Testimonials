import React, { useEffect, useState } from "react";

const ProgressBar = ({
  testimonial,
  setStartIndex,
  setEndIndex,
  totalTestimonial,
  endIndex,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const arrOfTestimonial = testimonial?.split(" ");
    const lengthOfWords = arrOfTestimonial?.length;

    const totalTime = 250 * lengthOfWords; // Total time to read the testimonial (in ms)
    const progressIntervalTime = totalTime / 100; // Time to update 1% of progress

    // Start interval to update the progress bar
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, progressIntervalTime);

    // Start interval to update the testimonial after reading is complete
    const testimonialInterval = setTimeout(() => {
      if (endIndex >= totalTestimonial) {
        setStartIndex(0);
        setEndIndex(1);
      } else {
        setStartIndex((prev) => prev + 1);
        setEndIndex((prev) => prev + 1);
      }

      setProgress(0); // Reset progress for next testimonial
    }, totalTime);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(testimonialInterval); // Clear both intervals on unmount
    };
  }, [testimonial, setStartIndex, setEndIndex]);

  return (
    <div className="w-full h-full bg-gray-300 rounded-md">
      <div
        className="h-full bg-[#520FB7] rounded-md transition-all duration-[200ms]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
