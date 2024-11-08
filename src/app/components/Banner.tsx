
import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <div className="relative h-full w-full">
          <Image
            src="/flying.jpg"
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          We believe in crafting the perfect burger experience just for you. Pair your meal with our crispy fries and refreshing drink for the ultimate feast.
        </p>
        <button
          type="button"
          className="bg-blue-500 text-white text-sm font-semibold py-3 px-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Exciting Deals Launch at 12pm
        </button>
      </div>
    </div>
  );
}
