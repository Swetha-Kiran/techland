import React, { useState } from "react";
import { BsCheckSquare } from "react-icons/bs";
import styling from "../../Styles/color.module.css";
const Comp4 = () => {
  // State to track the selected year
  const [selectedStage, setSelectedStage] = useState("Stage 1");

  // Function to handle year click
  const handleStageClick = (stage) => {
    setSelectedStage(stage);
  };

  return (
    <section className="flex px-4 mt-10 overflow-x-auto scrollbar-hide justify-center">
      {/* Column for 2022 */}
      <div
        className={`border-2 border-[#68BF7B] rounded-[24px] ${
          selectedStage === "Stage 1" ? "border-[#68BF7B]" : "border-none"
        }`}
        onClick={() => handleStageClick("Stage 1")}
      >
        <div className="relative flex flex-col gap-10 lg:w-[22vw] sm:w-[50vw]  w-[95vw]  items-center">
          <div className="text-3xl text-[#55565A] text-center relative top-5 font-bold">
            Stage 1
          </div>
          <div className="relative w-full h-[4vh]">
            <div className="w-6 h-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D3F7B7] rounded-full">
              {" "}
              <div className="w-3 h-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#68BF7B]  rounded-full"></div>
            </div>
            <div
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[4px]  bg-[#68BF7B]  ${styling.button}`}
            ></div>
            <div
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[4px]  bg-[#68BF7B]  ${styling.button}`}
            ></div>
          </div>

          <div className="relative lg:w-[20vw] w-[92vw] sm:w-[45vw] xl:h-[30vh] 2xl:h-[25vh]  overflow-y-auto scrollbar-hide  mb-3 text-[#058603]   font-extrabold flex flex-col justify-start rounded-[24px] py-4  lg:py-0 px-2 border-2 border-solid  bg-[#D3F7B7]">
          <div className="text-center py-3 space-y-3 px-3">
            <p>Assets</p>
            <ul className="list-disc text-left px-2 mt-4">
              <li>Actual Land</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`border-2 border-[#68BF7B] rounded-[24px] ${
          selectedStage === "Stage 2" ? "border-[#68BF7B]" : "border-none"
        }`}
        onClick={() => handleStageClick("Stage 2")}
      >
        <div className="relative flex flex-col gap-10 lg:w-[22vw] sm:w-[50vw] w-[95vw] items-center">
          <div className="text-3xl text-[#55565A] text-center relative top-5 font-bold">
            Stage 2
          </div>
          <div className="relative w-full h-[4vh]">
            <div
              className={`w-6 h-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#68BF7B] rounded-full  ${styling.button}`}
            ></div>
            <div
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[4px]  bg-[#68BF7B]  ${styling.button}`}
            ></div>
          </div>
          <div
            className={`relative lg:w-[20vw] w-[92vw] sm:w-[45vw] xl:h-[30vh] 2xl:h-[25vh]  overflow-y-auto scrollbar-hide  mb-3 text-white  font-extrabold flex flex-col justify-start rounded-[24px] py-4  lg:py-0 px-2 border-2 border-solid  bg-[#68BF7B] ${styling.button}`}
          >
            <div className="text-center py-3 space-y-3 px-3">
            <p>Assets</p>
            <ul className="list-disc text-left px-2 mt-4">
              <li>Actual Land</li>
              <li>Large Community</li>
              <li>Soil Sense</li>
              <li>Student Research hub</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`border-2 border-[#68BF7B] rounded-[24px] ${
          selectedStage === "Stage 3" ? "border-[#68BF7B]" : "border-none"
        }`}
        onClick={() => handleStageClick("Stage 3")}
      >
        <div className="relative flex flex-col gap-10 lg:w-[22vw] sm:w-[50vw] w-[95vw] items-center">
          <div className="text-3xl text-[#55565A] text-center relative top-5 font-bold">
            Stage 3
          </div>
          <div className="relative w-full h-[4vh]">
            <div
              className={`w-6 h-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#68BF7B] rounded-full  ${styling.button}`}
            ></div>
            <div
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[4px]  bg-[#68BF7B]  ${styling.button}`}
            ></div>
          </div>
          <div
            className={`relative lg:w-[20vw] w-[92vw] sm:w-[45vw] xl:h-[30vh] 2xl:h-[25vh]  overflow-y-auto scrollbar-hide  mb-3 text-white  font-extrabold flex flex-col justify-start rounded-[24px] py-4  lg:py-0 px-2 border-2 border-solid  bg-[#68BF7B] ${styling.button}`}
          >
            <div className="text-center py-3 space-y-3 px-3">
            <p>Assets</p>
            <ul className="list-disc text-left px-2 mt-4">
              <li>Actual Land</li>
              <li>Global Large Community</li>
              <li>Soil Sense (With Techverse)</li>
              <li>Organic Chef (Buy with TLT)</li>
              <li>Student Research hub</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comp4;
