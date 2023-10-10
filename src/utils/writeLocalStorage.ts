export function writeLocalStorage<T>(key: string, value: T): T {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}
