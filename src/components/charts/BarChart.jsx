import React from 'react'


import Chart from './highcharts/Chart'
// import Highcharts from 'highcharts'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { ResponsiveContainer } from 'recharts'


// Load Highcharts modules
require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/map')(Highcharts)


const chartOptions = {
    chart: {
        type: 'column',
    
    },
    
    
    title: {
        align: 'center',
        text: ' '
    },
    // subtitle: {
    //     align: 'left',
    //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    // },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',
        
    },
    yAxis: {
        title: {
            text: 'Porcentaje (%)'
        },
        min:0,
        max:100

    },
    legend: {
        enabled: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            },
            states: {
                inactive: {
                    opacity: 1
                }
            },
            events: {
                legendItemClick: function() {
                    return false;
                }
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
    },
    

    series: [
        {
            name: 'Disponibilidad',
            // colorByPoint: true,
            color: 'rgb(14,18,113)',
            data: [
                {
                    name: 'ENE',
                    y: 10,
                    // drilldown: 'Chrome'
                },
                {
                    name: 'FEB',
                    y: 20,
                    // drilldown: 'Safari'
                },
                {
                    name: 'MAR',
                    y: 30,
                    // drilldown: 'Firefox'
                },
                {
                    name: 'ABR',
                    y: 40,
                    // drilldown: 'Edge'
                },
                {
                    name: 'MAY',
                    y: 30,
                    // drilldown: 'Opera'
                },
                {
                    name: 'JUN',
                    y: 50,
                    // drilldown: 'Internet Explorer'
                },
                {
                    name: 'JUL',
                    y: 80,
                    // drilldown: null
                },
                {
                    name: 'AGO',
                    y: 90,
                    // drilldown: null
                },
                {
                    name: 'SET',
                    y: 0,
                    // drilldown: null
                },
                {
                    name: 'OCT',
                    y: 10,
                    // drilldown: null
                },
                {
                    name: 'NOV',
                    y: 0,
                    // drilldown: null
                },
                {
                    name: 'DIC',
                    y: 20,
                    // drilldown: null
                },
            ]
        },
    ],


}
export default function BarChart() {
	return (

  <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
  <strong className="text-gray-700 font-medium">Disponibilidad</strong>
  <div className=" mt-3 flex flex-1 text-xs ">

    <ResponsiveContainer>
      
    <Chart options={chartOptions} highcharts={Highcharts} />

    </ResponsiveContainer>
  </div>
  </div>
	)
}
