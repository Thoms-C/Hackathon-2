import React from "react";
import { Main } from "../styled-components/ChartsStyled";
import { Line } from "react-chartjs-2";

const dataChart = {
  labels: [
    "Java",
    "Python",
    "React",
    "Angular",
    "VueJS",
    "Ruby",
    "SQL",
    "NodeJS",
    "PHP"
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "#414141",
      borderWidth: 2,
      data: [18, 26, 12, 13, 38, 2, 26, 58, 32, 12, 3, 0],
    },
  ],
};

export default function Chart() {
  return (
    <Main>
      <Line
        data={dataChart}
        options={{
          title: {
            display: true,
            text: "Most popular languages (2020)",
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
