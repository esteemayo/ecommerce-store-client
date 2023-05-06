export const excerpts = (str, count) => {
  if (str.length > count) {
    str = str.substr(0, count) + ' ...';
  }
  return str;
}

export const getUnique = (items, value) => {
  const newItems = items.map((item) => item[value]).flat();
  return [...new Set(newItems)];
}
