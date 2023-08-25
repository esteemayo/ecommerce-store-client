export const rememberKey = 'rememberMe';

export const searchKey = 'histories';

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

export const getFromStorage = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key));
  }
}

export const setToStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export const removeFromStorage = (key) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(key);
  }
}
