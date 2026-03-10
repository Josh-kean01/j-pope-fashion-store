import heroImage from '../assets/images/hero.png';
import coatImage from '../assets/images/coat.png';
import turtleneckImage from '../assets/images/turtleneck.png';
import trousersImage from '../assets/images/trousers.png';
import bootsImage from '../assets/images/boots.png';

export const collections = [
    {
        id: 'minimalist-edit',
        title: "The Minimalist Edit",
        subtitle: "Autumn / Winter 2024",
        story: "A study in subtraction. This collection explores the power of negative space and the beauty of essential forms. Each piece is reduced to its purest intention, allowing the quality of material and precision of cut to speak without interruption.",
        heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",
        moodImages: [
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop"
        ],
        featuredProducts: ['1', '3'],
        colorPalette: ['#D2CFC7', '#F5F5F7', '#363636'],
        quote: "Simplicity is the ultimate sophistication."
    },
    {
        id: 'evening-noir',
        title: "Evening Noir",
        subtitle: "Special Edition",
        story: "When the city transitions. Evening Noir is a collection designed for the quiet moments of the night. Featuring deep shadows, subtle textures, and silhouettes that command attention through restraint. Noir is not just a color; it's a philosophy.",
        heroImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000&auto=format&fit=crop",
        moodImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
        ],
        featuredProducts: ['4', '5'],
        colorPalette: ['#1A1A1A', '#2D2D2D', '#4A4A4A'],
        quote: "The night is the canvas for true elegance."
    },
    {
        id: 'urban-sanctuary',
        title: "Urban Sanctuary",
        subtitle: "Pre-Spring 2025",
        story: "Navigate the architectural landscape with ease. Urban Sanctuary blends technical utility with high-fashion fluidity. Designed for the modern nomad who seeks peace within the chaos of the metropolis.",
        heroImage: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2000&auto=format&fit=crop",
        moodImages: [
            "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
        ],
        featuredProducts: ['1', '2'],
        colorPalette: ['#8C8C8C', '#E5E5E5', '#242424'],
        quote: "Utility redefined for the modern wanderer."
    }
];
