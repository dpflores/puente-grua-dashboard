import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import RealTimeChart from "./charts/RealTimeChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

import DeviceDescription from "./utils/DeviceDescription";
import DeviceDraw from "./utils/DeviceDraw";


export default function EstatusSistema() {
    return (
        <div className="flex flex-col gap-4 px-4 py-4 ">
            
            <div className="flex flex-row gap-4 w-full">
                <DeviceDescription />
                <DeviceDraw />
            </div>
            
        </div>
    )
}