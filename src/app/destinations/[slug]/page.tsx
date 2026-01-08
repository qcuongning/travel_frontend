import Link from "next/link";
import Image from "next/image";
import { getDestination, getTours } from "@/lib/data";
import { notFound } from "next/navigation";
import { Clock, ArrowRight } from "lucide-react";

interface Props {
    params: {
        slug: string;
    };
}

export default async function DestinationDetail({ params }: Props) {
    const { slug } = await params;
    const destination = await getDestination(slug);

    if (!destination) {
        notFound();
    }

    const destinationTours = await getTours(slug);

    return (
        <div className="bg-akina-light min-h-screen">
            {/* Hero Image */}
            <div className="relative h-[70vh] w-full rounded-b-[3rem] overflow-hidden shadow-2xl">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover brightness-90"
                    priority
                />

                {/* Float Card */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[2.5rem] text-center text-white max-w-4xl shadow-2xl">
                        <span className="text-sm font-light tracking-[0.3em] uppercase mb-4 block opacity-80">Destination</span>
                        <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">{destination.name}</h1>
                        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed">
                            {destination.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tours Section */}
            <div className="container mx-auto max-w-6xl px-4 py-24">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-light text-akina-dark">Available Tours</h2>
                        <p className="text-akina-dark/50 mt-2">Curated experiences in {destination.name}</p>
                    </div>
                </div>

                {destinationTours.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                        <p className="text-gray-400 font-light text-lg">No tours currently available.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {destinationTours.map((tour) => (
                            <Link
                                key={tour.id}
                                href={`/tours/${tour.id}`}
                                className="group block bg-white rounded-[2rem] p-4 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-akina-lilac/30"
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="relative h-64 md:h-56 w-full md:w-80 shrink-0 rounded-[1.5rem] overflow-hidden">
                                        <Image
                                            src={tour.image}
                                            alt={tour.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center py-4 pr-8 grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-light text-akina-dark group-hover:text-akina-purple transition-colors">
                                                {tour.name}
                                            </h3>
                                            <span className="text-xl font-medium text-akina-dark">
                                                ${tour.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 font-light mb-6 line-clamp-2 leading-relaxed">
                                            {tour.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Clock className="h-4 w-4" />
                                                {tour.duration}
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-akina-light flex items-center justify-center group-hover:bg-akina-purple group-hover:text-white transition-all">
                                                <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
