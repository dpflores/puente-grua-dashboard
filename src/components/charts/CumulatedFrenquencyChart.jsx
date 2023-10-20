import React, { Fragment } from "react";

import Chart from "./highcharts/Chart";
// import Highcharts from 'highcharts'
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { ResponsiveContainer } from "recharts";

// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

const chartOptions = {
  chart: {
    type: "column",
    // height: (9/20 * 100) + '%'
  },

  title: {
    align: "center",
    text: " ",
  },
  // subtitle: {
  //     align: 'left',
  //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  // },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: "Porcentaje (%)",
    },
    min: 0,
    max: 100,
  },
  legend: {
    enabled: true,
  },

  exporting: {
    enabled: false,
  },

  credits: {
    enabled: false,
  },

  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}%",
      },
      states: {
        inactive: {
          opacity: 1,
        },
      },
      events: {
        legendItemClick: function () {
          return false;
        },
      },
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>',
  },

  series: [
    {
      name: "Frecuencia de uso",
      // colorByPoint: true,
      color: "rgb(14,18,113)",
      data: [
        {
          name: "ENE",
          y: 0,
          // drilldown: 'Chrome'
        },
        {
          name: "FEB",
          y: 10,
          // drilldown: 'Safari'
        },
        {
          name: "MAR",
          y: 20,
          // drilldown: 'Firefox'
        },
        {
          name: "ABR",
          y: 30,
          // drilldown: 'Edge'
        },
        {
          name: "MAY",
          y: 40,
          // drilldown: 'Opera'
        },
        {
          name: "JUN",
          y: 50,
          // drilldown: 'Internet Explorer'
        },
        {
          name: "JUL",
          y: 60,
          // drilldown: null
        },
        {
          name: "AGO",
          y: 70,
          // drilldown: null
        },
        {
          name: "SET",
          y: 80,
          // drilldown: null
        },
        {
          name: "OCT",
          y: 90,
          // drilldown: null
        },
        {
          name: "NOV",
          y: 70,
          // drilldown: null
        },
        {
          name: "DIC",
          y: 60,
          // drilldown: null
        },
      ],
    },

    {
      name: "Frecuencia Efectiva Actual de Uso",
      // colorByPoint: true,
      color: "rgb(0,148,206)",
      data: [
        {
          name: "ENE",
          y: 80,
          // drilldown: 'Chrome'
        },
        {
          name: "FEB",
          y: 70,
          // drilldown: 'Safari'
        },
        {
          name: "MAR",
          y: 60,
          // drilldown: 'Firefox'
        },
        {
          name: "ABR",
          y: 50,
          // drilldown: 'Edge'
        },
        {
          name: "MAY",
          y: 40,
          // drilldown: 'Opera'
        },
        {
          name: "JUN",
          y: 60,
          // drilldown: 'Internet Explorer'
        },
        {
          name: "JUL",
          y: 70,
          // drilldown: null
        },
        {
          name: "AGO",
          y: 50,
          // drilldown: null
        },
        {
          name: "SET",
          y: 10,
          // drilldown: null
        },
        {
          name: "OCT",
          y: 0,
          // drilldown: null
        },
        {
          name: "NOV",
          y: 60,
          // drilldown: null
        },
        {
          name: "DIC",
          y: 0,
          // drilldown: null
        },
      ],
    },
  ],
};
export default function CumulatedFrequencyChart() {
  return (
    <Fragment>
      <strong className="text-gray-700 font-medium">
        Frecuencia de uso mensual acumulado
      </strong>
      <div className=" mt-3 flex flex-1 text-xs ">
        <ResponsiveContainer>
          <Chart options={chartOptions} highcharts={Highcharts} />
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
}
