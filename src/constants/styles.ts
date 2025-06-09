export const BUTTON_STYLES = {
  readMore: "bg-black text-white px-4 py-2 rounded",
  fixed: {
    position: "fixed" as const,
    zIndex: 100,
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "16px",
  },
} as const;

export const IMAGE_STYLES = {
  gallery: "w-full h-[300px] object-cover rounded-lg",
  hero: "w-full h-[400px] object-cover rounded-lg",
  card: "w-full h-48 object-cover",
} as const;
