import dayjs from "dayjs";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;
const onChange = (date) => {
  if (date) {
    console.log("Date: ", date);
  } else {
    console.log("Clear");
  }
};
const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  } else {
    console.log("Clear");
  }
};
const rangePresets = [
  //   {
  //     label: 'Today',
  //     value: [dayjs(), dayjs().endOf('day')],
  //   },
  {
    label: "Última semana",
    value: [dayjs().add(-7, "d"), dayjs()],
  },
  {
    label: "Últimas 2 semanas",
    value: [dayjs().add(-14, "d"), dayjs()],
  },
  {
    label: "Último mes",
    value: [dayjs().add(-30, "d"), dayjs()],
  },
  {
    label: "Últimos 3 meses",
    value: [dayjs().add(-90, "d"), dayjs()],
  },
];
const DatePickerComponent = () => (
  <Space direction="vertical" size={12}>
    {/* <RangePicker presets={rangePresets} onChange={onRangeChange} /> */}
    <RangePicker
      presets={[
        {
          label: <span aria-label="Current Time to End of Day">Hoy</span>,
          // value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
          // value del inicio del dia hasta ahora
          value: () => [dayjs().startOf("day"), dayjs()], // 5.8.0+ support function
        },
        ...rangePresets,
      ]}
      showTime
      format="DD/MM/YYYY HH:mm:ss"
      onChange={onRangeChange}
    />
  </Space>
);

export default DatePickerComponent;
