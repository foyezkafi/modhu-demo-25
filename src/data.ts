import { Product, Testimonial, BlogPost, FAQ } from './types';

export const HERO_BANNER_IMAGE = '/src/assets/images/mustard_field_hero_1781615965991.jpg';
export const STORY_IMAGE = '/src/assets/images/honey_collection_1781616044415.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'sundarban-wild',
    nameBn: 'প্রিমিয়াম সুন্দরবন খলিশা ও বনফুল মধু',
    nameEn: 'Premium Sundarbans Khalisha & Wild Honey',
    category: 'sundarban',
    categoryBn: 'সুন্দরবন মধু',
    categoryEn: 'Sundarbans Honey',
    basePrice: 380,
    weightPrices: {
      '250g': 380,
      '500g': 700,
      '1kg': 1350
    },
    descriptionBn: 'সুন্দরবনের গভীর ম্যানগ্রোভ বনের খলিশা ফুল এবং অন্যান্য বুনো ফুল থেকে মৌমাছিদের দ্বারা সংগৃহীত শতভাগ খাঁটি মধু। কোন কৃত্রিম চিনি বা কেমিক্যাল নেই। এতে রয়েছে অনন্য প্রাকৃতিক সুবাস ও স্বাদ।',
    descriptionEn: '100% pure & natural honey harvested by bees from Khalisha and wild mangrove blossoms deep inside the Sundarbans forest. Unheated and unprocessed, keeping all original therapeutic benefits intact.',
    benefitsBn: [
      'রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।',
      'প্রাকৃতিক অ্যান্টি-অক্সিডেন্টে ভরপুর।',
      'হজম প্রক্রিয়ায় দারুন ও কার্যকরী ভূমিকা রাখে।',
      'ঠান্ডা, সর্দি ও কাশির নিরাময়ে অত্যন্ত উপযোগী।'
    ],
    benefitsEn: [
      'Boosts immune system naturally.',
      'Rich in strong natural antioxidants.',
      'Acts as an excellent digestive aid.',
      'Highly effective for soothing cold and throat coughs.'
    ],
    rating: 4.9,
    reviewsCount: 148,
    image: '/src/assets/images/sundarban_honey_1781615993431.jpg',
    isAvailable: true,
    isBestSeller: true
  },
  {
    id: 'mustard-flower',
    nameBn: 'খাঁটি সরিষা ফুলের মধু (ক্রিমি ও অর্গানিক)',
    nameEn: 'Pure Mustard Flower Honey (Creamy & Organic)',
    category: 'mustard',
    categoryBn: 'সরিষা ফুলের মধু',
    categoryEn: 'Mustard Honey',
    basePrice: 240,
    weightPrices: {
      '250g': 240,
      '500g': 450,
      '1kg': 800
    },
    descriptionBn: 'শীতকালের সোনালী সরিষা ফুলের মাঠ থেকে সংগৃহীত অত্যন্ত পুষ্টিগুণ সম্পন্ন মধু। হালকা হলুদাভ রঙের এই মধু নির্দিষ্ট তাপমাত্রায় প্রাকৃতিকভাবেই জমে মাখনের মতো ক্রিমি গঠন ধারণ করে, যা পাউরুটি বা রুটির সাথে খেতে দারুণ!',
    descriptionEn: 'Harvested from the beautiful yellow mustard fields of Bangladesh in winter. This raw honey naturally solidifies into a creamy, buttery spread with a sweet floral note, rich in natural glucose.',
    benefitsBn: [
      'তাৎক্ষণিক শক্তি যোগাতে সাহায্য করে।',
      'ঠান্ডাজনিত গলা ব্যথা দ্রুত উপশম করে।',
      'ত্বকের উজ্জ্বলতা এবং চুলের স্বাস্থ্য ভালো রাখে।',
      'শিশুদের স্মৃতিশক্তি বিকাশে দারুণ কার্যকরী।'
    ],
    benefitsEn: [
      'Provides a quick boost of immediate natural energy.',
      'Soothes throat inflammation and cold conditions.',
      'Promotes healthy skin glow and hair vitality.',
      'Assists in supporting children memory and concentration.'
    ],
    rating: 4.8,
    reviewsCount: 96,
    image: '/src/assets/images/mustard_honey_1781616008743.jpg',
    isAvailable: true,
    isBestSeller: true
  },
  {
    id: 'kalojira-flower',
    nameBn: 'ঔষধি গুণসম্পন্ন কালোজিরা ফুলের মধু',
    nameEn: 'Medicinal Black Seed (Kalojira) Flower Honey',
    category: 'kalojira',
    categoryBn: 'কালোজিরা মধু',
    categoryEn: 'Black Seed Honey',
    basePrice: 480,
    weightPrices: {
      '250g': 480,
      '500g': 850,
      '1kg': 1600
    },
    descriptionBn: 'কালোজিরা ফুলের অ্যান্টি-অক্সিডেন্ট এবং মধুর শক্তি নিয়ে তৈরি অন্যতম জনপ্রিয় ও ঔষধি মধু। এর রঙ সাধারণত গাঢ় কালচে বাদামি হয়ে থাকে। ডায়াবেটিস রোগী এবং বয়স্কদের জন্য অত্যন্ত উপকারী প্রাকৃতিক পথ্য।',
    descriptionEn: 'The absolute king of herbal honeys, gathered directly from Black Cumin (Kalojira) fields. It carries a distinctive deep mahogany hue and powerful immune-building compounds. Highly prized for its medicinal values.',
    benefitsBn: [
      'সর্বরোগের মহৌষধ হিসেবে পরিচিত কালোজিরার পুষ্টিগুণ সমৃদ্ধ।',
      'রক্তচাপ ও কোলেস্টেরল নিয়ন্ত্রণে সহায়তা করে।',
      'হাঁপানি বা শ্বাসকষ্টের সমস্যা লাঘব করে।',
      'শারীরিক দুর্বলতা কাটিয়ে দীর্ঘস্থায়ী কর্মক্ষমতা বাড়ায়।'
    ],
    benefitsEn: [
      'Combines the miraculous health properties of black cumin.',
      'Aids in regulation of blood pressure and bad cholesterol.',
      'Assists in alleviating minor asthma symptoms.',
      'Soothes physical weakness and maximizes long-term stamina.'
    ],
    rating: 5.0,
    reviewsCount: 112,
    image: '/src/assets/images/kalojira_honey_1781616025441.jpg',
    isAvailable: true,
    isBestSeller: true
  },
  {
    id: 'litchi-flower',
    nameBn: 'সুমিষ্ট লিচু ফুলের প্রাকৃতিক মধু',
    nameEn: 'Sweet Litchi Flower Natural Honey',
    category: 'litchi',
    categoryBn: 'লিচু ফুলের মধু',
    categoryEn: 'Litchi Honey',
    basePrice: 280,
    weightPrices: {
      '250g': 280,
      '500g': 500,
      '1kg': 900
    },
    descriptionBn: 'দিনাজপুরের সেরা লিচু বাগান থেকে লিচুর মুকুল ফোটার মৌসুমে মৌমাছির সাহায্যে সংগৃহীত। এর প্রধান আকর্ষণ হল মিষ্টি ফলমূলের অতুলনীয় ঘ্রাণ ও পাতলা পানির মতো চমৎকার স্বচ্ছ সোনালী রঙ। বাচ্চারা এই মধু খুব পছন্দ করে।',
    descriptionEn: 'Harvested from the luscious litchi orchards of Dinajpur. Known for its pleasant translucent golden glow, sweet fruity aroma, and thin consistency. Extremely popular and highly favored by children.',
    benefitsBn: [
      'খাবারে রুচি বাড়াতে দারুণ সাহায্য করে।',
      'ভিটামিন-সি ও খনিজ উপাদানে বিশেষ সমৃদ্ধ।',
      'উচ্চ রক্তচাপ নিয়ন্ত্রণে সাহায্য করে।',
      'হালকা উপশমকারী হিসেবে ঘুমের মান উন্নত করে।'
    ],
    benefitsEn: [
      'Excellent natural appetite booster for toddlers.',
      'Highly enriched in Vitamin C and essential minerals.',
      'Helps to relax nervous strain and lower stress levels.',
      'Acts as a mild natural sedative to aid deep restful sleep.'
    ],
    rating: 4.7,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=500',
    isAvailable: true
  },
  {
    id: 'mixed-flower',
    nameBn: 'প্রাকৃতিক বহুমুখী বুনো ফুল থেকে সংগৃহীত মধু',
    nameEn: 'Natural Organic Mixed Flower Honey',
    category: 'mixed',
    categoryBn: 'Mixed Flower Honey',
    categoryEn: 'Mixed Flower Honey',
    basePrice: 260,
    weightPrices: {
      '250g': 260,
      '500g': 480,
      '1kg': 850
    },
    descriptionBn: 'বাংলাদেশের বিভিন্ন গ্রামীণ ঋতুভিক্তিক বুনো ফুল থেকে প্রাকৃতিকভাবে মৌমাছি দ্বারা আহরিত মিশ্র ফুলের খাঁটি মধু। এতে রয়েছে সব ফুল থেকেই চুষে নেওয়া উপাদানের বৈচিত্র্যময় স্বাদ ও চমৎকার এক বুনো ঘ্রাণ।',
    descriptionEn: 'Gathered by honeybees from diverse wild seasonal flowers in the pristine rural countryside of Bangladesh. Features a rich multivalent flavor profile with multi-floral health elements.',
    benefitsBn: [
      'বহুমুখী ফুলের সমন্বিত ঔষধি গুণের সমাহার।',
      'ইনস্ট্যান্ট ক্যালোরি ও কর্মক্ষমতা যোগায়।',
      'হৃদযন্ত্র ভালো রাখতে ও পেশী সচল রাখতে সহায়ক।',
      'নিয়মিত পানে রক্তের হিমোগ্লোবিন বাড়ায়।'
    ],
    benefitsEn: [
      'Combines dynamic health components of versatile countryside blooms.',
      'Delivers an instant source of robust organic energy.',
      'Supports healthy heart contractions and muscular flow.',
      'Helps raise cellular hemoglobin counts over regular intake.'
    ],
    rating: 4.6,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=500',
    isAvailable: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'ফারহান চৌধুরী',
    location: 'গুলশান, ঢাকা',
    rating: 5,
    commentBn: 'আমি সুন্দরবন খলিশা মধু ও সরিষা ফুলের মধু এক কেজি করে অর্ডার করেছিলাম। সুন্দরবনের মধুর গন্ধটা এত চমৎকার, খুললেই মন জুড়িয়ে যায়। আর সরিষার মধু জমার পর বাচ্চাদের পাউরুটির সাথে দেওয়া হয়েছে, তারা অনেক পছন্দ করেছে! প্যাকেজিং অসাধারণ ছিল।',
    commentEn: 'Ordered Sundarban Khalisha and Mustard honey. The organic aroma of the wild Sundarbans honey is phenomenal right after opening the bottle. Absolutely stunning customer experience and prompt delivery.',
    date: '২০২৬-০৫-১২'
  },
  {
    id: 't2',
    name: 'ডাঃ সানজিদা রহমান',
    location: 'হালিশহর, চট্টগ্রাম',
    rating: 5,
    commentBn: 'পেশায় একজন চিকিৎসক হিসেবে আমি সবসময় খাঁটি কিছুর সন্ধান করি। বিশেষ করে কালোজিরা ফুলের মধুটার গুণমান ল্যাবরেটরি টেস্ট সমতুল্য। সর্দি-কাশির পথ্য হিসেবে এটি চমৎকার কাজ করছে। শুদ্ধ মধু ব্র্যান্ডের প্রতি আস্থা বহুগুণ বেড়ে গেল।',
    commentEn: 'As a medical professional, purity is my prime concern. The Black Seed honey quality is authentic and therapeutically beneficial. Resolved some throat congestion quickly. Highly trusted brand!',
    date: '২০২৬-০৬-০১'
  },
  {
    id: 't3',
    name: 'আব্দুল্লাহ আল আরিফ',
    location: 'উপশহর, সিলেট',
    rating: 5,
    commentBn: 'ক্যাশ অন ডেলিভারিতে সিলেট এক দিনে প্রোডাক্ট পেয়ে গেছি। লিচু ফুলের মধুটি অত্যন্ত ক্লিয়ার আর স্বাদ মিষ্টি। এর আসল গন্ধটা প্রশংসনীয়। মধু আসল কিনা চেনার যে বিষয়গুলো তারা ভিডিওতে দেখিয়েছে, সবগুলো পরীক্ষায় এটি উর্ত্তীর্ণ হয়েছে। ধন্যবাদ!',
    commentEn: 'Received the delivery in Sylhet in just 24 hours under Cash on Delivery. The litchi honey is brilliantly translucent and holds a true floral aroma with a light fruity flavor. Fully verified as genuine raw honey.',
    date: '২০২৬-০৬-০৫'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'benefits-of-honey',
    titleBn: 'নিয়মিত খাঁটি মধু পানের ১০টি জাদুকরী স্বাস্থ্য উপকারিতা',
    titleEn: '10 Magical Health Benefits of Drinking Pure Honey Daily',
    excerptBn: 'মধু কেবল একটি প্রাকৃতিক সুস্বাদু খাবারই নয়, এটি একাধারে রোগ প্রতিরোধ শক্তি বৃদ্ধি, প্রাকৃতিক অ্যান্টি-অক্সিডেন্ট এবং চমৎকার ঔষধি পথ্য...',
    excerptEn: 'Honey is not merely a delicious natural sweetener; it has an abundance of antioxidants, compounds that enhance immune levels, and acts as medical relief...',
    contentBn: `খাঁটি মধু মানবদেহের জন্য প্রাকৃতিক মহৌষধ স্বরূপ। প্রাচীন চিকিৎসা শাস্ত্র ও আধুনিক গবেষণা উভয় স্থানেই মধুর অসীম উপকারিতা নিয়ে আলোচনা করা হয়েছে। নিচে এর ১০টি বিশেষ উপকারিতা বর্ণনা করা হলো:

১. **রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি:** মধুতে থাকা ফাইটোনিউত্রিয়েন্টস ও অ্যান্টি-অক্সিডেন্ট দেহের রোগ প্রতিরোধ ব্যবস্থার বিকাশ ঘটায়।
২. **হৃদরোগ প্রতিরোধে সহায়িকা:** ফ্লেভোনয়েডস ও অ্যান্টি-অক্সিডেন্ট রক্তবাহী ধমনীগুলোকে সুস্থ রাখতে সাহায্য করে এবং রক্ত সঞ্চালন বৃদ্ধি করে।
৩. **ইনস্ট্যান্ট অ্যানার্জি বুস্টার:** এতে প্রধানত প্রাকৃতিক ফ্রুক্টোজ এবং গ্লুকোজ থাকায় এটি শরীরে দীর্ঘস্থায়ী শক্তি যোগায়, যা খেলোয়াড়দের জন্য অত্যন্ত কাজের।
৪. **ঠান্ডা ও কাশির ম্যাজিক নিরাময়:** ঘুমানোর আগে এক চামচ খাঁটি মধু সর্দি এবং কফ দূর করতে বিশ্বব্যাপী প্রমাণিত সমাধান।
৫. **ত্বকের প্রাকৃতিক যত্ন:** অ্যান্টি-ব্যাকটেরিয়াল এবং হিউমেক্ট্যান্ট গুণের জন্য মধু ত্বক নরম, উজ্জ্বল এবং ব্রণের দাগ দূর করতে সাহায্য করে।
৬. **হজম প্রক্রিয়া উন্নত করে:** হালকা কুসুম গরম পানিতে মধু ও লেবু মিশিয়ে খেলে কোষ্ঠকাঠিন্য দূর হয় ও যকৃত ভালো থাকে।
৭. **রক্তস্বল্পতা দূরীকরণ:** মধুতে বিদ্যমান আয়রন শরীরের রক্তের হিমোগ্লোবিন বাড়ায় ও এনিমিয়া প্রতিরোধে ভূমিকা পালন করে।
৮. **সুনিদ্রা বা অনিদ্রা নিরাময়:** ঘুমানোর আগে মধু খেলে তা ট্রিপটোফ্যান নামক অ্যামিনো অ্যাসিড উৎপাদনে উদ্দীপনা দেয় যা ভালো ঘুমে সাহায্য করে।
৯. **ক্ষত ও পোড়া স্থানে অ্যান্টিসেপটিক:** পোড়া বা কেটে যাওয়া ক্ষতস্থানে কাঁচা মধু লাগালে ব্যাক্টেরিয়া আক্রমণ করতে পারে না এবং দ্রুত চামড়া জোড়া লাগে।
১০. **স্মৃতিশক্তি বৃদ্ধি:** গবেষণায় দেখা গেছে শিশুদের মস্তিস্কের কোষগুলিকে সুরক্ষায় এবং একাগ্রতা বাড়ানোতে রোজ সকালের মধু অমৃত সমান।`,
    contentEn: `Pure raw honey is a miraculous cure-all for the human system. Both ancient medical sciences and contemporary biological discoveries praise its potential. Here are the core merits of integrating raw honey into your daily ritual:

1. **Powers the Immune Shield:** With dynamic phytonutrients and antibacterial properties, honey helps fight cellular inflammation.
2. **Improves Cardiovascular Welfare:** Heart muscles react positively to the trace anti-inflammatory elements in natural honey, stabilizing free radicals in arteries.
3. **Natural Sustained Energy:** Unlike processed sugars, honey's healthy glucose releases sustained physical energy.
4. **Throat Congestion Soother:** A single teaspoon of honey before bedtime coats inflamed pharynx linings, cutting down nocturnal coughing intervals.
5. **Dermatological Exfoliant:** Natural humectant qualities locks moisture in skin cells, leaving the face soft, resilient, and acne-free.
6. **Gut Health and Digestion:** Drinking lukewarm water with honey and lemon balances pH and clears up indigestion.
7. **Reduces Anemia Risks:** Essential trace minerals like iron and copper play an active part in constructing red blood cell counts.
8. **Improves Sleep Quality:** Triggers insulin secretion which slowly releases tryptophan, aiding natural melatonin synthesis for deeper sleep cycles.
9. **Antiseptic Application for Burns:** Raw honey contains minor hydrogen peroxide quantities that block pathogen growths on surface wounds.
10. **Enhances Neuro-Memory Elements:** Cellular nutrients assist neural connectivity, optimizing childhood memory retention.`,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=700',
    date: '১৬ জুন ২০২৬',
    readTimeBn: '৪ মিনিট',
    readTimeEn: '4 mins read',
    tagsBn: ['সুস্বাস্থ্য', 'খাঁটি মধু', 'প্রাকৃতিক পথ্য'],
    tagsEn: ['Health & Wellness', 'Raw Honey', 'Organic Cure']
  },
  {
    id: 'pure-honey-check',
    titleBn: 'ঘরে বসেই খাঁটি মধু চেনার সহজ ৫টি বৈজ্ঞানিক ও ঘরোয়া পরীক্ষা',
    titleEn: '5 Easy Scientific & Home Tests to Identify 100% Pure Honey',
    excerptBn: 'বাজারে নকল ও ভেজাল মধুর ছড়াছড়ি। কিন্তু খুব সিম্পল কয়েকটি টিপস খাটিয়ে আপনি মধু আসল না কৃত্রিম তা নিমেষেই ধরতে পারবেন...',
    excerptEn: 'The market is flooded with synthetic and adulterated syrups. Utilizing simple scientific experiments, you can immediately identify true raw honey...',
    contentBn: `নকল মধুর ভিড়ে খাঁটি মধু খুঁজে পাওয়া বেশ কঠিন হতে পারে। তবে কিছু সাধারণ প্রাকৃতিক বৈশিষ্ট্যের দিকে খেয়াল রাখলে এবং ঘরোয়া পরীক্ষা করলে আপনি নিশ্চিত হতে পারেন আপনার কেনা মধুটি খাঁটি কিনা:

১. **পানির গ্লাস পরীক্ষা (Water Test):**
একটি কাঁচের গ্লাসে পরিষ্কার পানিতে এক চামচ মধু ঢালুন। মধু যদি সরাসরি গ্লাসের নিচে গিয়ে জমা হয় এবং সাথে সাথে গলে না যায়, তবে সেটি খাঁটি। ভেজাল মধু পানিতে পড়ার সাথে সাথেই দ্রবীভূত হয়ে মিশে যায়।

২. **আগুনের পরীক্ষা (Flame Test):**
একটি দিয়াশলাইয়ের কাঠির বারুদযুক্ত মাথায় অল্প মধু মাখিয়ে নিন। এরপর সেটিকে দিয়াশলাই বাক্সে ঘষে আগুন জ্বালানোর চেষ্টা করুন। কাঠিতে যদি আগুন জ্বলে ওঠে, তবে মধু খাঁটি (কারণ খাঁটি মধুতে জলীয় অংশ খুব সুনিয়ন্ত্রিত থাকে)। ভেজাল বা ভেজা মধুতে আগুন জ্বলবে না।

৩. **ব্লটিং পেপার বা টিস্যু পেপার পরীক্ষা (Tissue Test):**
এক টুকরো সাদা টিস্যু পেপার বা ব্লটিং পেপারের ওপর কয়েক ফোঁটা মধু দিন। যদি মধু টিস্যু খুব দ্রুত শুষে নেয় এবং নিচে ভেজা দাগ পড়ে, তবে বুজবেন মধুতে অতিরিক্ত সিরাপ বা পানি মেশানো আছে। খাঁটি মধু টিস্যুর ওপরেই মুক্তোর দানার মতো স্থির থাকবে, ছড়াবে না।

৪. **বুড়ো আঙুল পরীক্ষা (Thumb Test):**
আপনার বুড়ো আঙুলের ডগায় এক ফোঁটা মধু রাখুন। যদি তা গড়িয়ে চারদিকে ছড়িয়ে পড়ে বা নিচে পড়ে যায়, তবে সেটি বিশুদ্ধ নয়। খাঁটি মধু তার আঠালো ঘনত্বের কারণে বুড়ো আঙুলের ডগাতেই জমাট বেঁধে থাকবে।

৫. **ঘ্রাণ এবং জমে যাওয়া পরীক্ষা (Aroma & Crystallization):**
- খাঁটি মধু মুখে নিলে সবসময় হালকা প্রাকৃতিক ফুলের সুবাস টের পাওয়া যাবে। ভেজাল বা চিনি গলানো মধুতে শুধুমাত্র তীব্র মিষ্টি স্বাদ থাকবে, কোন অর্গানিক ফুলের ঘ্রাণ থাকবে না।
- সুন্দরবন বা লিকুইড মধু সাধারণত জমে না, তবে শীতে সরিষা ফুলের মধু প্রাকৃতিকভাবেই ঘিয়ের মতো চমৎকার জমে যায় যাকে কৃত্রমি ভেজাল মনে করার কোনো কারণ নেই, এটিই আসল খাঁটি সরিষা মধুর প্রধান লক্ষণ।`,
    contentEn: `In a market swamped with synthetic sugar syrups, evaluating your product ensures peace of mind. Here are five easy home tests that reveal true botanical honeys:

1. **The Glass Water Test:**
Fill a clear glass with drinking water and drop a single teaspoon of honey into it. Pure honey will sink right to the bottom in a solid clump and won't dissolve instantly. Adulterated honey or sugar syrups dissolve into the water before hitting the floor.

2. **The Matches Flame Test:**
Gather a dry matchstick and lightly dip its sulfur-head into the honey. Strike it against the matchbox. If it ignites with a lively flame, your honey has low water density — a key sign of raw extraction. Adulterated products won't fire up because they contain water.

3. **The Tissue Blotting Test:**
Place a droplet of honey onto a dry white paper tissue. Pure honey remains sitting on the surface, keeping its tight spherical boundary intact. High-water content syrup gets sucked in by the fibers, creating a damp ring on the bottom.

4. **The Thumb Texture Test:**
Place a drop of honey on your thumb. Pure raw honey naturally stays upright as a thick syrup, showing its high surface tension. Synthetic products run off immediately, spreading thin across your finger.

5. **The Floral Aroma and Pure Crystallization Check:**
- Genuine honey will always produce a delightful, subtle sweet smell of real forest blossoms, while sugar syrup tastes intensely sweet without containing botanical scents.
- Don't panic if your Winter Mustard honey crystallizes. Pure unheated mustard honey naturally solidifies into a rich organic butter structure. This is normal and proves authenticity!`,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=700',
    date: '১২ জুন ২০২৬',
    readTimeBn: '৫ মিনিট',
    readTimeEn: '5 mins read',
    tagsBn: ['ঘরে বসে পরীক্ষা', 'খাঁটি মধু', 'সচেতনতা'],
    tagsEn: ['Purity Test', 'Raw Honey', 'Consumer Safety']
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    questionBn: 'আপনাদের মধু কি শতভাগ খাঁটি ও বিশুদ্ধ? এর গ্যারান্টি কি?',
    questionEn: 'Is your honey 100% pure and raw? What is your guarantee?',
    answerBn: 'আমাদের প্রতিটি ড্রপ মধু শতভাগ খাঁটি ও সরাসরি সুন্দরবনের খলিশা ফুল চাষি ও বাংলাদেশ বিজ্ঞান এবং শিল্প গবেষণা কাউন্সিল (BSTI/BCSIR) স্ট্যান্ডার্ড অনুযায়ী আহরিত। আমরা কোন রূপ ফিল্টারিং কিংবা অতিরিক্ত তাপ ব্যবহার করি না, ফলে ফুলের প্রাকৃতিক রেণু, এনজাইম অক্ষুণ্ন থাকে। যদি কেউ আমাদের মধু ল্যাব টেস্টে ভেজাল প্রমাণ করতে পারেন, আমরা ডাবল টাকা ফেরত দিতে প্রতিশ্রুতিবদ্ধ!',
    answerEn: 'Yes! Every drop of Shuddho Modhu is sourced naturally. We do not use commercial high-heat pasteurization or add chemical additives, retaining the natural pollens and enzymes. We offer an unconditional double-moneyback guarantee if any certified laboratory finds sugar-syrup or chemical adulteration in our products.'
  },
  {
    id: 'f2',
    questionBn: 'সরিষা ফুলের মধু শীতকালে জমে ঘি কিংবা মাখনের মতো কেন হয়ে যায়?',
    questionEn: 'Why does Mustard Honey freeze or solidify into a butter-like texture?',
    answerBn: 'সরিষা ফুলের মধুতে প্রাকৃতিক গ্লুকোজের পরিমাণ অত্যন্ত বেশি (গ্লুকোজ ও ফ্রুক্টোজ অনুপাত প্রায় ৮০:২০) এবং পানির পরিমাণ কম থাকে। প্রকৃতির নিয়ম অনুসারেই ঠাণ্ডা আবহাওয়ায় এই গ্লুকোজ দ্রুত দানা বাঁধতে শুরু করে এবং মাখনের মতো জমে যায়। এটিই খাঁটি সরিষা মধুর সবচেয়ে বড় ও বৈজ্ঞানিক প্রমাণ। রোদে রাখলে বা কুসুম গরম পানিতে কাঁচের পাত্রটি বসালেই এটি আবার স্বাভাবিক লিকুইড হয়ে যায়।',
    answerEn: 'Mustard honey naturally contains high levels of glucose and low moisture. When winter sets in, these glucose crystals naturally bond, creating a soft, buttery crystalline structure. This organic process proves its unheated, premium quality. Placing the glass jar in a warm water bath easily liquefies it again.'
  },
  {
    id: 'f3',
    questionBn: 'ডেলিভারি চার্জ কত এবং কত দিনের মধ্যে প্রোডাক্ট হাতে পাবো?',
    questionEn: 'What are the delivery charges and how long does it take?',
    answerBn: 'ঢাকা সিটির ভেতরে হোম ডেলিভারি চার্জ মাত্র ৬০ টাকা এবং ১ থেকে ২ দিনের মধ্যে পণ্য ঘরে পৌঁছে দেওয়া হয়। ঢাকার বাইরে পুরো বাংলাদেশে হোম ডেলিভারি চার্জ ১২০ টাকা এবং ২ থেকে ৪ দিনের মধ্যে ডেলিভারি পাওয়া যায়। এছাড়া ঢাকা সিটিতে ৫০০ টাকার ওপরে ও ঢাকার বাইরে ১৫০০ টাকার কেনাকাটায় ডেলিভারি একদম ফ্রি!',
    answerEn: 'Within Dhaka city, the home delivery is only 60 BDT, arriving within 24 to 48 hours. Outside Dhaka, we cover home delivery nationwide for 120 BDT, arriving within 2 to 4 days. We offer Free Shipping on orders above 500 BDT in Dhaka, and above 1500 BDT for rest of Bangladesh!'
  },
  {
    id: 'f4',
    questionBn: 'আমি কিভাবে আমার দেওয়া অর্ডারের ট্রাক রাখব বা ট্র্যাক করব?',
    questionEn: 'How can I track my placed order?',
    answerBn: 'আপনি যখন অর্ডার কনফার্ম করবেন, আপনাকে একটি ইউনিক ৭ সংখ্যার অর্ডার আইডি (যেমন: SM-10825) দেওয়া হবে। আমাদের ওয়েবসাইটের "অর্ডার ট্র্যাকিং" (Order Tracking) সেকশনে আপনার মোবাইল নম্বর এবং অর্ডার আইডিটি দিয়ে সাবমিট করলেই লাইভ অর্ডার স্ট্যাটাস (পেন্ডিং, প্রসেসিং, শিফট, ডেলিভারড) দেখতে পাবেন। এছাড়া আপনার ওয়াটসঅ্যাপ নাম্বারেও আমরা আপডেট পাঠিয়ে দেব।',
    answerEn: 'Upon confirming your order, you will receive a unique 7-digit track ID (e.g., SM-10825). Just head over to our "Order Tracking" section, enter your mobile phone number and Order ID to check your live order stage (Pending -> Processing -> Shipped -> Delivered).'
  }
];
