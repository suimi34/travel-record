import Destination from "@/src/components/destination";
import { ALL_DESTINATIONS } from "@/src/data/destinations";
import type { Destination as DestinationType } from "@/src/types";
import { fetchObjects } from "@/lib/s3";
import type { Metadata } from "next";

export default async function Page({ params }: { params: Promise<{ slug: string; }> }) {
  const { slug } = await params
  const dest = ALL_DESTINATIONS.find((dest: DestinationType) => dest.pathName === slug)

  if (!dest) return;

  const objects = [] as string[];
  const directoryPrefix = dest.pathName.toLowerCase();
  const s3Objects = await fetchObjects(directoryPrefix)

  if (s3Objects) {
    s3Objects.forEach((object) => {
      if (object.Key && object.Key.match(/\.jpg$|\.JPG$|\.jpeg$|\.JPEG$|\.png$|\.PNG$|\.gif$|\.GIF$|\.CR$|\.CR2$/)) {
        // 画像ファイルのみをフィルタリングする
        objects.push(object.Key as string);
      }
    })
  }

  return (
    <Destination dest={dest} imageKeys={objects} />
  )
}

export async function generateStaticParams() {
  return ALL_DESTINATIONS.map((city: DestinationType) => ({
    slug: city.pathName,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; }> }): Promise<Metadata> {
  const { slug } = await params
  const dest = ALL_DESTINATIONS.find((dest: DestinationType) => dest.pathName === slug)

  if (!dest) {
    return {
      title: "City Not Found",
      description: "The requested city could not be found.",
    }
  }

  return {
    metadataBase: new URL(process.env.SITE_URL ?? "https://example.com"),
    title: `${dest.name} - Travel Record`,
    description: `Explore ${dest.name} with photos and travel memories. Population: ${dest.population.toLocaleString()}`,
    keywords: [dest.name, dest.type, dest.weather, 'travel', 'photos'],
    openGraph: {
      title: `${dest.name} - Travel Record`,
      description: `Explore ${dest.name} with photos and travel memories`,
      images: [dest.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dest.name} - Travel Record`,
      description: `Explore ${dest.name} with photos and travel memories`,
      images: [dest.image],
    },
  }
}
