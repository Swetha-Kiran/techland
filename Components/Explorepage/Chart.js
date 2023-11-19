"use client";
import React from "react";
import Chart from "react-apexcharts";
const data = {
  series: [
    {
      name: "Arrival",
      data: [500,390,310,150,120,450],
    },
    {
      name: "Spending",
      data: [200,120,420,250,180,270],
    },
    
  ],
  
  options: {
    chart: {
      type: "bar",
      height: 350,
      
      toolbar: {
        show: false,
        
      }
    },
    colors: ['#2B5743','#68BF7B'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        
      ],
    },
    yaxis: {
      title: {
        text: "TLT",
      },
    },
    
    fill: {
      opacity: 1,
      colors: ['#2B5743','#68BF7B'],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      
      },
      
    tooltip: {
      y: {
        formatter: function (val) {
          return "TLT" + val;
        },
      },
    },
  },
};
function ApexColumnBarChart() {
  return (
    <div className="lg:w-[40vw] w-[92vw] ">
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={350}
      />
    </div>
  );
}
export default ApexColumnBarChart;