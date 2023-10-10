export function readLocalStorage<T>(key: string): T | undefined {
  const item = localStorage.getItem(key);
  if (item !== undefined && item !== null) {
    return JSON.parse(item);
  }
}
