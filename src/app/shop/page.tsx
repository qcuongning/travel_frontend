import Image from "next/image";
import { getProducts } from "@/lib/data";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <div className="bg-akina-light min-h-screen pt-32 pb-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <span className="text-akina-purple font-bold tracking-widest uppercase text-sm block">Boutique</span>
                        <h1 className="text-5xl font-light tracking-tight text-akina-dark">Travel Essentials</h1>
                        <p className="text-akina-dark/60 font-light max-w-md">
                            Curated goods for the modern traveler, designed for both journey and destination.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold hover:bg-akina-dark hover:text-white transition-colors">
                        <ShoppingBag className="h-4 w-4" />
                        View Cart (0)
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative h-96 w-full bg-[#E5E5F0] rounded-[2.5rem] p-8 mb-6 overflow-hidden flex items-center justify-center">
                                {/* Product Image Placeholder style since we used unsplash/mock before */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Hover Add to Cart Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button className="w-full bg-white/90 backdrop-blur-md text-akina-dark py-4 rounded-xl font-bold text-sm shadow-xl hover:bg-akina-purple hover:text-white transition-colors flex items-center justify-center gap-2">
                                        Add to Cart <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-medium text-akina-dark mb-1">{product.name}</h3>
                                    <p className="text-gray-400 font-light text-sm">{product.description}</p>
                                </div>
                                <span className="text-lg font-bold text-akina-dark">${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
