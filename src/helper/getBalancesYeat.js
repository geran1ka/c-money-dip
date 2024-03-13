export const getBalancesYear = (data, account) => {
  const balance = {};

  data.reduce((acc, item) => {
    const res = acc + item.amount * (account === item.to ? 1 : -1);
    const date = new Date(item.date.slice(0, -1));
    const year = date.getFullYear();
    const month = date.getMonth();
    if (!(year in balance)) {
      balance[year] = { month: {} };
    }

    if (!balance[year].month[month]) {
      balance[year].month[month] = {
        balance: res || 0,
        income: 0,
        expense: 0,
      };
    }

    if (item.from === account) {
      balance[year].month[month].expense += item.amount;
    }

    if (item.to === account) {
      balance[year].month[month].income += item.amount;
    }

    return res;
  }, 0);

  return balance;
};

// export const getBalancesYear = (data, account) => {
//   const balanceHistory = {};

//   data.forEach((transaction) => {
//     const date = new Date(transaction.date.slice(0, -1));
//     const year = date.getFullYear();
//     const month = date.getMonth();

//     if (!(year in balanceHistory)) {
//       balanceHistory[year] = { monthlyBalances: {} };
//     }

//     if (!balanceHistory[year].monthlyBalances[month]) {
//       balanceHistory[year].monthlyBalances[month] = {
//         balance: balanceHistory[year].monthlyBalances[month - 1]?.balance || 0,
//         income: 0,
//         expense: 0,
//       };
//       balanceHistory[year].monthlyBalances[month - 1] || 0;
//     }

//     if (transaction.from === account) {
//       balanceHistory[year].monthlyBalances[month].balance -= transaction.amount;

//       balanceHistory[year].monthlyBalances[month].expense += transaction.amount;
//     }

//     if (transaction.to === account) {
//       balanceHistory[year].monthlyBalances[month].balance += transaction.amount;

//       balanceHistory[year].monthlyBalances[month].income += transaction.amount;
//     }
//   });

//   return balanceHistory;
// };
