export const getBalancesYear = (data, account, balance) => {
  const balanceObj = {};

  [...data].reverse().reduce((acc, item) => {
    const date = new Date(item.date.slice(0, -1));
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    if (!(year in balanceObj)) {
      balanceObj[year] = { month: {} };
    }

    if (!balanceObj[year].month[month]) {
      balanceObj[year].month[month] = {
        day: {},
        balance: acc || 0,
        income: 0,
        expense: 0,
      };
    }

    if (!balanceObj[year].month[month].day[day]) {
      balanceObj[year].month[month].day[day] = {
        balance: acc || 0,
        income: 0,
        expense: 0,
      };
    }

    if (item.from === account) {
      balanceObj[year].month[month].expense += item.amount;
      balanceObj[year].month[month].day[day].expense += item.amount;
    }

    if (item.to === account) {
      balanceObj[year].month[month].income += item.amount;
      balanceObj[year].month[month].day[day].income += item.amount;
    }

    return acc - item.amount * (account === item.to ? 1 : -1);
  }, balance);

  return balanceObj;
};
