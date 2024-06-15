class LocalCache {
  setCache(key: string, value: any) {
    typeof window !== 'undefined' && window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    if(typeof window !== 'undefined'){
      const data = window.localStorage.getItem(key);

      if (data) {
        return JSON.parse(data);
      }
    }
    return null;
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}
export default new LocalCache();
