
import { useSyncExternalStore } from 'react';


const subscribe = (callback: () => void) => {
  window.addEventListener('scroll', callback);
  return () => {
    window.removeEventListener('scroll', callback);
  }
}

export default function useScrollPosition() {
  return useSyncExternalStore(
    subscribe,
    () => window.pageYOffset,
    () => 0,
  )
}
