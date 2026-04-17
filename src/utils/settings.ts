export const StorageUtil = {
  set(key, value) {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
  },

  get(key) {
      const jsonValue = localStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
  },

  remove(key) {
      localStorage.removeItem(key);
  },

  clear() {
      localStorage.clear();
  },
};
