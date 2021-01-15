import React from "react";
import { Chart, Bar } from "react-chartjs-2";
import { Main } from "../styled-components/ChartsStyled";

Chart.defaults.global.defaultFontColor = "white";
const dataChart = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "#414141",
      borderWidth: 2,
      data: [18, 26, 12, 13, 38, 2, 26, 58, 32, 12, 3, 0],
    },
  ],
};

export default function ChartComponent() {
  return (
    <Main>
      <Bar
        data={dataChart}
        options={{
          title: {
            display: true,
            text: "Job'offers consulted (2020)",
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </Main>
  );
}
