import React from "react";

const Comp_3 = () => {
  return (
    <>
      <section className="bg-re-300 w-[84vw] mx-auto mt-8 md:mt-32 py-6 space-y-9">
        <section className="bg-blu-300 space-y-9">
          <h3 className="text-4xl font-extrabold text-[#333333] text-center">
            What we do
          </h3>
          <div className="space-y-6 text-justify">
            <p className="text-lg font-normal text-[#6b6b80]">
            Experience a new era of investment possibilities at TechLand. Our meticulously crafted choices like Major Land and Mega Land suit every ambition. Rooted in transparency and sustainable progress, we unlock pathways to rewarding investments
            </p>
            <p className="text-lg font-normal text-[#6b6b80]">
            Our mission is to elevate lives by delivering extraordinary value, empowering investors to architect their financial destiny

            </p>
            <p className="text-lg font-normal text-[#6b6b80]">
            Embrace this transformative journey toward unrivalled investment triumph with us
            </p>
          </div>
        </section>

        <section className="bg-yello-300 h-[80vh] md:h-[25vh] flex flex-col md:flex-row  justify-between">
          <div className="bg-gree-300  md:w-[25vw] h-full flex flex-col justify-around mb-8 px-4 shadow-[0_2px_3px_0_rgba(0,0,0,0.5)] rounded-[24px]">
            <h6 className="text-base font-medium text-[#23252e]">
            Land Investment Opportunities
            </h6>
            <div className="h-[10vh]">
              <p className="text-sm font-normal text-[#5e5e5e]">
              Explore diverse land investments for short, mid, and long-term growth strategies

              </p>
            </div>
          </div>
          <div className="bg-gree-300 md:w-[25vw] h-full flex flex-col justify-around px-4 mb-8 shadow-[0_2px_3px_0_rgba(0,0,0,0.5)] rounded-[24px]">
            <h6 className="text-base font-medium text-[#23252e]">
            Innovative Investment Structures
            </h6>
            <div className="h-[10vh]">
              <p className="text-sm font-normal text-[#5e5e5e]">
              Unveiling imaginative pathways to digital investments for enduring profitability
              </p>
            </div>
          </div>
          <div className="bg-gree-300 md:w-[25vw] h-full flex flex-col justify-around px-4 shadow-[0_2px_3px_0_rgba(0,0,0,0.5)] rounded-[24px]">
            <h6 className="text-base font-medium text-[#23252e]">
              Techland Platform Services
            </h6>
            <div className="h-[10vh]">
              <p className="text-sm font-normal text-[#5e5e5e]">
                End-to-end solution for large investors to build or scale their
                portfolios
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Comp_3;