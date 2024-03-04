export const sortArray = (arr, sortValue) =>
  arr.sort((a, b) =>
    a[sortValue] - b[sortValue] > 0
      ? -1
      : a[sortValue] - b[sortValue] < 0
        ? 1
        : 0,
  );
