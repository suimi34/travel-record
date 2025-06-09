'use client';

import { useEffect, useState } from "react";
import useScrollPosition from "../../../hooks/use-scroll-position";
import { sendGAEvent } from "@next/third-parties/google";
import { BUTTON_STYLES } from "../../../constants/styles";

interface ReadMoreProps {
  showReadMore: boolean;
  isLoading: boolean;
  handleClick: () => void;
  cityName: string;
}

export default function ReadMore({ showReadMore, isLoading, handleClick: onHandleClick, cityName }: ReadMoreProps) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    const currentHeight = scrollY + window.innerHeight;

    if (showReadMore && (document.documentElement.scrollHeight - currentHeight < 300)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY, showReadMore]);

  const handleClick = () => {
    sendGAEvent('event', 'read_more', { value: cityName });
    onHandleClick();
  }

  if (!isVisible) return null;

  if (isLoading) {
    return (
      <button
        className={BUTTON_STYLES.readMore}
        style={BUTTON_STYLES.fixed}
        disabled={true}
      >
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={BUTTON_STYLES.readMore}
      style={BUTTON_STYLES.fixed}
    >
      Read More ↓
    </button>
  );
}
