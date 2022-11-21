import { ResponsiveBar } from "@nivo/bar";
import React from "react";

type Props = {
  data: any;
};

export const SalesHistoryData = [
  {
    Month: "January",

    month: 2,
    donutColor: "hsl(310, 70%, 50%)",
  },
  {
    Month: "Februrary",

    month: 6,
    donutColor: "hsl(13, 70%, 50%)",
  },
  {
    Month: "March",

    month: 5,
    donutColor: "hsl(294, 70%, 50%)",
  },
  {
    Month: "April",

    month: 4,
    donutColor: "hsl(235, 70%, 50%)",
  },
  {
    Month: "May",

    month: 3,
    donutColor: "hsl(21, 70%, 50%)",
  },
  {
    Month: "June",

    month: 8,
    donutColor: "hsl(19, 70%, 50%)",
  },
  {
    Month: "July",

    month: 4,
    donutColor: "hsl(311, 70%, 50%)",
  },
  {
    Month: "August",

    month: 6,
    donutColor: "hsl(310, 70%, 50%)",
  },
  {
    Month: "September",

    month: 0,
    donutColor: "hsl(310, 70%, 50%)",
  },
  {
    Month: "October",

    month: 0,
    donutColor: "hsl(310, 70%, 50%)",
  },
  {
    Month: "November",

    month: 0,
    donutColor: "hsl(310, 70%, 50%)",
  },
  {
    Month: "December",

    month: 0,
    donutColor: "hsl(310, 70%, 50%)",
  },
];

const BarChart = ({ data }: Props) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "month"]}
      indexBy="Month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Sales",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
