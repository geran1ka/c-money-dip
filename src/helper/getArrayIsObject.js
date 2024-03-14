export const getArrayIsObject = (obj, method = "entries") => {
  if (method === "entries") {
    return Object.entries(obj).map(([key, value]) => ({
      [key]: value,
    }));
  }
  if (method === "values") {
    return Object.values(obj);
  }

  if (method === "keys") {
    return Object.keys(obj);
  }
};
