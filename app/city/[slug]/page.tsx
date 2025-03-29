import Destination from "@/src/destination";
import { ALL_DESTINATIONS } from "@/src/all-destinations";

export default async function Page({ params }: { params: Promise<{ slug: string; }> }) {
  const { slug } = await params
  const dest = ALL_DESTINATIONS.find((dest) => dest.pathName === slug)

  if (!dest) return;

  return (
    <Destination dest={dest} />
  )
}

export async function generateStaticParams() {
  return ALL_DESTINATIONS.map((city) => ({
    slug: city.pathName,
  }))
}