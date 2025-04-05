'use client';

import { useEffect, useState } from "react";
import useScrollPosition from "../../hooks/use-scroll-position";

export default function ReadMore(props: { showReadMore: boolean, handleClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    if (props.showReadMore && (scrollY + window.innerHeight === document.documentElement.scrollHeight)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY, props.showReadMore]);


  return (
    <>
      {isVisible && (
        <button
          onClick={() => props.handleClick()}
          className="bg-black text-white px-4 py-2 rounded"
          style={{ position: "fixed", zIndex: 100, left: '50%', transform: 'translateX(-50%)', bottom: '16px' }}>
          Read More ↓
        </button>
      )}
    </>
  );
}
