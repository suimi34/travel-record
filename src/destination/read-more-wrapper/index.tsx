"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";

const ReadMore = dynamic(() => import("../read-more"), { ssr: false });

export default function ReadMoreWrapper(props: { showReadMore: boolean; imageKeys: string[] }) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [availableImageKeys, setAvailableImageKeys] = useState<string[]>(props.imageKeys);

  // Fetch signed URL from Lambda function because Next.js static export does not support server actions
  const getSignedUrlLambda = async (key: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_S3_GET_SIGNED_URL_API_END_POINT}/getSignedUrl?key=${key}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    };
  }

  const appendImageUrls = async () => {
    const appendingKeys = availableImageKeys.slice(0, 9);
    const urls = await Promise.all(appendingKeys.map((key) => getSignedUrlLambda(key)));
    const newImageUrls = [...imageUrls, ...urls];
    setImageUrls(newImageUrls);
    const remainingImageKeys = availableImageKeys.filter((key) => !appendingKeys.includes(key))
    setAvailableImageKeys(remainingImageKeys);
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
