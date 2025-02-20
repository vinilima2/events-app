import { useCallback } from "react";

export default function useLocalStorage() {
  const saveItem = useCallback(async function (key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback(async function (key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }, []);

  const removeItem = useCallback(async function (key: string) {
    localStorage.removeItem(key);
  }, []);

  return { saveItem: saveItem, getItem: getItem, removeItem: removeItem };
}
