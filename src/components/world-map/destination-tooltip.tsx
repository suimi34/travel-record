import Image from "next/image";
import { Destination } from "@/src/types";
import { MAP_STYLES } from "@/src/constants/styles";

interface DestinationTooltipProps {
  destination: Destination;
  position: { x: number; y: number };
}

const typeLabels: Record<Destination["type"], string> = {
  beach: "Beach",
  city: "City",
  cultural: "Cultural",
  mountain: "Mountain",
};

export default function DestinationTooltip({
  destination,
  position,
}: DestinationTooltipProps) {
  return (
    <div
      className={MAP_STYLES.tooltip}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -100%) translateY(-8px)",
        pointerEvents: "none",
      }}
    >
      <div className="bg-card rounded-lg overflow-hidden border">
        <div className="relative h-32 w-full">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm">{destination.name}</h3>
          <span className="text-xs text-muted-foreground">
            {typeLabels[destination.type]}
          </span>
        </div>
      </div>
    </div>
  );
}
