"use client";

import { useState, useRef, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup,
  createCoordinates,
  createLongitude,
  createLatitude,
} from "@vnedyalk0v/react19-simple-maps";
import { ALL_DESTINATIONS } from "@/src/data/destinations";
import { MAP_STYLES } from "@/src/constants/styles";
import { Destination } from "@/src/types";
import DestinationTooltip from "./destination-tooltip";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MARKER_COLOR = "hsl(var(--primary))";
const MIN_ZOOM = 1;
const MAX_ZOOM = 8;

export default function WorldMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredDestination, setHoveredDestination] =
    useState<Destination | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({
    coordinates: [createLongitude(-30), createLatitude(30)] as [any, any],
    zoom: 1
  });

  const handleZoomIn = useCallback(() => {
    setPosition((pos) => ({ ...pos, zoom: Math.min(pos.zoom * 1.5, MAX_ZOOM) }));
  }, []);

  const handleZoomOut = useCallback(() => {
    setPosition((pos) => ({ ...pos, zoom: Math.max(pos.zoom / 1.5, MIN_ZOOM) }));
  }, []);

  const handleMoveEnd = useCallback((position: any) => {
    setPosition(position);
  }, []);

  const handleMouseEnter = (
    destination: Destination,
    event: React.MouseEvent<SVGCircleElement>
  ) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const targetRect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: targetRect.left + targetRect.width / 2 - containerRect.left,
      y: targetRect.top - containerRect.top,
    });
    setHoveredDestination(destination);
  };

  const handleMouseLeave = () => {
    setHoveredDestination(null);
  };

  const sortedDestinations = [...ALL_DESTINATIONS].sort((a, b) => a.id - b.id);

  return (
    <div className={MAP_STYLES.container} ref={containerRef}>
      <div className={MAP_STYLES.wrapper}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 120,
            center: createCoordinates(0, 30),
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={MAP_STYLES.geography}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "hsl(var(--muted))" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {sortedDestinations.slice(0, -1).map((destination, index) => {
              const nextDestination = sortedDestinations[index + 1];
              return (
                <Line
                  key={`route-${destination.id}`}
                  from={[
                    createLongitude(destination.coordinates.lng),
                    createLatitude(destination.coordinates.lat)
                  ]}
                  to={[
                    createLongitude(nextDestination.coordinates.lng),
                    createLatitude(nextDestination.coordinates.lat),
                  ]}
                  stroke="hsl(var(--primary))"
                  strokeWidth={1.5 / position.zoom}
                  strokeOpacity={0.5}
                  strokeDasharray="4 2"
                  strokeLinecap="round"
                />
              );
            })}

            {sortedDestinations.map((destination) => (
              <Marker
                key={destination.id}
                coordinates={[
                  createLongitude(destination.coordinates.lng),
                  createLatitude(destination.coordinates.lat),
                ]}
              >
                <circle
                  r={8 / position.zoom}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => handleMouseEnter(destination, e)}
                  onMouseLeave={handleMouseLeave}
                />
                <circle
                  r={5 / position.zoom}
                  fill={MARKER_COLOR}
                  stroke="#fff"
                  strokeWidth={1.5 / position.zoom}
                  style={{ pointerEvents: "none" }}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 bg-card border rounded flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 bg-card border rounded flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>

      {hoveredDestination && (
        <DestinationTooltip
          destination={hoveredDestination}
          position={tooltipPosition}
        />
      )}
    </div>
  );
}
