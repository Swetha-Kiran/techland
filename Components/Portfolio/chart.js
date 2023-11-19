"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [isHovered, setIsHovered] = useState(false);

  const chartData = {
    series: [200, 600, 200],
    options: {
      chart: {
        type: "donut",
        height: 20,
        width: "100%",
        offsetX: 0,
      },
      labels: ["Micro land", "Mini land", "Medium land"], // Update labels as needed
      colors: ["#428358", "#68BF7B", "#F4B266"],
      legend: {
        show: false,
        offsetY: 30,
        formatter: function (seriesName, opts) {
          const totals = opts.w.globals.seriesTotals;
          const percentage =
            (
              (totals[opts.seriesIndex] / totals.reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(0) + "%";
          return `<span style='color: #6E737F; font-weight: normal ;font-size: 15px;'>${seriesName}: ${percentage}</span>`;
        },
      },
      dataLabels: {
        enabled: isHovered,
      },
      tooltip: { enabled: false },
      fill: { colors: ["#428358", "#68BF7B", "#F4B266"] },
      states: {
        hover: { filter: { type: "darken", value: 0.5 } },
        active: { filter: { type: "none", value: 0 } },
      },
      stroke: { width: 0 },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "58%",
            labels: {
              show: false,
              name: { show: false },
              total: {
                show: true,
                showAlways: true,
                formatter: function (w) {
                  const totals = w.globals.seriesTotals;
                  const result = totals.reduce((a, b) => a + b, 0);
                  return ((result / 1000) * 100).toFixed(2) + "%"; // Calculate total percentage
                },
              },
            },
          },
        },
      },
    },
  };

  return (
    <div
      className="lg:w-[15vw]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
    </div>
  );
};

export default Chart;
