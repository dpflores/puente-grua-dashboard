import React from "react";
import FrenquencyChart from "./charts/FrenquencyChart";
import CumulatedFrenquencyChart from "./charts/CumulatedFrenquencyChart";
import BellChart from "./charts/BellChart";
import Box from "./shared/Box";
import DoubleBellChart from "./charts/DoubleBellChart";
export default function EstatusMensual1() {
  return (
    <div className="grid grid-cols-2 w-full gap-4 p-4">
      <div className="col-span-1 flex flex-col gap-4">
        <Box>
          <FrenquencyChart
            dataPath={"frequency"}
            chartName={"Frecuencia de uso mensual"}
            dataRate={5000}
          />
        </Box>

        <Box>
          <DoubleBellChart
            dataPath={"bell1"}
            chartName={"Gauss Chart 1"}
            dataRate={60000}
          />
        </Box>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <Box>
          <CumulatedFrenquencyChart
            dataPath={"cumulatedfrequency"}
            chartName={"Frecuencia de usoawwa acumulada"}
            dataRate={60000}
          />
        </Box>

        <Box>
          <DoubleBellChart
            dataPath={"bell2"}
            chartName={"Gauss Chart 2"}
            dataRate={60000}
          />
        </Box>
      </div>
    </div>
  );
}
