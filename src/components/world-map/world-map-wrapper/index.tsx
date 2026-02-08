"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("@/src/components/world-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-muted/50 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">地図を読み込み中...</p>
      </div>
    </div>
  ),
});

export default function WorldMapClientWrapper() {
  return <WorldMap />;
}
