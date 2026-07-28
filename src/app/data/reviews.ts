// src/app/data/reviews.ts
export type Review = {
  id: number;
  rating: number;
  text: string;
  author: string;
  business?: string;
};

export const REVIEWS: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "We needed someone to handle our cocoa exports and honestly I was skeptical at first. But these guys came through 💯. From the documentation to clearing at the port, everything was seamless. Our shipment arrived in Rotterdam ahead of schedule. Will definitely be using them again for our next batch.",
    author: "Adebola A.",
    business: "Apex Export Ltd",
  },
  {
    id: 2,
    rating: 5,
    text: "I've worked with a lot of service companies in Lagos and most of them just talk. Hamdan actually delivers. They supervised our property development in Lekki and the level of detail in their reports was impressive. Weekly updates, photos, everything. My mind was at ease the whole time 🙏",
    author: "Chidinma N.",
    business: "Green Agro",
  },
  {
    id: 3,
    rating: 5,
    text: "Their logistics network is something else. We were struggling with fuel supply for our operations in the Niger Delta and Hamdan sorted it out within days. Competitive pricing too. Saved us close to 18% on transport costs compared to what we were paying before. Very very impressed.",
    author: "Emeka O.",
    business: "OilCo Nigeria",
  },
  {
    id: 4,
    rating: 4,
    text: "Solid team. We brought them in for business consulting when we were expanding into West Africa and they gave us a clear roadmap with actual numbers, not just PowerPoint slides 😅. Only reason it's not 5 stars is because the initial response took a few days, but once they started the work was top notch.",
    author: "Fatima S.",
    business: "Lagos Real Estates",
  },
  {
    id: 5,
    rating: 5,
    text: "Our food packaging requirements are very specific because we export to the EU market. Hamdan understood the compliance standards immediately and delivered packaging that met every single requirement. No back and forth, no excuses. Just results. That's rare in this industry honestly 👏",
    author: "Gbenga L.",
    business: "FoodPack Solutions",
  },
  {
    id: 6,
    rating: 5,
    text: "Been importing vehicles through them for over a year now. They handle everything from sourcing to clearing at Tin Can port. The last batch of 12 units came through without a single issue. Their customs relationships are solid. If you're in the auto business you need these people on your side fr.",
    author: "Hussein K.",
    business: "AutoDrive Imports",
  },
  {
    id: 7,
    rating: 5,
    text: "We contracted Hamdan for waste management at our industrial site and they transformed the whole operation. Proper segregation, timely collection, full compliance documentation. Our environmental audit scores went up significantly. The professionalism is unmatched 🔥",
    author: "Ijeoma M.",
    business: "EcoClean Services",
  },
  {
    id: 8,
    rating: 4,
    text: "Great experience overall. We used their agricultural export services for our cashew shipments to Vietnam. They handled the phytosanitary certificates and quality inspections without us having to chase anyone. Communication was clear throughout. Already planning our next shipment with them 🤝",
    author: "Jide O.",
    business: "TechGear Distributors",
  },
];
