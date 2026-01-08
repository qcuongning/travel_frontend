import Link from "next/link";
import Image from "next/image";
import { getDestinations } from "@/lib/data";
import { Star, ArrowRight } from "lucide-react";

export default async function DestinationsPage() {
    const destinations = await getDestinations();

    return (
        <div className="bg-akina-light min-h-screen pt-32 pb-24 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-light tracking-tight text-akina-dark">Destinations</h1>
                    <p className="text-akina-dark/60 max-w-2xl mx-auto font-light">
                        Curated locations for the discerning traveler.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <Link
                            href={`/destinations/${destination.slug}`}
                            key={destination.slug}
                            className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 block"
                        >
                            <Image
                                src={destination.image}
                                alt={destination.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                                <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                                    <div className="flex justify-between items-end mb-2">
                                        <h2 className="text-3xl font-light">{destination.name}</h2>
                                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                                            <Star className="h-3 w-3 fill-white text-white" />
                                            {destination.rating}
                                        </div>
                                    </div>
                                    <p className="text-white/80 font-light text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {destination.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest opacity-80 group-hover:text-akina-lilac transition-colors">
                                        Explore <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
