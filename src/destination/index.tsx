import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';

export default function Destination(props: { dest: { id: number; name: string; type: string; weather: string; image: string } }) {
  const { dest } = props;

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
    </div>
  )
}