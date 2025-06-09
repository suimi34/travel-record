"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { getMultipleSignedUrls } from "../../../services/api";
import { IMAGE_STYLES } from "../../../constants/styles";

const ReadMore = dynamic(() => import("../read-more"), { ssr: false });

export default function ReadMoreWrapper(props: { showReadMore: boolean; imageKeys: string[]; cityName: string }) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [availableImageKeys, setAvailableImageKeys] = useState<string[]>(props.imageKeys);
  const [isLoading, setIsLoading] = useState(false);

  const appendImageUrls = async () => {
    const appendingKeys = availableImageKeys.slice(0, 9);
    const urls = await getMultipleSignedUrls(appendingKeys);
    const newImageUrls = [...imageUrls, ...urls];
    setImageUrls(newImageUrls);
    const remainingImageKeys = availableImageKeys.filter((key) => !appendingKeys.includes(key))
    setAvailableImageKeys(remainingImageKeys);
  }
  
  const handleClick = async () => {
    setIsLoading(true);
    await appendImageUrls();
    setIsLoading(false);
  }

  return (
    <>
      <ReadMore showReadMore={props.showReadMore} isLoading={isLoading} handleClick={handleClick} cityName={props.cityName} />
      {imageUrls.map((url, index) => (
        <div key={index} className="relative">
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            className={IMAGE_STYLES.gallery}
            width={300}
            height={200}
          />
        </div>
      ))}
    </>
  )
}
