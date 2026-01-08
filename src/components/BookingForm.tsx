"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface BookingFormProps {
    tourId: string;
    tourName: string;
    price: number;
}

export function BookingForm({ tourId, tourName, price }: BookingFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const data = {
            tour_id: tourId,
            customer_name: formData.get("name") as string,
            customer_email: formData.get("email") as string,
            tour_date: new Date(formData.get("date") as string).toISOString(),
            people_count: Number(formData.get("people")),
        };

        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

        try {
            const response = await fetch(`${API_URL}/bookings/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit booking");
            }

            const result = await response.json();
            alert(`Booking Confirmed! ID: ${result.id}`);
            router.push("/");
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100/50">
            <h3 className="text-2xl font-light text-akina-dark mb-2">Book This Tour</h3>
            <p className="text-gray-400 text-sm mb-8 font-light">Complete your reservation securely.</p>

            <div className="p-4 bg-akina-light rounded-2xl mb-6">
                <p className="text-sm text-gray-500 mb-1">Total Price</p>
                <p className="text-2xl font-medium text-akina-dark">${price} <span className="text-xs font-normal text-gray-400">/ person</span></p>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl">
                    {error}
                </div>
            )}

            <div className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-akina-purple/20 focus:border-akina-purple outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-akina-purple/20 focus:border-akina-purple outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="date" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-akina-purple/20 focus:border-akina-purple outline-none transition-all text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="people" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                            Travelers
                        </label>
                        <input
                            type="number"
                            id="people"
                            name="people"
                            min="1"
                            defaultValue="1"
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-akina-purple/20 focus:border-akina-purple outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-akina-dark hover:bg-gray-900 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            "Confirm Booking"
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
