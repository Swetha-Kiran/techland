import React from "react";

const Webinar = () => {
    const webinarData = [
        {
          title: "Unlock your final future with TLT tokens",
          videoSrc: "https://www.youtube.com/embed/jPGuIYvLEdo?si=IbhXVQLmktrq3tJi",
          downloadLink: "https://www.youtube.com/embed/jPGuIYvLEdo?si=IbhXVQLmktrq3tJi",
        },
        {
          title: "Explore the Beauty of Our Land: A Complete Tour with Techland",
          videoSrc: "https://www.youtube.com/embed/67rBIohmW6k?si=fIRg4EaC_E3vC4TE",
          downloadLink: "https://www.youtube.com/embed/67rBIohmW6k?si=fIRg4EaC_E3vC4TE",
        },
        {
          title:
            "Discover the Power of Naturopathy and Yoga at Our Health Center Techland",
          videoSrc: "https://www.youtube.com/embed/DGPklVLUIIQ?si=lIQNVJZKw2jhA7-O",
          downloadLink: "https://www.youtube.com/embed/DGPklVLUIIQ?si=lIQNVJZKw2jhA7-O",
        },
        {
          title:
            "Make Memories That Last a Lifetime with Techland's Home Vacation Deals",
          videoSrc: "https://www.youtube.com/embed/QufzscwF2QY?si=-PbFpg5TJtw--0_6",
          downloadLink: "https://www.youtube.com/embed/QufzscwF2QY?si=-PbFpg5TJtw--0_6",
        },
        {
          title:
            "Experience the Future of Agriculture Investments with Techland: Invest in Our Land Through Our App",
          videoSrc: "https://www.youtube.com/embed/ONzFEQqXcfI?si=BlnVdG5ucTwb5gK4",
          downloadLink: "https://www.youtube.com/embed/ONzFEQqXcfI?si=BlnVdG5ucTwb5gK4",
        },
        {
          title:
            "Techland App Registration - Invest in TLT (Techland Tokens)",
          videoSrc: "https://www.youtube.com/embed/QgJsaTnx-CI?si=oQm1T2J-a0PDF9V1",
          downloadLink: "https://www.youtube.com/embed/QgJsaTnx-CI?si=oQm1T2J-a0PDF9V1",
        },
      ];

  const Card = ({ title, videoSrc,downloadLink  }) => (
    <div className=" border-2 shadow-md shadow-slate-500 py-3 hover:shadow-slate-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-[24px] md:mb-10">
      <div className=" p-0 flex flex-col gap-5 items-center text-center w-min rounded-[24px]">
        <h2 className=" text-base px-2 py-2 font-medium min-h-[90px] bg-ed-300">{title}</h2>
        <p className="font-medium text-sm w-80"></p>
        <figure className="px-5 rounded-lg overflow-hidden">
          <iframe
            src={videoSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowFullScreen"

            className="rounded-lg overflow-hidden shadow-md shadow-slate-400"
          ></iframe>
        </figure>
        <div className="flex justify-center items-center gap-4">
          <a
            href={downloadLink}
            className="flex justify-center items-center flex-col gap-2"
          >
            <button className="btn btn-secondary rounded-full bg-[#68BF7B] px-5 py-5">
              <svg
                stroke="white"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 384 512"
                className="w-4 h-4 aspect-square"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path>
              </svg>{" "}
            </button>
            <p className="text-sm font-medium">Download File</p>
          </a>
          <a
            href={downloadLink}
            className="flex justify-center items-center flex-col gap-2"
          >
            <button className="btn btn-secondary rounded-full bg-[#68BF7B] px-5 py-5">
              <svg
                stroke="white"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-4 h-4 aspect-square"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
              </svg>{" "}
            </button>
            <p className="text-sm font-medium">Share video</p>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="mx-auto py-10 space-y-14">
        <h1 className="text-4xl md:text-[54px] font-bold text-center text-[#2a2b39]">
          TechLand Webinar
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {webinarData.map((webinar, index) => (
            <Card key={index} title={webinar.title} videoSrc={webinar.videoSrc} downloadLink={webinar.downloadLink} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Webinar;
