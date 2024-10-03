import React, { useRef } from "react";
import { CDN_URL_FOR_CUISINES } from "../utils/constants";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Cuisines = ({ cuisinesObj }) => {
  const { title } = cuisinesObj?.header;
  const listOfCuisines = cuisinesObj?.gridElements?.infoWithStyle?.info;

  // Reference to the scrollable div
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -500, // Adjust the value to control scroll distance (Move left by 200 pixels)
      behavior: "smooth",
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 500, // Adjust the value to control scroll distance (Move right by 200 pixels)
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <div>
          <button
            onClick={scrollLeft}
            className="mr-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden whitespace-nowrap space-x-4 py-2"
      >
        {listOfCuisines.map((cuisine) => (
          <img
            key={cuisine?.imageId}
            src={CDN_URL_FOR_CUISINES + cuisine?.imageId}
            alt={cuisine?.accessibility.altText}
            className="w-[149px] my-2 mr-1 hover:cursor-pointer"
          />
        ))}
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Cuisines;
