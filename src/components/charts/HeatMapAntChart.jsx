import React, { Fragment } from "react";
import { ResponsiveContainer } from "recharts";
import heatImg from "../images/backstretch.jpg";

import { Heatmap } from "@ant-design/plots";

import { useState } from "react";
import { useEffect } from "react";
import DatePickerComponent from "./components/DatePicker";
import RefreshButton from "./components/RefreshButton";
const DemoHeatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/heatmap.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    //   label: {
    //     fill: 'black',
    //   },
    // xAxis:{label: {
    //     style : {
    //         fill: '#000',

    //         }
    //     },
    // },

    // yAxis:{label: {
    //     style : {
    //         fill: '#000',

    //         }
    //     },
    // },

    type: "density",
    xField: "g",
    yField: "l",
    colorField: "tmp",
    color:
      "#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2",
    legend: {
      // label: {
      //     style : {
      //         fill: '#000',

      //     }
      // },border-solid
      position: "bottom",
      rail: {
        // type:"size",
      },
    },
    annotations: [
      {
        type: "image",
        start: ["min", "max"],
        end: ["max", "min"],
        src: "https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png",
      },
    ],
  };

  return <Heatmap {...config} />;
};

export default function HeatMapAntChart() {
  return (
    <div>
      <strong className="text-gray-700 font-medium">Mapa de calor</strong>
      <div className="mt-3 flex flex-1 text-xs">
        <ResponsiveContainer>
          <DemoHeatmap />
        </ResponsiveContainer>
      </div>

      <div className="flex flex-row justify-center gap-4">
        <div>
          <DatePickerComponent />
        </div>

        <RefreshButton />
      </div>
    </div>
  );
}
