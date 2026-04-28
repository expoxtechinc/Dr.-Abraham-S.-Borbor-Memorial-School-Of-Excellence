import { useEffect, useState } from "react";

export function useStoreValue<T>(getter: () => T): T {
  const [value, setValue] = useState<T>(getter);
  useEffect(() => {
    const handler = () => setValue(getter());
    window.addEventListener("borbor:store-update", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("borbor:store-update", handler);
      window.removeEventListener("storage", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return value;
}
