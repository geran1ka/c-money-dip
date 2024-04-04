export const getBalancesYear = (data, account) => {
  const balance = {};

  data.reduce((acc, item) => {
    const res = acc + item.amount * (account === item.to ? 1 : -1);
    const date = new Date(item.date.slice(0, -1));
    const year = date.getFullYear();
    console.log("year: ", year);
    const month = date.getMonth();
    console.log("month: ", month);
    console.log(res);

    if (!(year in balance)) {
      balance[year] = { month: {} };
    }
    console.log(balance);
    if (!balance[year].month[month]) {
      balance[year].month[month] = {
        balance: res || 0,
        income: 0,
        expense: 0,
      };
    }
    // if (item.from === account) {
    //   balance[year].month[month].expense += item.amount;
    // }

    // if (item.to === account) {
    //   balance[year].month[month].income += item.amount;
    // }

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

// [
//   {
//     date: "2021-05-19T23:28:32.166Z",
//     from: "50656108021131755024456801",
//     to: "74213041477477406320783754",
//     amount: 6145.33,
//   },
//   {
//     date: "2021-05-19T08:17:26.965Z",
//     from: "74213041477477406320783754",
//     to: "05181686746033625350802661",
//     amount: 7403.54,
//   },
//   {
//     date: "2021-05-20T06:52:10.811Z",
//     from: "74213041477477406320783754",
//     to: "00727180808266805474631505",
//     amount: 1300.36,
//   },
//   {
//     date: "2021-06-19T07:15:39.751Z",
//     from: "74213041477477406320783754",
//     to: "55550856613423037552056531",
//     amount: 1930.22,
//   },
//   {
//     date: "2021-06-19T10:09:54.123Z",
//     from: "68002007853180050726771715",
//     to: "74213041477477406320783754",
//     amount: 7220.17,
//   },
//   {
//     date: "2021-06-19T01:32:57.730Z",
//     from: "84225716133463860202076784",
//     to: "74213041477477406320783754",
//     amount: 9260.31,
//   },
// ];
