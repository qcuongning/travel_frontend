import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="bg-akina-light min-h-screen pt-32 pb-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <span className="text-akina-purple font-bold tracking-widest uppercase text-sm mb-4 block">Journal</span>
                    <h1 className="text-5xl font-light tracking-tight text-akina-dark mb-6">Travel Stories</h1>
                    <p className="text-akina-dark/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Inspiration, guides, and tales from the road.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="group flex flex-col gap-6 cursor-pointer">
                            <Link href={`/blog/${post.slug}`} className="relative h-64 w-full rounded-[2rem] overflow-hidden shadow-lg">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </Link>

                            <div className="space-y-3">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-akina-purple">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-2xl font-light text-akina-dark group-hover:text-akina-purple transition-colors leading-tight">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-500 font-light text-sm line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-akina-dark mt-2 group-hover:gap-4 transition-all">
                                    Read Article <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
