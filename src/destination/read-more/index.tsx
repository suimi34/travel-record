'use client';

import { useEffect, useState } from "react";
import useScrollPosition from "../../hooks/use-scroll-position";
import { sendGAEvent } from "@next/third-parties/google";

export default function ReadMore(props: { showReadMore: boolean, isLoading: boolean, handleClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    const currentHeight = scrollY + window.innerHeight;

    if (props.showReadMore && (document.documentElement.scrollHeight - currentHeight < 300)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY, props.showReadMore]);

  const ButtonWithLoading = () => {
    return (
      <button
        className="bg-black text-white px-4 py-2 rounded"
        style={{ position: "fixed", zIndex: 100, left: '50%', transform: 'translateX(-50%)', bottom: '16px' }}
        disabled={true}
      >
        Loading...
      </button>
    )
  }

  const handleClick = () => {
    sendGAEvent('event', 'read_more', { value: 'cityName' });
    props.handleClick();
  }

  return (
    <>
      {isVisible && (
        props.isLoading ? <ButtonWithLoading /> :
          <button
            onClick={() => handleClick()}
            className="bg-black text-white px-4 py-2 rounded"
            style={{ position: "fixed", zIndex: 100, left: '50%', transform: 'translateX(-50%)', bottom: '16px' }}>
            Read More ↓
          </button>
      )}
    </>
  );
}
