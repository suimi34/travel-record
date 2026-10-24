import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("scroll", callback);
  return () => {
    window.removeEventListener("scroll", callback);
  };
};

export default function useIsNearBottom(threshold: number) {
  return useSyncExternalStore(
    subscribe,
    () =>
      document.documentElement.scrollHeight -
        (window.pageYOffset + window.innerHeight) <
      threshold,
    () => false
  );
}
