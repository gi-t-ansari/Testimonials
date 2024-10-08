import React, { useEffect, useState } from "react";
import { Header, TestimonialCard } from "../components";
import { API_URL } from "../config";
import axios from "axios";

const Home = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(1);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(API_URL);
      // console.log("Data", res?.data);
      setTestimonialsData(res?.data);
    } catch {
      alert("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-[8%]">
        <Header />
      </div>
      <div className="w-full min-h-[92%] bg-[#f4f3ff] flex justify-center pt-8 px-4">
        {testimonialsData ? (
          testimonialsData
            ?.slice(startIndex, endIndex)
            .map((item) => (
              <TestimonialCard
                totalTestimonial={testimonialsData?.length}
                endIndex={endIndex}
                setStartIndex={setStartIndex}
                setEndIndex={setEndIndex}
                key={item?.name}
                cardData={item}
              />
            ))
        ) : (
          <div className="md:h-16 md-w-16 rounded-full">
            Loading Testimonial.....
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
