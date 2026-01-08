import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Globe className="h-8 w-8 text-blue-500" />
                            <span className="text-xl font-bold">WebTravel</span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-300">
                            Making the world accessible, one journey at a time.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Destinations</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/destinations" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            All Destinations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/destinations/japan" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Japan
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} WebTravel MVP. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
