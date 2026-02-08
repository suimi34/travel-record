"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-muted/50 rounded-lg animate-pulse flex items-center justify-center">
      <span className="text-muted-foreground">Loading map...</span>
    </div>
  ),
});

export default function WorldMapClientWrapper() {
  return <WorldMap />;
}
