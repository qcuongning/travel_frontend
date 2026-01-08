export interface Destination {
    slug: string;
    name: string;
    description: string;
    image: string;
    rating: number;
}

export interface Tour {
    id: string;
    name: string;
    destinationSlug: string;
    price: number;
    duration: string;
    image: string;
    description: string;
    itinerary: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    date: string;
    author: string;
}

// MOCK DATA
export const destinations: Destination[] = [
    {
        slug: "japan",
        name: "Japan",
        description: "Experience the perfect blend of tradition and modernity.",
        image: "/images/japan.png",
        rating: 4.9,
    },
    {
        slug: "italy",
        name: "Italy",
        description: "Enjoy the best food, art, and landscapes in Europe.",
        image: "/images/italy.png",
        rating: 4.8,
    },
    {
        slug: "iceland",
        name: "Iceland",
        description: "Explore the land of fire and ice.",
        image: "/images/iceland.png",
        rating: 4.9,
    },
];

export const tours: Tour[] = [
    {
        id: "jp-tokyo-kyoto",
        name: "Tokyo to Kyoto Adventure",
        destinationSlug: "japan",
        price: 2500,
        duration: "10 Days",
        image: "/images/tokyo.png",
        description: "A complete journey through Japan's Golden Route.",
        itinerary: ["Day 1: Arrival in Tokyo", "Day 2: Tokyo City Tour", "Day 3: Mt Fuji", "Day 4: Shinkansen to Kyoto"],
    },
    {
        id: "it-amalfi",
        name: "Amalfi Coast Escape",
        destinationSlug: "italy",
        price: 1800,
        duration: "7 Days",
        image: "/images/amalfi.png",
        description: "Relax on the beautiful Italian coast.",
        itinerary: ["Day 1: Naples", "Day 2: Pompeii", "Day 3-6: Positano & Amalfi"],
    },
];

export const posts: BlogPost[] = [
    {
        slug: "top-10-japan",
        title: "10 Things You Must Do in Japan",
        excerpt: "From sushi to shrines, here is the ultimate bucket list.",
        content: "Full content would go here...",
        coverImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
        date: "2024-01-15",
        author: "Sarah Traveller",
    },
];

export async function getDestinations() {
    return destinations;
}

export async function getDestination(slug: string) {
    return destinations.find((d) => d.slug === slug);
}

export async function getTours(destinationSlug?: string) {
    if (destinationSlug) {
        return tours.filter((t) => t.destinationSlug === destinationSlug);
    }
    return tours;
}

export async function getTour(id: string) {
    return tours.find((t) => t.id === id);
}

// ... (previous code)

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: "tshirt-japan",
        name: "Tokyo Street T-Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
        description: "Premium cotton t-shirt with Tokyo street art design."
    },
    {
        id: "mug-travel",
        name: "Adventure Enamel Mug",
        price: 15,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
        description: "Durable enamel mug for your camping trips."
    },
    {
        id: "totebag-map",
        name: "World Map Tote Bag",
        price: 20,
        image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?w=800&q=80",
        description: "Eco-friendly tote bag for your daily essentials."
    }
];

export async function getProducts() {
    return products;
}

export async function getPosts() {
    return posts;
}
