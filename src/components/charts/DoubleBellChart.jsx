import React, { Fragment } from "react";
import Bell from "./highcharts/Bell";
import Highcharts from "highcharts/highstock";
import { ResponsiveContainer } from "recharts";
import DatePickerComponent from "./components/DatePicker";
import { Button } from "antd";
import RefreshButton from "./components/RefreshButton";
import { useState } from "react";
import { useEffect } from "react";

require("highcharts/modules/histogram-bellcurve")(Highcharts);
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);

// Función para calcular la media de un array
function calcularMedia(arr) {
  const sum = arr.reduce((acc, valor) => acc + valor, 0);
  return sum / arr.length;
}

// Función para calcular la desviación estándar de un array
function calcularDesviacionEstandar(arr) {
  const media = calcularMedia(arr);
  const sumDiferenciasCuadradas = arr.reduce(
    (acc, valor) => acc + Math.pow(valor - media, 2),
    0
  );
  const varianza = sumDiferenciasCuadradas / arr.length;
  return Math.sqrt(varianza);
}

function getIdealData(media, desviacionEstandar) {
  // Crear un rango de valores para el eje X (por ejemplo, -3 a 3 desviaciones estándar)
  const paso = 0.1;
  const valoresX = [];
  for (
    let x = media - 3 * desviacionEstandar;
    x <= media + 3 * desviacionEstandar;
    x += paso
  ) {
    valoresX.push(x);
  }

  // Calcular los valores de la curva de Gauss para cada punto en el rango
  const valoresY = valoresX.map(
    (x) =>
      (1 / (desviacionEstandar * Math.sqrt(2 * Math.PI))) *
      Math.exp(-Math.pow(x - media, 2) / (2 * Math.pow(desviacionEstandar, 2)))
  );

  return { valoresX, valoresY };
}

function getBellData(datos) {
  const media = calcularMedia(datos);
  const desviacionEstandar = calcularDesviacionEstandar(datos);

  // Crear un rango de valores para el eje X (por ejemplo, -3 a 3 desviaciones estándar)
  const paso = 0.1;
  const valoresX = [];
  for (
    let x = media - 3 * desviacionEstandar;
    x <= media + 3 * desviacionEstandar;
    x += paso
  ) {
    valoresX.push(x);
  }

  // Calcular los valores de la curva de Gauss para cada punto en el rango
  const valoresY = valoresX.map(
    (x) =>
      (1 / (desviacionEstandar * Math.sqrt(2 * Math.PI))) *
      Math.exp(-Math.pow(x - media, 2) / (2 * Math.pow(desviacionEstandar, 2)))
  );

  return { valoresX, valoresY };
}

export default function BellChart({ chartName, dataPath, dataRate = 10000 }) {
  const { valoresX, valoresY } = getIdealData(100, 20);

  const [datax, setDataX] = useState([0]);
  const [datay, setDataY] = useState([0]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:1880/${dataPath}`)
        .then((res) => res.json())
        .then((data) => {
          const { valoresX, valoresY } = getBellData(data);
          setDataX(valoresX);
          setDataY(valoresY);
          // setPosts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    // Ejecutar fetchData inicialmente
    fetchData();

    // Configurar un intervalo para ejecutar fetchData cada 500 milisegundos
    const intervalId = setInterval(fetchData, dataRate);

    // Limpieza cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const ChartOptions = {
    title: {
      text: "",
      align: "left",
    },
    tooltip: {
      valueDecimals: 2,
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    // subtitle: {
    //   text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    //   align: "left",
    // },

    yAxis: {
      title: {
        text: "",
      },
    },

    // xAxis: {
    //   accessibility: {
    //     rangeDescription: "Range: 2010 to 2020",
    //   },
    // },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    // plotOptions: {
    //   series: {
    //     label: {
    //       connectorAllowed: false,
    //     },
    //     pointStart: 2010,
    //   },
    // },
    plotOptions: {
      area: {
        fillOpacity: 0.5,
      },
    },

    series: [
      {
        name: "Curva Ideal",
        color: "rgb(14,18,113)",
        data: valoresY.map((y, i) => [valoresX[i], y]),
      },
      {
        name: "Curva Real",
        type: "area",
        color: "rgb(0,148,206)",
        data: datay.map((y1, i1) => [datax[i1], y1]),
        fillColor: "rgba(0,148,206,0.5)",
        fillOpacity: 0.5,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Fragment>
      <div className="flex flex-row justify-between">
        <strong className="text-gray-700 font-medium">{chartName}</strong>
      </div>

      <div className="mt-3 flex flex-1 text-xs ">
        <ResponsiveContainer>
          <Bell options={ChartOptions} highcharts={Highcharts} />
        </ResponsiveContainer>
      </div>

      <div className="flex flex-row justify-center gap-4">
        <div>
          <DatePickerComponent />
        </div>

        <RefreshButton />
      </div>
    </Fragment>
  );
}
