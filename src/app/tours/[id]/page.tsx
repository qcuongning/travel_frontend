import Image from "next/image";
import { getTour } from "@/lib/data";
import { notFound } from "next/navigation";
import { MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";

interface Props {
    params: {
        id: string;
    };
}

export default async function TourDetail({ params }: Props) {
    const { id } = await params;
    const tour = await getTour(id);

    if (!tour) {
        notFound();
    }

    return (
        <div className="bg-akina-light min-h-screen">
            {/* Hero */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-widest border border-white/20">
                            <MapPin className="h-4 w-4" />
                            {tour.destinationSlug}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">{tour.name}</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-16 -mt-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-[2rem] flex items-center gap-4 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-akina-lilac/20 flex items-center justify-center text-akina-purple">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Duration</p>
                                    <p className="text-lg font-medium text-akina-dark">{tour.duration}</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-[2rem] flex items-center gap-4 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-akina-lilac/20 flex items-center justify-center text-akina-purple">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Availability</p>
                                    <p className="text-lg font-medium text-akina-dark">Year Round</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm">
                            <h2 className="text-2xl font-light mb-6 text-akina-dark">Tour Overview</h2>
                            <p className="text-lg text-gray-500 leading-relaxed font-light">
                                {tour.description}
                            </p>
                        </div>

                        {/* Itinerary */}
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm">
                            <h2 className="text-2xl font-light mb-8 text-akina-dark">Daily Itinerary</h2>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:left-[19px] before:contents-[''] before:border-l-2 before:border-gray-100">
                                {tour.itinerary.map((day, index) => (
                                    <div key={index} className="relative pl-12">
                                        <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-akina-purple rounded-full flex items-center justify-center text-akina-purple font-bold text-sm shadow-sm z-10">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-akina-dark mb-2">{day}</h3>
                                            <p className="text-gray-500 font-light text-sm">Experience the highlights of {tour.destinationSlug} on this exciting day of the tour.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Included */}
                        <div className="bg-akina-dark text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
                            <h2 className="text-2xl font-light mb-6">What's Included</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {["Luxury Accommodation", "Expert Local Guide", "Private Transport", "Daily Breakfast", "All Entry Fees", "Welcome Dinner"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-white/80 font-light">
                                        <CheckCircle2 className="h-5 w-5 text-akina-purple" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-8">
                            <BookingForm tourId={tour.id} tourName={tour.name} price={tour.price} />

                            <div className="bg-akina-purple p-8 rounded-[2rem] text-white text-center shadow-lg relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="font-medium text-lg mb-2">Need Customization?</h4>
                                    <p className="text-white/80 text-sm font-light mb-6">
                                        We can tailor this trip to your specific needs and preferences.
                                    </p>
                                    <button className="bg-white text-akina-purple px-6 py-3 rounded-full text-sm font-bold w-full hover:bg-gray-50 transition-colors">
                                        Contact Expert
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
