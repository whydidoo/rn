export const generateChartData = () => {
  let chartData = [];
  let firstDate = new Date();

  firstDate.setMinutes(1, 0, 0);

  let heat = 70;
  for (var i = 0; i < 50; i++) {
    let newDate = new Date(firstDate);
    newDate.setMinutes(newDate.getMinutes() - 40 + i);
    heat += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
    chartData.push({
      date: newDate.getTime(),
      value: heat,
    });
  }

  return chartData;
};
