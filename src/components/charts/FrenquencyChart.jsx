import React, { Fragment } from "react";
import Plot from "react-plotly.js";
import { useState } from "react";
import { chart } from "highcharts";
import { ResponsiveContainer } from "recharts";

var nombresMeses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function generateTrace(hours, month, fInit, fEnd, state, sw) {
  if (state == "init") {
    var colorT = "rgba(216,217,219,0.8)";
    var colorB = "rgba(98,106,106,1)";
  }
  if (state == "positivo") {
    var colorT = "rgba(14,18,113,0.8)";
    var colorB = "rgba(14,18,113,1)";
  }
  if (state == "negativo") {
    var colorT = "rgba(0,148,206,0.8)";
    var colorB = "rgba(0,148,206,1)";
  }
  //if (state =='Mantenimiento'){ var colorT = 'rgba(255,20,51,0.8)'; var colorB = 'rgba(255,20,51,1)';}

  var trace = {
    x: [hours],
    y: [month],
    name: state,
    orientation: "h",
    marker: {
      color: colorT,
      width: 1,
      line: {
        color: colorB,
        width: 2,
      },
    },
    type: "bar",
    showlegend: sw,
    text: ["<br><b>Inicio</b>:" + fInit + "<br><b>Fin</b>:" + fEnd],
    hovertemplate:
      "<b>" +
      state +
      "</b>" +
      "<br>" +
      "<br>" +
      "<b>Horas</b>: %{x:.2f}" +
      "<br>%{text}" +
      "<extra></extra>",
  };

  return trace;
}

function convertISOToReadableDateTime(isoDate) {
  const date = new Date(isoDate);
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("es-ES", options);
  const formattedDateTime = formatter.format(date);

  return formattedDateTime;
}

//Initialize chart
const fecha = new Date();
const mesActual = 9; //fecha.getMonth() + 1;
var mes_init = nombresMeses[mesActual];
//traceInitM = generateTrace(0.0001, mes_init, '000/00/00 00:00', '0000/00/00 00:00', 'Mantenimiento',true)//'2022/11/24 10:50:16'
var traceInitUE = generateTrace(
  0.0001,
  mes_init,
  "000/00/00 00:00",
  "0000/00/00 00:00",
  "positivo",
  true
);
var traceInitNU = generateTrace(
  0.0001,
  mes_init,
  "000/00/00 00:00",
  "0000/00/00 00:00",
  "negativo",
  true
);
var traceInitUC = generateTrace(
  0.0001,
  mes_init,
  "000/00/00 00:00",
  "0000/00/00 00:00",
  "init",
  true
);
var data_init = [traceInitUE, traceInitUC, traceInitNU]; //,traceInitM];

export default function FrenquencyChart() {
  const [data_chart, setData] = useState(data_init);

  return (
    <Fragment>
      {/* // <div className="bg-white p-4 rounded-sm border border-solid border-gray-200 flex flex-col flex-1"> */}
      <strong className="text-gray-700 font-medium">
        Frecuencia de uso mensual
      </strong>
      <div className="mt-3 flex flex-1 text-xs ">
        <ResponsiveContainer>
          <PlotlyChart data={data_chart} />
        </ResponsiveContainer>
      </div>

      {/* // </div> */}
    </Fragment>
  );
}

function PlotlyChart({ data }) {
  return (
    <Plot
      data={data}
      layout={{
        //title: 'FRECUENCIA DE USO MENSUAL',
        // height: 350,  // HERE IS THE IMPORTANT
        // width: "100%",
        barmode: "stack",
        xaxis: {
          title: {
            text: "Horas (h)",
          },
        },
        showlegend: true,
        legend: { orientation: "v" },
        hovermode: "closest",
        hoverlabel: {
          align: "left",
          bordercolor: "#000",
          font: {
            color: "#000",
            family: "Times New Roman",
            size: 15,
          },
        },

        //hoverlabel: { bgcolor: "#FFF" }
      }}
      config={{ responsive: true }}
    />
  );
}
