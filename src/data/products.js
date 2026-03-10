import coatImage from '../assets/images/coat.png';
import turtleneckImage from '../assets/images/turtleneck.png';
import trousersImage from '../assets/images/trousers.png';
import bootsImage from '../assets/images/boots.png';

export const products = [
    {
        id: '1',
        name: "The Oversized Wool Coat",
        category: "Outerwear",
        keywords: ["coat", "jacket", "wool", "winter", "outerwear", "The Minimalist Edit", "Urban Sanctuary", "Seasonal Edition", "Autumn Winter 2024", "Quiet Luxury Rituals"],
        price: "€895.00",
        description: "Crafted from a luxurious hand-stitched wool and cashmere blend, this signature coat features a fluid shawl collar and cocoon silhouette. The double-faced finish provides exceptional warmth without the weight.",
        image: coatImage,
        thumbnails: [
            coatImage,
            "https://images.unsplash.com/photo-1539533018221-6a2149bc701f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544022613-e87f17a7845f?q=80&w=800&auto=format&fit=crop"
        ],
        colors: [
            { label: 'Beige', value: '#D2CFC7' },
            { label: 'Charcoal', value: '#363636' },
            { label: 'Ivory', value: '#FDFBF7' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        details: [
            "90% Virgin Wool, 10% Cashmere",
            "Hand-stitched double-faced construction",
            "Oversized fit, dropped shoulders",
            "Dry clean only",
            "Made in Italy"
        ]
    },
    {
        id: '2',
        name: "Cashmere Turtleneck",
        category: "Knitwear",
        keywords: ["knit", "sweater", "cashmere", "turtleneck", "top", "Urban Sanctuary", "Seasonal Edition", "Autumn Winter 2024"],
        price: "€345.00",
        description: "A mid-weight essential knitted from exceptionally soft cashmere. Features a structured turtleneck and ribbed trims for a refined yet comfortable silhouette.",
        image: turtleneckImage,
        thumbnails: [
            turtleneckImage
        ],
        colors: [
            { label: 'Cream', value: '#F5F5F7' },
            { label: 'Black', value: '#1A1A1A' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        details: [
            "100% Mongolian Cashmere",
            "Seamless knit construction",
            "Ribbed collar, cuffs, and hem",
            "Breathable and temperature regulating"
        ]
    },
    {
        id: '3',
        name: "Tailored Trousers",
        category: "Trousers",
        keywords: ["pants", "trousers", "tailored", "wool", "bottoms", "The Minimalist Edit", "Seasonal Edition"],
        price: "€425.00",
        description: "High-waisted tailored trousers with a sharp front crease and wide-leg silhouette. Constructed from premium Italian wool gabardine for a sophisticated drape.",
        image: trousersImage,
        thumbnails: [
            trousersImage
        ],
        colors: [
            { label: 'Dark Grey', value: '#4A4A4A' },
            { label: 'Black', value: '#1A1A1A' }
        ],
        sizes: ['34', '36', '38', '40', '42'],
        details: [
            "100% Wool Gabardine",
            "Concealed zip fly",
            "Side-seam pockets",
            "Belt loops"
        ]
    },
    {
        id: '4',
        name: "Minimalist Leather Boots",
        category: "Footwear",
        keywords: ["boots", "shoes", "shoe", "footwear", "leather", "ankle boots", "Evening Noir", "Special Edition"],
        price: "€550.00",
        description: "Sculptural ankle boots crafted from smooth Italian calfskin. Features a clean-lined silhouette with a square toe and comfortable block heel.",
        image: bootsImage,
        thumbnails: [
            bootsImage
        ],
        colors: [
            { label: 'Onyx Black', value: '#1A1A1A' }
        ],
        sizes: ['36', '37', '38', '39', '40', '41'],
        details: [
            "100% Calfskin Leather",
            "70mm Block heel",
            "Internal side zip",
            "Leather lining and sole"
        ]
    },
    {
        id: '5',
        name: "Silk Twill Scarf",
        category: "Accessories",
        keywords: ["scarf", "silk", "accessory", "patterned", "twill", "Evening Noir", "Special Edition"],
        price: "€195.00",
        description: "An elongated silk scarf featuring a minimalist geometric pattern. The luxurious twill fabric provides a subtle sheen and elegant drape.",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
        thumbnails: [
            "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop"
        ],
        colors: [
            { label: 'Ivory/Black', value: '#FDFBF7' }
        ],
        sizes: ['One Size'],
        details: [
            "100% Silk Twill",
            "Hand-rolled edges",
            "Made in France"
        ]
    }
];
