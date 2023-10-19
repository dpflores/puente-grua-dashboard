import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import RealTimeChart from "./charts/RealTimeChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";




export default function EstatusOperacion() {
    return (
        <div className="flex flex-col gap-4 px-4 py-4 ">
            {/* <DashboardStatsGrid/> */}
            
            <div className="flex flex-row gap-4 w-full">
            <RealTimeChart/>
            {/* <BuyerProfileChart/> */}
            </div>

            <div className="flex flex-row gap-4 w-full">
                <RecentOrders/>
                <PopularProducts/>
            </div>
            
        </div>
    )
}