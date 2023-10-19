import React from 'react'
import Bell from './highcharts/Bell'
import Highcharts from 'highcharts/highstock';
import { ResponsiveContainer } from 'recharts';

require('highcharts/modules/histogram-bellcurve')(Highcharts)
require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)

var ideal_data_anual = [
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    95,
    95,
    105,
    105,
];
var data_gauss_anual1 = [
    100,
    90,
    90,
    110,
    110,
];


const bellChartOptions = {
    chart: {
        type: 'area',
        // width: 700,
    
    },
    
    title: {
        text: ''
    },

    // subtitle: {
    //     text:
    //     'Subtitle '
    // },
    xAxis: {
        alignTicks: false
    },

    yAxis: {
        title: { text: null }
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

    tooltip: {
        valueDecimals: 2,
    },
    
    series: [
        {
            name: 'Curva Real',
            type: 'bellcurve',
            color: 'rgb(0,148,206)',            
            baseSeries: 1,
            zIndex: -1
            
        },
        {
            name: 'data_real',
            data: data_gauss_anual1,
            visible: false,
            showInLegend: false,
        },

        {
            name: 'Curva Ideal',
            type: 'bellcurve',
            color: 'rgb(14,18,113)',
            fillColor: 'transparent',
            baseSeries: 2,
            zIndex: -1,
            data: ideal_data_anual,
            
        },
       
       
    ]

}

export default function BellChart() {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Campana de Gauss</strong>
        <div className="mt-3 flex flex-1 text-xs ">

            <ResponsiveContainer>
            
            <Bell options={bellChartOptions} highcharts={Highcharts} />

            </ResponsiveContainer>
        </div>
    </div>
  )
}
