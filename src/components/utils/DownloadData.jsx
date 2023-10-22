import React, { Fragment } from "react";
import DatePickerComponent from "../charts/components/DatePicker";
import { Button } from "antd";
import DownloadButton from "../charts/components/DownloadButton";


export default function DownloadData() {
    return (
        <Fragment>
          <div className="flex flex-row justify-between">
            <strong className="text-gray-700 font-medium">Descarga de data</strong>
          </div>
    
    
          <div className="flex flex-row justify-center gap-4">
            <div>
              <DatePickerComponent />
            </div>

            <DownloadButton />

    
            {/* <RefreshButton /> */}
          </div>
        </Fragment>
      );
}


