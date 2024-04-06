import { getArrayIsObject } from "./getArrayIsObject";

export const getStatisticInfoObj = (balancesByYearObj, timePeriod) => {
  const statisticInfo = {
    income: 0,
    expense: 0,
  };

  const years = getArrayIsObject(balancesByYearObj, "keys").sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  const yearLastInfo = getArrayIsObject(
    balancesByYearObj[years[years.length - 1]]["month"],
    "values",
  );

  if (timePeriod === "year") {
    statisticInfo.income = yearLastInfo.reduce(
      (acc, item) => acc + item.income,
      0,
    );
    statisticInfo.expense = yearLastInfo.reduce(
      (acc, item) => acc + item.expense,
      0,
    );
  }

  if (timePeriod === "month") {
    const monthLastInfo = yearLastInfo[yearLastInfo.length - 1];
    statisticInfo.income = monthLastInfo.income;
    statisticInfo.expense = monthLastInfo.expense;
  }

  if (timePeriod === "week") {
    const weekLastInfo = getArrayIsObject(
      yearLastInfo[yearLastInfo.length - 1]["day"],
    ).reverse();
    const lastDay = Object.keys(weekLastInfo[0])[0];
    weekLastInfo.filter((item) => {
      if (lastDay >= Object.keys(item)[0]) {
        return (
          Object.keys(item)[0] <= lastDay && Object.keys(item)[0] > lastDay - 7
        );
      } else {
        return Object.keys(item)[0] <= lastDay;
      }
    });

    weekLastInfo.forEach((item) => {
      statisticInfo.income += getArrayIsObject(item, "values")[0].income;
      statisticInfo.expense += getArrayIsObject(item, "values")[0].expense;
    });
  }

  return statisticInfo;
};
