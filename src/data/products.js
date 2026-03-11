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
        stock: 3,
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
        stock: 8,
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
        stock: 2,
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
        stock: 12,
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
        stock: 15,
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
    },
    {
        id: '6',
        name: "Structured Wool Blazer",
        category: "Outerwear",
        keywords: ["blazer", "jacket", "wool", "structured", "tailored", "The Minimalist Edit", "Autumn Winter 2024", "Urban Sanctuary"],
        price: "€1,150.00",
        stock: 5,
        description: "A precisely tailored blazer in a heavyweight Italian wool. Features a clean notched lapel, padded shoulders, and a single-button fastening. The half-canvas construction ensures a jacket that moulds to the body over time.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
        thumbnails: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
        ],
        colors: [
            { label: 'Black', value: '#1A1A1A' },
            { label: 'Dark Navy', value: '#1B2A4A' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        details: [
            "100% Italian Virgin Wool",
            "Half-canvas construction",
            "Single-button fastening",
            "Interior ticket pocket",
            "Dry clean only",
            "Made in England"
        ]
    },
    {
        id: '7',
        name: "Wide-Brim Wool Felt Hat",
        category: "Accessories",
        keywords: ["hat", "felt", "wool", "wide brim", "headwear", "accessory", "Evening Noir", "The Minimalist Edit"],
        price: "€285.00",
        stock: 9,
        description: "Hand-formed from a solid block of virgin wool felt, this architectural hat features a 7cm brim with a clean, unadorned crown. A leather sweatband and matte grosgrain trim complete the understated finish.",
        image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=800&auto=format&fit=crop",
        thumbnails: [
            "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=800&auto=format&fit=crop",
        ],
        colors: [
            { label: 'Charcoal', value: '#363636' },
            { label: 'Camel', value: '#C19A6B' },
        ],
        sizes: ['One Size'],
        details: [
            "100% Virgin Wool Felt",
            "Hand-blocked construction",
            "Genuine leather sweatband",
            "Grosgrain ribbon trim",
            "Made in Italy"
        ]
    },
    {
        id: '8',
        name: "Japanese Linen Shirt",
        category: "Knitwear",
        keywords: ["shirt", "linen", "japanese", "minimal", "top", "Seasonal Edition", "Urban Sanctuary"],
        price: "€265.00",
        stock: 11,
        description: "Cut from a woven Japanese linen in a loose, relaxed silhouette with a mandarin collar and concealed placket. The fabric softens and gains character with each wear, developing a subtle natural texture over time.",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
        thumbnails: [
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4bf85a?q=80&w=800&auto=format&fit=crop",
        ],
        colors: [
            { label: 'Ecru', value: '#F2ECD9' },
            { label: 'Slate', value: '#6E7F8D' },
            { label: 'White', value: '#FAFAFA' },
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        details: [
            "100% Japanese Woven Linen",
            "Concealed button placket",
            "Mandarin collar",
            "Relaxed, oversized fit",
            "Machine wash cold"
        ]
    },
    {
        id: '9',
        name: "Leather Chelsea Boots",
        category: "Footwear",
        keywords: ["chelsea", "boots", "shoes", "footwear", "leather", "ankle boots", "Evening Noir", "The Minimalist Edit"],
        price: "€695.00",
        stock: 7,
        description: "A streamlined Chelsea boot in full-grain pebble leather. Features elastic side gussets, a round toe, and a low stacked leather heel. The Goodyear welt construction allows for future resoling.",
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop",
        thumbnails: [
            "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop",
        ],
        colors: [
            { label: 'Cognac', value: '#7B4A2D' },
            { label: 'Black', value: '#1A1A1A' },
        ],
        sizes: ['39', '40', '41', '42', '43', '44'],
        details: [
            "Full-grain pebble leather upper",
            "Goodyear welt construction",
            "Elastic side gussets",
            "Leather sole with rubber heel cap",
            "Resolable"
        ]
    },
    {
        id: '10',
        name: "Braided Leather Belt",
        category: "Accessories",
        keywords: ["belt", "leather", "woven", "braided", "accessory", "Seasonal Edition"],
        price: "€145.00",
        stock: 20,
        description: "A hand-braided belt in full-grain Italian leather with a matte silver pin buckle. The open-weave construction allows for flexible adjustment, making this a versatile foundation piece for any trouser.",
        image: "https://unsplash.com/photos/5eifdK4c8lo/download?force=true&w=800",
        thumbnails: [
            "https://unsplash.com/photos/5eifdK4c8lo/download?force=true&w=800",
        ],
        colors: [
            { label: 'Tan', value: '#C69E5A' },
            { label: 'Black', value: '#1A1A1A' },
        ],
        sizes: ['85cm', '90cm', '95cm', '100cm'],
        details: [
            "Hand-braided full-grain leather",
            "Matte silver pin buckle",
            "Width: 3cm",
            "Made in Italy"
        ]
    }
];
