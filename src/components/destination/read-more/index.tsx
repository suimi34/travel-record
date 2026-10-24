'use client';

import useIsNearBottom from "@/src/hooks/use-is-near-bottom";
import { sendGAEvent } from "@next/third-parties/google";
import { BUTTON_STYLES } from "@/src/constants/styles";

interface ReadMoreProps {
  showReadMore: boolean;
  isLoading: boolean;
  handleClick: () => void;
  cityName: string;
}

export default function ReadMore({ showReadMore, isLoading, handleClick: onHandleClick, cityName }: ReadMoreProps) {
  const isNearBottom = useIsNearBottom(300);
  const isVisible = showReadMore && isNearBottom;

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
