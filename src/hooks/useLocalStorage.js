import { useCallback, useEffect, useState } from "react";

const read = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
};

/** useState that persists to localStorage. Fails silently in private mode / blocked storage. */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => read(key, initialValue));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable — keep in-memory value */
    }
  }, [key, value]);

  const reset = useCallback(() => setValue(initialValue), [initialValue]);
  return [value, setValue, reset];
}
