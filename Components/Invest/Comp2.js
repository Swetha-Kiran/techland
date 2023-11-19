import Image from "next/image";
import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ packages }) => {
  // console.log(packages);

  return (
    <section className="bg-re-300">
      <div className="rounded-lg">
        {packages.length === 0 ? (
          <p className="font-bold text-4xl text-center mt-5">No packages found</p>
        ) : (
          <table className="w-[80vw] mx-auto mt-10">
            <thead>
              <tr className="">
                <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                  Land Type (5/5)
                </th>
                <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                  Plan
                </th>
                <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                  Amount(TLT)
                </th>
                <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                  Annual Percentage Rate
                </th>
                <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                  Time (months)
                </th>
                <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                  Expected Returns(TLT)
                </th>
                <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                  Risks
                </th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {packages.map((item, index) => (
                <tr key={index}>
                  <Comp3 item={item} />
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Comp2;
