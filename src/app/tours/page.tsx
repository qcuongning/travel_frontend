import Link from "next/link";
import Image from "next/image";
import { getTours } from "@/lib/data";
import { Clock, MapPin, ArrowUpRight } from "lucide-react";

export default async function ToursPage() {
    const tours = await getTours();

    return (
        <div className="bg-akina-light min-h-screen pt-32 pb-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-light tracking-tight text-akina-dark">All Tours</h1>
                        <p className="text-akina-dark/60 font-light max-w-lg">
                            Choose from our wide selection of expertly crafted itineraries.
                        </p>
                    </div>
                    {/* Filter Pills Mockup */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {['All', 'Japan', 'Italy', 'Iceland'].map(f => (
                            <button key={f} className="px-6 py-2 rounded-full border border-akina-dark/10 bg-white text-sm hover:bg-akina-dark hover:text-white transition-colors">
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tours.map((tour) => (
                        <Link key={tour.id} href={`/tours/${tour.id}`} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-akina-dark shadow-sm">
                                    ${tour.price}
                                </div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                                    <MapPin className="h-3 w-3" />
                                    {tour.destinationSlug}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-light text-akina-dark group-hover:text-akina-purple transition-colors">{tour.name}</h3>
                                    <ArrowUpRight className="h-6 w-6 text-gray-300 group-hover:text-akina-purple transition-colors" />
                                </div>

                                <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed line-clamp-2">{tour.description}</p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Clock className="h-4 w-4" />
                                        {tour.duration}
                                    </div>
                                    <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">Available Now</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
