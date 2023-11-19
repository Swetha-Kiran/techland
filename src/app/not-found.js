import Link from "next/link";
import React from "react";
import {
  TbArrowLeft,
  TbArrowRight,
  TbBook,
  TbFileInfo,
  TbMessage2,
} from "react-icons/tb";
const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10  py-4">
      <h1 className="text-4xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4">404 - Error</h1>
        <h1 className="text-gray-600 lg:text-7xl md:text-5xl text-4xl mb-8">Page Not Found</h1>
        <p className="text-gray-600 lg:text-lg md:text-xl text-center mb-8 px-10 lg:px-0">
          We couldn’t find what you’re looking for in our website. Let’s find a
          better place for you to go.
        </p>

        <div className="mt-2 flex  justify-around lg:w-[20vw] ">
          <Link href="/" passHref>
            <button className="px-6 py-3  text-white bg-[#68BF7B] rounded-md focus:outline-none">
              Go to Home
            </button>
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col justify-between lg:w-[70vw] w-[82vw]   lg:space-x-10 mt-10">
          <div className="p-6 rounded-2xl bg-emerald-50 mb-10 lg:mb-0">
            <span className="text-gray-500">
              <TbFileInfo className="w-8 h-8" />
            </span>

            <h3 className="mt-6  font-medium text-gray-700">About TechLand</h3>

            <p className="mt-2 text-gray-500">Want to know more about us?</p>

            <Link
              href="/about"
              className="inline-flex items-center mt-4 text-sm text-emerald-500 gap-x-2 hover:underline"
            >
              <span>Know More</span>

              <TbArrowRight />
            </Link>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50 mb-10 lg:mb-0">
            <span className="text-gray-500">
              <TbBook className="w-8 h-8" />
            </span>

            <h3 className="mt-6 font-medium text-gray-700">Our blog & press</h3>

            <p className="mt-2 text-gray-500">
              Read the latest posts and photos.
            </p>

            <Link
              href="https://blog.tech-land.in/"
              target="_blank"
              className="inline-flex items-center mt-4 text-sm text-emerald-500 gap-x-2 hover:underline"
            >
              <span>Know More</span>

              <TbArrowRight />
            </Link>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50 ">
            <span className="text-gray-500">
              <TbMessage2 className="w-8 h-8" />
            </span>

            <h3 className="mt-6 font-medium text-gray-700">
              Want to talk with us?
            </h3>

            <p className="mt-2 text-gray-500">
              Can’t find what you’re looking for?
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center mt-4 text-sm text-emerald-500 gap-x-2 hover:underline"
            >
              <span>Know More</span>

              <TbArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
