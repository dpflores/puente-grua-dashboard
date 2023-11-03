import React from "react";
import RealTimeChart from "./charts/RealTimeChart";
import Box from "./shared/Box";
import DownloadData from "./utils/DownloadData";

export default function EstatusOperacion() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 ">
      {/* <DashboardStatsGrid/> */}

      <div className="flex flex-row gap-4 w-full">
        <Box>
          <RealTimeChart
            chartName={"Monitoreo general de condiciones"}
            dataPath={"realtime"}
            dataRate={1000}
          />
        </Box>

        {/* <BuyerProfileChart/> */}
      </div>

      <div className="flex flex-row gap-4 w-full">
        <Box>
          <DownloadData dataPath={"download"} />
        </Box>

        {/* <RecentOrders />
        <PopularProducts /> */}
      </div>
    </div>
  );
}
