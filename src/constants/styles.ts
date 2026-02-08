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

export const HERO_STYLES = {
  container: "relative h-[70vh] w-full overflow-hidden",
  image: "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
  overlay: "absolute inset-0 bg-black/40",
  content: "relative z-10 h-full flex flex-col items-center justify-center text-white text-center",
  scrollIndicator: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
} as const;

export const MAP_STYLES = {
  container: "relative w-full bg-muted/50 rounded-lg overflow-hidden",
  wrapper: "aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]",
  geography: "fill-secondary stroke-border stroke-[0.5px] outline-none",
  marker: "cursor-pointer transition-transform hover:scale-125",
  routeLine: "stroke-primary/50 stroke-[1.5px] fill-none",
  tooltip: "absolute z-50 w-64 shadow-lg",
} as const;
