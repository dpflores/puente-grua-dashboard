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
          <FrenquencyChart />
        </Box>

        <Box>
          <DoubleBellChart dataPath={"bell1"} chartName={"Gauss Chart 1"} />
        </Box>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <Box>
          <CumulatedFrenquencyChart />
        </Box>

        <Box>
          <DoubleBellChart dataPath={"bell2"} chartName={"Gauss Chart 2"} />
        </Box>
      </div>
    </div>
  );
}
