import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';
import { getSignedUrl } from "@/lib/s3";
import ReadMoreWrapper from "@/src/destination/read-more-wrapper";

interface Destination {
  id: number;
  name: string;
  type: string;
  weather: string;
  image: string;
  pathName: string;
}

export default async function Destination(props: { dest: Destination, imageKeys?: string[] }) {
  const { dest, imageKeys } = props;

  const initialImageKeys: string[] = [];
  let readMoreImageKeys: string[] = [];
  let showReadMore = false;

  if (imageKeys && imageKeys.length > 0) {
    // shuffle
    const shuffledImagesKeys = imageKeys.toSorted(() => Math.random() - Math.random());
    for (let i = 0; i < 9; i++) {
      const key = shuffledImagesKeys.shift();
      if (key) {
        initialImageKeys.push(key)
      }
    }
    readMoreImageKeys = shuffledImagesKeys.filter((key) => !initialImageKeys.includes(key));
    showReadMore = imageKeys.length > 0;
  }

  const imageUrls = await Promise.all(initialImageKeys.map((key) => getSignedUrl(key)));

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2" size={16} />
            Back to Destinations
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Image
            src={dest.image || "/placeholder.svg"}
            alt={dest.name}
            className="w-full h-[400px] object-cover rounded-lg"
            width={300}
            height={200}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <ReadMoreWrapper showReadMore={showReadMore} imageKeys={readMoreImageKeys} />
      </div>
    </div>
  )
}
