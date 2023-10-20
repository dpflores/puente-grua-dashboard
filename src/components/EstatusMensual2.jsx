import React from "react";
import HeatMapChart from "./charts/HeatMapChart";
import BarChart from "./charts/BarChart";
import HeatMapAntChart from "./charts/HeatMapAntChart";
import Box from "./shared/Box";

export default function EstatusMensual2() {
  return (
    <div className="grid grid-cols-2 w-full gap-4 p-4">
      <div className="col-span-1 flex flex-col gap-4">
        <Box>
          <HeatMapAntChart />
        </Box>

        <Box>
          <BarChart />
        </Box>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <Box>
          <HeatMapAntChart />
        </Box>

        <Box>
          <BarChart />
        </Box>
      </div>
    </div>
  );
}
