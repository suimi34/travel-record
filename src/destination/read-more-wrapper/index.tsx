"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { getSignedUrlAction } from '@/app/actions'

const ReadMore = dynamic(() => import("../read-more"), { ssr: false });

export default function ReadMoreWrapper(props: { showReadMore: boolean; imageKeys: string[] }) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [availableImageKeys, setAvailableImageKeys] = useState<string[]>(props.imageKeys);

  const appendImageUrls = async () => {
    const keys = availableImageKeys.slice(0, 9);
    const urls = await Promise.all(keys.map((key) => getSignedUrlAction(key)));
    const newImageUrls = [...imageUrls, ...urls];
    setImageUrls(newImageUrls);
    setAvailableImageKeys(availableImageKeys.filter((key) => !availableImageKeys.includes(key)));
  }
  const handleClick = () => {
    appendImageUrls();
  }

  return (
    <>
      <ReadMore showReadMore={props.showReadMore} handleClick={handleClick} />
      {imageUrls.map((url, index) => (
        <div key={index} className="relative">
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            className="w-full h-[300px] object-cover rounded-lg"
            width={300}
            height={200}
          />
        </div>
      ))}
    </>
  )
}
