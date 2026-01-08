import Link from "next/link";
import Image from "next/image";
import { getDestinations } from "@/lib/data";
import { ArrowRight, Search, Play } from "lucide-react";

export default async function Home() {
  const destinations = await getDestinations();

  return (
    <div className="bg-akina-light min-h-screen text-akina-dark font-sans selection:bg-akina-lilac selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bia.jpeg" // Ensure this image exists
            alt="Alps"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Glass Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4">
          {/* Glass Card Container */}
          <div className="w-full max-w-6xl h-[80vh] mt-20 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden relative flex flex-col justify-between p-8 md:p-12">

            {/* Top Actions */}
            <div className="flex justify-between items-start text-white/80">
              <div className="p-3 rounded-full border border-white/20 backdrop-blur-md">
                <div className="w-6 h-1 flex flex-col justify-between gap-1">
                  <span className="w-full h-[1px] bg-white"></span>
                  <span className="w-2/3 h-[1px] bg-white"></span>
                </div>
              </div>
              <div className="flex gap-2 text-xs font-medium bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md uppercase tracking-wide">
                Find Tips
              </div>
            </div>

            {/* Center Title */}
            <div className="text-center text-white space-y-6">
              <h2 className="text-sm font-light tracking-[0.3em] uppercase opacity-80">Minh Phuong Travel</h2>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight">
                Hello Minh Phuong
              </h1>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md rounded-full text-sm font-medium tracking-wide transition-all">
                View trip selection
              </button>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/80 text-xs font-medium mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                093 556 788
              </div>

              <div className="flex gap-8 hidden md:flex">
                <span className="opacity-60">@akina.trips</span>
                <span className="opacity-60">akina_aa.trips</span>
                <span className="opacity-60">@AKINA_hotel</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors">
                view more about AKINA <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Purple) */}
      <section className="py-24 px-4 bg-akina-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-akina-purple rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl">
          <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-white/10">
            <Image
              src="/images/1.jpeg" // Fallback to other images
              alt="Hotel in Grenoble"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light">Our hotel is located <br /> in Grenoble</h2>
            <p className="text-white/80 leading-relaxed font-light text-sm md:text-base">
              It is a cozy and comfortable place, combining modernity with a peaceful atmosphere.
              The rooms have everything you need for a pleasant stay, and the windows offer views of the mountains and the city.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest opacity-60">Details</span>
                <p className="font-medium">See more details on our page.</p>
              </div>
              <button className="px-6 py-2 bg-white text-akina-purple rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
                View more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Trips Section (Dark) */}
      <section className="pb-24 px-4 bg-akina-light">
        <div className="max-w-6xl mx-auto bg-[#2e1a1a] rounded-[2.5rem] p-8 md:p-16 text-white text-center shadow-xl">
          <h2 className="text-3xl font-light mb-2">Team or private trips to the mountains</h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-12">
            A trip to the mountains with the team is a great way to relax, build stronger connections, and create lasting memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-left">
              <h3 className="text-xl mb-4">Book your trip</h3>
              <p className="text-sm opacity-60 mb-6">Find the perfect package for your team on our website.</p>
              <Link href="/tours" className="inline-block px-8 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200">
                View Prices
              </Link>
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden">
              <Image
                src="/images/2.jpeg"
                alt="Mountain Trip"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="text-xs font-bold bg-black/50 px-2 py-1 rounded backdrop-blur-md">Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/3.jpeg"
          alt="Footer Banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-20">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-[0.2em] mb-2 uppercase">Minh Phuong</h2>
            <span className="text-white/80 text-xl font-light tracking-widest uppercase">Hotel</span>
          </div>

          <div className="mt-12 w-full max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Search up place"
              className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-all font-light"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
