import React from "react";
import { ResponsiveContainer } from "recharts";

import { Heatmap } from "@ant-design/plots";

import { useState } from "react";
import { useEffect } from "react";
import DatePickerComponent from "./components/DatePicker";
import RefreshButton from "./components/RefreshButton";
import layoutImage from "../images/layout.jpg";
import { getHostPath } from "../../utils/host";

export default function HeatMapAntChart({
  chartName,
  dataPath,
  dataRate = 10000,
}) {
  const DemoHeatmap = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //   asyncFetch();
    // }, []);

    useEffect(() => {
      // Llamar a asyncFetch inmediatamente al cargar el componente.
      asyncFetch();
    }, [dataPath]);

    const asyncFetch = () => {
      fetch(getHostPath(dataPath))
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
      xAxis: {
        min: 0,
        max: 75,
      },
      yAxis: {
        min: 0,
        max: 38,
      },

      type: "density",
      xField: "g",
      yField: "l",
      colorField: "tmp",
      // color:
      //   "#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2",
      color:
        "#6E32C2-#1890FF-#12CCCC-#80FF73  -#FAFFA8-#FFC838-#FF8C12-#FA541C-#F51D27",
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
          src: layoutImage,
        },
      ],
    };

    return <Heatmap {...config} />;
  };
  return (
    <div>
      <strong className="text-gray-700 font-medium">{chartName}</strong>
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
