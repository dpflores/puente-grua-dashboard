import React from "react";
import DeviceDescription from "./utils/DeviceDescription";
import DeviceDraw from "./utils/DeviceDraw";
import Box from "./shared/Box";

export default function EstatusSistema() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 ">
      <div className="flex flex-row gap-4 w-full">
        <Box flex={2}>
          <DeviceDescription
            chartName={"Descripción del sistema"}
            dataPath={"status-desc"}
            dataRate={5000}
          />
        </Box>

        <Box>
          <DeviceDraw
            chartName={"Vista Puente Grúa"}
            dataPath={"status-draw"}
            dataRate={1000}
          />
        </Box>
      </div>
    </div>
  );
}
