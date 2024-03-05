export const sortArray = (arr, sortValue) => {
  if (sortValue === "date") {
    return arr.sort(
      (a, b) => +new Date(a[sortValue]) - +new Date(b[sortValue]),
    );
  }

  if (sortValue === "last") {
    return arr.sort((a, b) => {
      if (
        !(a.transactions?.length && a.transactions[0].date) &&
        b.transactions?.length &&
        b.transactions[0].date
      ) {
        return 1;
      }
      if (
        a.transactions?.length &&
        a.transactions[0].date &&
        !(b.transactions?.length && b.transactions[0].date)
      ) {
        return -1;
      }

      if (
        !(a.transactions?.length && a.transactions[0].date) &&
        !(b.transactions?.length && b.transactions[0].date)
      ) {
        return 0;
      }
      return (
        +new Date(a.transactions[0].date) - +new Date(b.transactions[0].date)
      );
    });
  }
  return arr.sort((a, b) => +a[sortValue] - +b[sortValue]);
};
