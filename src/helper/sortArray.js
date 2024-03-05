export const sortArray = (arr, sortValue) => {
  if (sortValue === "date") {
    console.log("sortValue: ", sortValue);
    return arr.sort(
      (a, b) => +new Date(a[sortValue]) - +new Date(b[sortValue]),
    );
  }

  // if (sortValue === "last") {
  //   console.log("sortValue: ", sortValue);
  //   return arr.sort(
  //     (a, b) =>
  //       +new Date(a.transaction[0]?.date) - +new Date(b.transaction[0]?.date),
  //   );
  // }
  return arr.sort((a, b) => +a[sortValue] - +b[sortValue]);
};
