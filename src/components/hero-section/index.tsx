"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { HERO_STYLES } from "@/src/constants/styles";

const HERO_IMAGES = [
  "/san_francisco_us.jpg",
  "/habana_cuba.jpg",
  "/kyufun_taiwan.jpg",
  "/cancun_mexico.jpg",
  "/vancouver_canada.jpg",
];

const SLIDE_INTERVAL = 5000;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={HERO_STYLES.container}>
      {/* スライドショー画像 */}
      {HERO_IMAGES.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt=""
          fill
          priority={index === 0}
          className={`${HERO_STYLES.image} ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* オーバーレイ */}
      <div className={HERO_STYLES.overlay} />

      {/* コンテンツ */}
      <div className={HERO_STYLES.content}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          7 Months Backpacking Journey
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          2016年4月〜10月
        </p>
      </div>

      {/* スクロール誘導 */}
      <div className={HERO_STYLES.scrollIndicator}>
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
}
