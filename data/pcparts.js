// Db

const processor = [
    {
        name: "Ryzen 5 3600",
        cores: 6,
        threads: 12,
        baseClock: "3.6 GHz",
        boostClock: "4.2 GHz",
        TDP: "65W",
        architecture: "Zen 2",
        socket: "AM4",
        process: "7nm",
        oldPrice: "$229.99",
        currentPrice: "$199.99",
        slug: "ryzen_5_3600",
        cooler: "Wraith Stealth",
        images: [
            "/static/processor/ryzen_5_3600.jpg",
            "/static/processor/ryzen_5_3600_1.jpg",
            "/static/processor/ryzen_5_3600_2.jpg"
        ]
    },
    {
        name: "Ryzen 7 3700X",
        cores: 8,
        threads: 16,
        baseClock: "3.6 GHz",
        boostClock: "4.4 GHz",
        TDP: "65W",
        architecture: "Zen 2",
        socket: "AM4",
        process: "7nm",
        oldPrice: "$279.99",
        currentPrice: "$309.99",
        slug: "ryzen_7_3700x",
        cooler: "Wraith Prism",
        images: [
            "/static/processor/ryzen_7_3700x.jpg",
            "/static/processor/ryzen_7_3700x_1.jpg",
            "/static/processor/ryzen_7_3700x_2.jpg"
        ]
    },
    {
        name: "Ryzen 9 3900X",
        cores: 12,
        threads: 24,
        baseClock: "3.8 GHz",
        boostClock: "4.6 GHz",
        TDP: "105W",
        architecture: "Zen 2",
        socket: "AM4",
        process: "7nm",
        oldPrice: "$469.99",
        currentPrice: "$429.99",
        slug: "ryzen_9_3900x",
        cooler: "Wraith Prism",
        images: [
            "/static/processor/ryzen_9_3900x.jpg",
            "/static/processor/ryzen_9_3900x_1.jpg",
            "/static/processor/ryzen_9_3900x_2.jpg"
        ]
    },
    {
        name: "Ryzen 9 3950X",
        cores: 16,
        threads: 32,
        baseClock: "3.5 GHz",
        boostClock: "4.7 GHz",
        TDP: "105W",
        architecture: "Zen 2",
        socket: "AM4",
        process: "7nm",
        oldPrice: "$699.99",
        currentPrice: "$729.99",
        slug: "ryzen_9_3950x",
        cooler: "No Cooler",
        images: [
            "/static/processor/ryzen_9_3950x.jpg",          
            "/static/processor/ryzen_9_3950x_1.jpg",          
            "/static/processor/ryzen_9_3950x_2.jpg"       
        ]
    },
    {
        name: "Ryzen 9 5900X",
        cores: 12,
        threads: 24,
        baseClock: "3.7 GHz",
        boostClock: "4.8 GHz",
        TDP: "105W",
        architecture: "Zen 3",
        socket: "AM4",
        process: "7nm",
        oldPrice: "$769.99",
        currentPrice: "$829.99",
        slug: "ryzen_9_5900x",
        cooler: "No Cooler",
        images: [
            "/static/processor/ryzen_9_3950x.jpg",          
            "/static/processor/ryzen_9_3950x_1.jpg",          
            "/static/processor/ryzen_9_3950x_2.jpg"
        ]
    },
    {
        name: "AMD Ryzen 9 7950X",
        cores: 24,
        threads: 48,
        baseClock: "3.6 GHz",
        boostClock: "5.0 GHz",
        TDP: "140W",
        architecture: "Zen 4",
        socket: "AM4",
        process: "5nm",
        oldPrice: "$999.99",
        currentPrice: "$949.99",
        cooler: "Wraith Prism RGB",
        slug: "ryzen_9_7950x",
        images: [
            "/static/processor/ryzen_9_7950x.jpg",
            "/static/processor/ryzen_9_7950x_1.jpg",
            "/static/processor/ryzen_9_7950x_2.jpg"
        ]
    },
    {
        name: "AMD Ryzen 9 9950X",
        cores: 24,
        threads: 48,
        baseClock: "3.6 GHz",
        boostClock: "5.0 GHz",
        TDP: "140W",
        architecture: "Zen 4",
        socket: "AM4",
        process: "5nm",
        oldPrice: "$999.99",
        currentPrice: "$949.99",
        cooler: "Wraith Prism RGB",
        slug: "ryzen_9_9950x",
        images: [
            "/static/processor/ryzen_9_7950x.jpg",
            "/static/processor/ryzen_9_7950x_1.jpg",
            "/static/processor/ryzen_9_7950x_2.jpg"
        ]
    },
    {
        name: "AMD Ryzen 9 9900X",
        cores: 24,
        threads: 48,
        baseClock: "3.6 GHz",
        boostClock: "5.0 GHz",
        TDP: "140W",
        architecture: "Zen 4",
        socket: "AM4",
        process: "5nm",
        oldPrice: "$999.99",
        currentPrice: "$949.99",
        cooler: "Wraith Prism RGB",
        slug: "ryzen_9_9950x",
        images: [
            "/static/processor/ryzen_9_7950x.jpg",
            "/static/processor/ryzen_9_7950x_1.jpg",
            "/static/processor/ryzen_9_7950x_2.jpg"
        ]
    }
]
const motherboards = [
    {
        brand: "ASUS",
        model: "ROG Crosshair VIII Hero",
        socket: "AM4",
        chipset: "X570",
        ram: "4 x DDR4, up to 4800MHz",
        storage: "6 x SATA, 2 x M.2",
        oldPrice: "$419.99",
        price: "$379.99",
        slug: "rog_crosshair_viii_hero",
        images: [
            "/static/motherboard/rog_crosshair_viii_hero.jpg",
            "/static/motherboard/rog_crosshair_viii_hero_1.jpg",
            "/static/motherboard/rog_crosshair_viii_hero_2.jpg"
        ]
    },
    {
        brand: "MSI",
        model: "MPG Z690 GAMING EDGE WIFI",
        socket: "AM4",
        chipset: "Z690",
        ram: "4 x DDR4, up to 4400MHz",
        storage: "6 x SATA, 2 x M.2",
        oldPrice: "$229.99",
        price: "$199.99",
        slug: "msi_z690_edge_wifi",
        images: [
            "/static/motherboard/msi_z960_edge_wifi.jpg",
            "/static/motherboard/msi_z960_edge_wifi_1.jpg",
            "/static/motherboard/msi_z960_edge_wifi_2.jpg",
        ]
    },
    {
        brand: "Gigabyte",
        model: "AORUS Z590 Elite AX",
        socket: "LGA1200",
        chipset: "Z590",
        ram: "4 x DDR4, up to 5000MHz",
        storage: "6 x SATA, 3 x M.2",
        oldPrice: "$329.99",
        price: "$289.99",
        slug: "aorus_z590_elite_ax",
        images: [
            "/static/motherboard/aorus_z590_elite_ax.jpg",
            "/static/motherboard/aorus_z590_elite_ax_1.jpg",
            "/static/motherboard/aorus_z590_elite_ax_2.jpg"
        ]
    },
    {
        brand: "ASUS",
        model: "ROG STRIX Z790-H Gaming",
        socket: "LGA1200",
        chipset: "Z790",
        ram: "4 x DDR4, up to 2933MHz",
        storage: "6 x SATA, 2 x M.2",
        oldPrice: "$199.99",
        price: "$159.99",
        slug: "rog_strix_z790h",
        images: [
            "/static/motherboard/rog_strix_z790h.jpg",
            "/static/motherboard/rog_strix_z790h_1.jpg",
            "/static/motherboard/rog_strix_z790h_2.jpg"
        ]
    },
    {
        brand: "MSI",
        model: "MAG B660 TOMAHAWK WIFI",
        socket: "AM4",
        chipset: "B660",
        ram: "4 x DDR4, up to 4600MHz",
        storage: "6 x SATA, 2 x M.2",
        oldPrice: "$319.99",
        price: "$279.99",
        slug: "msi_mag_b660_tomahawk_wifi",
        images: [
            "/static/motherboard/msi_mag_b660_tomahawk.jpg",
            "/static/motherboard/msi_mag_b660_tomahawk_1.jpg",
            "/static/motherboard/msi_mag_b660_tomahawk_2.jpg"
        ]
    },
    {
        brand: "Gigabyte",
        model: "B550 VISION D",
        socket: "AM4",
        chipset: "B550",
        ram: "4 x DDR4, up to 5200MHz",
        storage: "6 x SATA, 2 x M.2",
        oldPrice: "$399.99",
        price: "$259.99",
        slug: "gigabyte_b550_vision_d",
        images: [
            "/static/motherboard/b550_vision_d.jpg",
            "/static/motherboard/b550_vision_d_1.jpg",
            "/static/motherboard/b550_vision_d_2.jpg",
            "/static/motherboard/b550_vision_d_3.jpg"
        ]
    },
    {
        brand: "ASRock",
        model: "Z590 Taichi",
        socket: "LGA1200",
        chipset: "Z590",
        ram: "4 x DDR4, up to 4666MHz",
        storage: "8 x SATA, 3 x M.2",
        oldPrice: "$459.99",
        price: "$349.99",
        slug: "asrock_z590_taichi",
        images: [
            "/static/motherboard/asrock_z590_taichi.jpg",
            "/static/motherboard/asrock_z590_taichi_1.jpg",
            "/static/motherboard/asrock_z590_taichi_2.jpg",
            "/static/motherboard/asrock_z590_taichi_3.jpg"
        ]
    },
    {
        brand: "MSI",
        model: "B450 GAMING PRO CARBON MAX ATX WIFI",
        socket: "AM4",
        chipset: "B450",
        ram: "4 x DDR4, up to 4133MHz",
        storage: "6 x SATA, 2 x M.2",
        price: "$149.99",
        slug: "b450_gaming_pro_carbon_max_atx_wifi",
        images: [
            "/static/motherboard/msi_b450_gaming_pro.jpg",
            "/static/motherboard/msi_b450_gaming_pro_1.jpg",
            "/static/motherboard/msi_b450_gaming_pro_2.jpg"
        ]
    },
    {
        brand: "ASUS",
        model: "TUF Gaming X570-PRO (Wi-Fi 6)",
        socket: "AM4",
        chipset: "X570",
        ram: "4 x DDR4, up to 5100MHz",
        storage: "8 x SATA, 2 x M.2",
        price: "$239.99",
        slug: "asus_tuf_gaming_x570_pro",
        images: [
            "/static/motherboard/tuf_gaming_x570_pro.jpg",
            "/static/motherboard/tuf_gaming_x570_pro_1.jpg",
            "/static/motherboard/tuf_gaming_x570_pro_2.jpg",
            "/static/motherboard/tuf_gaming_x570_pro_3.jpg",
        ]
    },
    {
        brand: "ASRock",
        model: "B550 Phantom Gaming 4",
        socket: "AM4",
        chipset: "B550",
        ram: "4 x DDR4, up to 4733MHz",
        storage: "4 x SATA, 1 x M.2",
        price: "$129.99",
        slug: "asrock_b550_gaming_4",
        images: [
            "/static/motherboard/asrock_b550_phantom_4.jpg",
            "/static/motherboard/asrock_b550_phantom_4_1.jpg",
            "/static/motherboard/asrock_b550_phantom_4_2.jpg",
            "/static/motherboard/asrock_b550_phantom_4_3.jpg",
        ]
    }
];
const graphicsCards = [
    {
        name: "NVIDIA GeForce RTX 3090",
        VRAM: "24 GB GDDR6X",
        CUDA_Cores: 10496,
        boostClock: "1.70 GHz",
        memorySpeed: "19.5 Gbps",
        TDP: "350W",
        oldPrice: "$1499.99",
        currentPrice: "$1399.99",
        slug: "nvidia_geforce_rtx_3090",
        images: [
            "/static/graphicscard/nvidia_rtx_3090.jpg",
            "/static/graphicscard/nvidia_rtx_3090_1.jpg",
            "/static/graphicscard/nvidia_rtx_3090_2.jpg"
        ]
    },
    {
        name: "NVIDIA GeForce RTX 3080",
        VRAM: "10 GB GDDR6X",
        CUDA_Cores: 8704,
        boostClock: "1.71 GHz",
        memorySpeed: "19 Gbps",
        TDP: "320W",
        oldPrice: "$799.99",
        currentPrice: "$729.99",
        slug: "nvidia_geforce_rtx_3080",
        images: [
            "/static/graphicscard/asus_tuf_nvidia_3080.jpg",
            "/static/graphicscard/asus_tuf_nvidia_3080_1.jpg",
            "/static/graphicscard/asus_tuf_nvidia_3080_2.jpg"
        ]
    },
    {
        name: "NVIDIA GeForce RTX 3070",
        VRAM: "8 GB GDDR6",
        CUDA_Cores: 5888,
        boostClock: "1.73 GHz",
        memorySpeed: "14 Gbps",
        TDP: "220W",
        oldPrice: "$599.99",
        currentPrice: "$549.99",
        slug: "nvidia_geforce_rtx_3070",
        images: [
            "/static/graphicscard/nvidia_rtx_3070.jpg",
            "/static/graphicscard/nvidia_rtx_3070_1.jpg",
            "/static/graphicscard/nvidia_rtx_3070_2.jpg",
            "/static/graphicscard/nvidia_rtx_3070_3.jpg"
        ]
    },
    {
        name: "AMD Radeon RX 6900 XT",
        VRAM: "16 GB GDDR6",
        StreamProcessors: 5120,
        boostClock: "2.25 GHz",
        memorySpeed: "16 Gbps",
        TDP: "300W",
        oldPrice: "$999.99",
        currentPrice: "$949.99",
        slug: "amd_radeon_rx_6900_xt",
        images: [
            "/static/graphicscard/amd_radeon_6900_xt.jpg",
            "/static/graphicscard/amd_radeon_6900_xt_1.jpg",
            "/static/graphicscard/amd_radeon_6900_xt_2.jpg",
            "/static/graphicscard/amd_radeon_6900_xt_3.jpg"
        ]
    },
    {
        name: "AMD Radeon RX 6800 XT",
        VRAM: "16 GB GDDR6",
        StreamProcessors: 4608,
        boostClock: "2.25 GHz",
        memorySpeed: "16 Gbps",
        TDP: "300W",
        oldPrice: "$649.99",
        currentPrice: "$629.99",
        slug: "amd_radeon_rx_6800_xt",
        images: [
            "/static/graphicscard/amd_radeon_6800_xt.jpg",
            "/static/graphicscard/amd_radeon_6800_xt_1.jpg",
            "/static/graphicscard/amd_radeon_6800_xt_2.jpg"
        ]
    }
];
const ssds = [
    {
        brand: "Samsung",
        model: "970 EVO Plus",
        capacity: "1TB",
        type: "NVMe M.2",
        readSpeed: "3,500 MB/s",
        writeSpeed: "3,300 MB/s",
        oldPrice: "$249.99",
        currentPrice: "$229.99",
        slug: "samsung_970_evo_plus",
        images: [
            "/static/ssd/samsung_970_evo_plus.jpg",
            "/static/ssd/samsung_970_evo_plus_1.jpg",
            "/static/ssd/samsung_970_evo_plus_2.jpg"
        ]
    },
    {
        brand: "Western Digital",
        model: "WD Black SN750",
        capacity: "1TB",
        type: "NVMe M.2",
        readSpeed: "3,470 MB/s",
        writeSpeed: "3,000 MB/s",
        oldPrice: "$239.99",
        currentPrice: "$219.99",
        slug: "wd_black_sn750",
        images: [
            "/static/ssd/wd_black_sn750.jpg",
            "/static/ssd/wd_black_sn750_1.jpg",
            "/static/ssd/wd_black_sn750_2.jpg"
        ]
    },
    {
        brand: "Crucial",
        model: "MX500",
        capacity: "1TB",
        type: "SATA 2.5-inch",
        readSpeed: "560 MB/s",
        writeSpeed: "510 MB/s",
        oldPrice: "$109.99",
        currentPrice: "$99.99",
        slug: "crucial_mx500",
        images: [
            "/static/ssd/crucial_mx500.jpg",
            "/static/ssd/crucial_mx500_1.jpg",
            "/static/ssd/crucial_mx500_2.jpg"
        ]
    },
    {
        brand: "Samsung",
        model: "860 EVO",
        capacity: "1TB",
        type: "SATA 2.5-inch",
        readSpeed: "550 MB/s",
        writeSpeed: "520 MB/s",
        oldPrice: "$139.99",
        currentPrice: "$129.99",
        slug: "samsung_860_evo",
        images: [
            "/static/ssd/samsung_860_evo.jpg",
            "/static/ssd/samsung_860_evo_1.jpg",
            "/static/ssd/samsung_860_evo_2.jpg"
        ]
    },
    {
        brand: "Sabrent",
        model: "Rocket Q",
        capacity: "1TB",
        type: "NVMe M.2",
        readSpeed: "3,200 MB/s",
        writeSpeed: "2,000 MB/s",
        oldPrice: "$119.99",
        currentPrice: "$109.99",
        slug: "sabrent_rocket",
        images: [
            "/static/ssd/sabrent.jpg",
            "/static/ssd/sabrent-1.jpg",
            "/static/ssd/sabrent-2.jpg"
        ]
    }
];
const rams = [
    {
        brand: "Corsair",
        model: "Vengeance LPX",
        capacity: "16GB (2 x 8GB)",
        speed: "DDR4 3200MHz",
        latency: "CL16",
        voltage: "1.35V",
        oldPrice: "$89.99",
        currentPrice: "$79.99",
        slug: "corsair_vengence_lpx",
        images: [
            "/static/ram/corsair_vengence_lpx.jpg",
            "/static/ram/corsair_vengence_lpx_1.jpg",
            "/static/ram/corsair_vengence_lpx_2.jpg",
        ]
    },
    {
        brand: "Kingston",
        model: "HyperX Fury",
        capacity: "16GB (2 x 8GB)",
        speed: "DDR4 2666MHz",
        latency: "CL15",
        voltage: "1.2V",
        oldPrice: "$84.99",
        currentPrice: "$74.99",
        slug: "kingston_hyperx",
        images: [
            "/static/ram/kingston_hyperx.jpg",
            "/static/ram/kingston_hyperx_1.jpg",
            "/static/ram/kingston_hyperx_2.jpg",
        ]
    },
    {
        brand: "Crucial",
        model: "Ballistix RGB",
        capacity: "32GB (4 x 8GB)",
        speed: "DDR4 3200MHz",
        latency: "CL16",
        voltage: "1.35V",
        oldPrice: "$179.99",
        currentPrice: "$169.99",
        slug: "crucial_ballistix_rgb",
        images: [
            "/static/ram/crucial_ballistix.jpg",
            "/static/ram/crucial_ballistix_1.jpg",
            "/static/ram/crucial_ballistix_2.jpg",
        ]
    },
    {
        brand: "TeamGroup",
        model: "T-Force Vulcan Z",
        capacity: "16GB (2 x 8GB)",
        speed: "DDR4 3000MHz",
        latency: "CL16",
        voltage: "1.35V",
        oldPrice: "$77.99",
        currentPrice: "$69.99",
        slug: "teamgroup_t-force_vulcan",
        images: [
            "/static/ram/vulcan_nand.jpg",
            "/static/ram/vulcan_nand_1.jpg",
            "/static/ram/vulcan_nand_2.jpg",
        ]
    }
];
module.exports = {processor, motherboards, graphicsCards, ssds, rams}