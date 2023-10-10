import { useCallback, useState } from "react";
import { readLocalStorage } from "../utils/readLocalStorage";
import { writeLocalStorage } from "../utils/writeLocalStorage";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void, (updateFunction: (previous: T) => T) => void] {
  const [value, setValue] = useState<T>(
    readLocalStorage(key) ?? writeLocalStorage<T>(key, initialValue)
  );

  const updateValue = useCallback(
    (newValue: T) => setValue(writeLocalStorage(key, newValue)),
    [key]
  );

  const updateValueUsingPreviousValue = useCallback(
    (updateFunction: (previous: T) => T) => {
      setValue((previous) => {
        const newValue = updateFunction(previous);
        writeLocalStorage(key, newValue);
        return newValue;
      });
    },
    [key]
  );

  return [value, updateValue, updateValueUsingPreviousValue];
}
