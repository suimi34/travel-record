'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Sun, Umbrella, Mountain } from 'lucide-react'
import Link from 'next/link'

import { ALL_DESTINATIONS } from '../../data/destinations'
import { DestinationType, WeatherType } from '../../types'
import { IMAGE_STYLES } from '../../constants/styles'
import { formatPopulation } from '../../utils/format'

export default function TravelFinder() {
  const [typeFilter, setTypeFilter] = useState<DestinationType>("all")
  const [weatherFilter, setWeatherFilter] = useState<WeatherType>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDestinations = ALL_DESTINATIONS.filter(dest =>
    (typeFilter === "all" || dest.type === typeFilter) &&
    (weatherFilter === "all" || dest.weather === weatherFilter) &&
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Your Perfect Travel Destination</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="type">Destination Type</Label>
          <Select onValueChange={(value) => setTypeFilter(value as DestinationType)} defaultValue="all">
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="beach">Beach</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
              <SelectItem value="mountain">Mountain</SelectItem>
              <SelectItem value="city">City</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="weather">Weather</Label>
          <Select onValueChange={(value) => setWeatherFilter(value as WeatherType)} defaultValue="all">
            <SelectTrigger id="weather">
              <SelectValue placeholder="Select weather" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Weather</SelectItem>
              <SelectItem value="tropical">Tropical</SelectItem>
              <SelectItem value="temperate">Temperate</SelectItem>
              <SelectItem value="mediterranean">Mediterranean</SelectItem>
              <SelectItem value="cold">Cold</SelectItem>
              <SelectItem value="varied">Varied</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map(dest => (
          <Card key={dest.id} className="overflow-hidden">
            <Image
              src={dest.image}
              alt={dest.name}
              width={300}
              height={200}
              className={IMAGE_STYLES.card}
              priority
            />
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2" size={18} />
                {dest.name}
              </CardTitle>
              <CardDescription>
                {dest.type === "beach" && <Sun className="inline mr-2" size={18} />}
                {dest.type === "cultural" && <Umbrella className="inline mr-2" size={18} />}
                {dest.type === "mountain" && <Mountain className="inline mr-2" size={18} />}
                {dest.type.charAt(0).toUpperCase() + dest.type.slice(1)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Weather: {dest.weather.charAt(0).toUpperCase() + dest.weather.slice(1)}</p>
              <p className="text-sm text-gray-600">Population: {formatPopulation(dest.population)}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/city/${dest.pathName}`}>
                <Button>Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
