import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Leaf, 
  MapPin, 
  HelpCircle, 
  Plus, 
  Minus, 
  Award, 
  Gem, 
  Sparkles, 
  Quote, 
  ChevronDown, 
  ArrowRight,
  Star
} from 'lucide-react';
import { Product, Testimonial, FAQ } from '../types';
import { PRODUCTS, TESTIMONIALS, FAQS, HERO_BANNER_IMAGE } from '../data';
import ProductCard from '../components/ProductCard';

interface HomeViewProps {
  lang: 'bn' | 'en';
  setActiveTab: (tab: string) => void;
  onAddToCart: (product: Product, weight: '250g' | '500g' | '1kg', price: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: Product[];
  onOpenQuickView: (product: Product) => void;
}

export default function HomeView({
  lang,
  setActiveTab,
  onAddToCart,
  onToggleWishlist,
  wishlist,
  onOpenQuickView,
}: HomeViewProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');

  const featuredProducts = PRODUCTS.slice(0, 3);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-20 font-serif">
      
      {/* 1. Hero Section with Mustard Field Background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* Cinematic parallax background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BANNER_IMAGE}
            alt="Bangladeshi Mustard Flower Field"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-amber-950/70 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-sans text-[10px] md:text-xs font-bold text-amber-200 uppercase tracking-widest">
                {lang === 'bn' ? 'শতভাগ গ্যারান্টিতে খাঁটি প্রাকৃতিক মধু' : '100% Lab Tested Raw Pure Honey'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white select-none">
              {lang === 'bn' ? (
                <>
                  খাঁটি সুন্দরবন ও <br />
                  <span className="text-amber-400">সরিষা ফুলের মধু</span>
                </>
              ) : (
                <>
                  Purest Sundarbans & <br />
                  <span className="text-amber-400">Mustard Flower Honey</span>
                </>
              )}
            </h1>

            <p className="font-sans text-xs sm:text-sm text-stone-200 leading-relaxed max-w-xl">
              {lang === 'bn' 
                ? 'সুন্দরবনের গহীন অঞ্চলের বুনো খলিশা ফুলের মধু এবং দেশীয় সরিষা ও কালোজিরা ফুলের পুষ্টিকর মধু নিয়ে এলো "শুদ্ধ মধু বাংলাদেশ"। সরাসরি চাষি ও মৌয়ালদের থেকে সংগৃহীত এই প্রাকৃতিক মধু আপনার পরিবারের সুস্বাস্থ্যের বিশ্বস্ত নিশ্চয়তা।'
                : "Experience the premium unheated organic honey direct from rural Sundarbans crop farms of Bangladesh. Prepared naturally by bees, without high heating pasteurization or artificial sweetness syrups."}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className="bg-amber-500 hover:bg-amber-600 text-amber-950 font-sans font-bold text-xs px-8 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/25 cursor-pointer transition-all hover:scale-105"
              >
                {lang === 'bn' ? 'অর্ডার করুন' : 'Order Online'}
              </button>

              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans text-xs px-8 py-3.5 rounded-xl cursor-pointer transition-all"
              >
                {lang === 'bn' ? 'পণ্য দেখুন' : 'Explore Sourcing'}
              </button>
            </div>

            {/* Micro badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left font-sans text-[10px] text-stone-300">
              <div>
                <strong className="block text-amber-400 text-base font-bold">১০,০০০+</strong>
                <span>{lang === 'bn' ? 'সুখী কাস্টমার' : 'Happy Honey Lovers'}</span>
              </div>
              <div>
                <strong className="block text-amber-400 text-base font-bold">১০০%</strong>
                <span>{lang === 'bn' ? 'অর্গানিক পরীক্ষা' : 'Pure Raw Guarantee'}</span>
              </div>
              <div>
                <strong className="block text-amber-400 text-base font-bold">২৪-৪৮ ঘণ্টা</strong>
                <span>{lang === 'bn' ? 'ঢাকা হোম ডেলিভারি' : 'Fast Dhaka Delivery'}</span>
              </div>
            </div>
          </div>

          {/* Hero Right Media Panel (Premium Floating Jar Mockup) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-amber-500/20 to-amber-300/10 rounded-full flex items-center justify-center p-6 border border-amber-400/20 shadow-2xl animate-float">
              {/* Spinning Hex back pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60 animate-pulse-slow"></div>
              
              <img
                src="/src/assets/images/sundarban_honey_1781615993431.jpg"
                alt="Shuddho Sundarban Honey Jar"
                referrerPolicy="no-referrer"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-2xl rotate-3 border border-amber-450 hover:rotate-0 transition-transform duration-500"
              />

              {/* Float Micro review bubble */}
              <div className="absolute -bottom-2 -left-6 bg-white text-stone-900 rounded-xl p-3 shadow-xl border border-amber-100 flex items-center space-x-2.5 max-w-[200px] animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 font-extrabold font-serif">5★</div>
                <div className="text-[10px] font-sans">
                  <p className="font-bold text-amber-950">"অসাধারণ স্বাদ !"</p>
                  <p className="text-stone-400">ফারহান, বাড্ডা</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Brand Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-950 text-amber-50 p-6 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border border-amber-800 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-amber-500/5 to-transparent pointer-events-none"></div>
          
          <div className="lg:col-span-2 space-y-3">
            <span className="font-sans text-[10px] text-amber-300 font-extrabold uppercase tracking-widest block">
              {lang === 'bn' ? 'অঙ্গীকারনামা' : 'Trust Oath'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'bn' ? '১০০% ভেজালমুক্ত মধুর নিশ্চিয়তা গ্যারান্টি' : '100% Pure Honey Guarantee'}
            </h3>
            <p className="font-sans text-xs text-stone-300 leading-relaxed">
              {lang === 'bn'
                ? 'আমাদের মধু সম্পূর্ণ অপরিশীলিত এবং কৃত্রিম চিনি বা গ্লুকোজ সিরাপ মুক্ত। আপনি দেশীয় যেকোনো ল্যাবরেটরি টেস্টে যদি আমাদের মধুতে সামান্যতম ভেজাল খুঁজে পান, তবে আপনার দ্বিগুণ মূল্য ফেরত দিতে আমরা অঙ্গীকারবদ্ধ।'
                : 'Processed through minimal traditional methods, safeguarding native pollens. If any lab-standard test exposes glucose filler syrup or pasteurization diluent, claim a certified double refund.'}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-amber-500 text-amber-950 font-sans font-extrabold text-xs px-6 py-4 rounded-2xl flex items-center space-x-3 shadow-lg select-none border border-amber-400 animate-pulse">
              <ShieldCheck size={32} />
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase font-extrabold tracking-wide">Lab Certified</span>
                <span className="text-[11px] font-normal leading-tight opacity-90">BSTI & BCSIR standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Premium Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3.5 max-w-xl mx-auto">
          <span className="font-sans text-xs bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block border border-amber-200/50">
            {lang === 'bn' ? 'সুপার হিট কালেকশন' : 'Staff Choice Picks'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900">
            {lang === 'bn' ? 'বিশেষভাবে সংগৃহীত মধুসমূহ' : 'Our Star Honey Jars'}
          </h2>
          <p className="font-sans text-xs text-stone-500 leading-relaxed">
            {lang === 'bn' 
              ? 'মৌয়ালদের গভীর বনের কসরত আর অভিজ্ঞ মৌচাষীদের নিষ্ঠায় আমাদের প্রতিটি কাঁচের জার ভরপুর।' 
              : 'Taste the organic floral nectar notes of deep Sundarban mangrove blossoms and winter organic mustard crop plantations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some((w) => w.id === product.id)}
              onOpenQuickView={onOpenQuickView}
            />
          ))}
        </div>

        {/* Explore all CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 text-sm font-extrabold text-amber-900 hover:text-amber-700 transition cursor-pointer"
          >
            <span>{lang === 'bn' ? 'সকল মধু ক্যাটালগ দেখুন' : 'Explore All Honey Jars'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 4. Why Choose Us Section - Bento/Grid feature style */}
      <section className="bg-amber-50/20 py-20 border-y border-amber-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="font-sans text-xs bg-amber-100 text-amber-950 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {lang === 'bn' ? 'কেন আমরা সেরা?' : 'Pure Brand Integrity'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900">
              {lang === 'bn' ? 'কেন কাস্টমাররা চোখ বন্ধ করে বিশ্বাস করেন?' : 'Why Select Shuddho Modhu?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Native extraction */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200/50 hover:border-amber-300 transition shadow-sm hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Leaf size={24} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                {lang === 'bn' ? 'শতভাগ প্রাকৃতিকভাবে আহরিত' : '100% Wild Forestry Harvest'}
              </h3>
              <p className="font-sans text-xs text-stone-500 leading-relaxed">
                {lang === 'bn' 
                  ? 'আমরা সুন্দরবন ও দেশের অন্যান্য শস্যক্ষেত্র থেকে কোনো রূপ কৃত্রিম কেমিক্যাল ও পিজারভেটিভ ছাড়াই খাঁটি প্রাকৃতিক মধু সংগ্রহ করি।' 
                  : 'Extracted directly from natural hives by native gatherers without pesticide contaminations, micro-filtration, or high boiler processing.'}
              </p>
            </div>

            {/* Quality Standard */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200/50 hover:border-amber-300 transition shadow-sm hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                {lang === 'bn' ? 'কাঁচের জারে সুরক্ষিত প্যাকিং' : 'Certified Safe Glass Container'}
              </h3>
              <p className="font-sans text-xs text-stone-500 leading-relaxed">
                {lang === 'bn'
                  ? 'প্লাস্টিক কন্টেইনারে মধু দীর্ঘদিন রাখলে তার গুণাগুণ নষ্ট হতে পারে। তাই আমরা সবসময় প্রিমিয়াম কাঁচের বোতলে মধু প্যাক করি।'
                  : 'Plastic jars decay over storage. We strictly use heavy food-safe glass jars to secure organic aroma and preserve dynamic enzyme structures.'}
              </p>
            </div>

            {/* Social Impact */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200/50 hover:border-amber-300 transition shadow-sm hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Gem size={24} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                {lang === 'bn' ? 'মৌয়াল ও কৃষকদের ন্যায্যমূল্য' : 'Supporting Native Mawalis'}
              </h3>
              <p className="font-sans text-xs text-stone-500 leading-relaxed">
                {lang === 'bn'
                  ? 'আমরা সরাসরি প্রান্তিক মৌয়াল ও চাষিদের থেকে ন্যায্য মূল্যে মধু ক্রয় করি। ফলে দেশীয় সুন্দরবনজীবী পরিবারগুলোর পাশে দাঁড়ানো সহজ হয়।'
                  : 'Sourcing at high fair-trade margins allows mangrove forest-dwellers and farmers a better livelihood to sustain rural Bangladesh.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="font-sans text-xs bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {lang === 'bn' ? 'গ্রাহকদের কথা' : 'Verified Reviews'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900">
            {lang === 'bn' ? 'হাজারো খুশি গ্রাহকদের মুগ্ধ প্রতিক্রিয়া' : 'Loved by Families Across BD'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-stone-50 p-6 rounded-2xl border border-stone-200/55 flex flex-col justify-between relative hover:shadow-lg transition">
              <Quote className="absolute top-4 right-4 text-amber-200/40" size={44} />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="font-serif text-sm text-stone-850 italic leading-relaxed">
                  "{lang === 'bn' ? t.commentBn : t.commentEn}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex justify-between items-center text-xs font-sans">
                <div>
                  <strong className="block text-stone-900 font-bold">{t.name}</strong>
                  <span className="text-stone-400 text-[10px]">{t.location}</span>
                </div>
                <span className="text-stone-400 font-mono text-[10px]">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Local Delivery Coverage details in BD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-100/30 rounded-3xl p-8 sm:p-12 border border-amber-200/40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="font-sans text-xs bg-amber-100 text-amber-950 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {lang === 'bn' ? 'ডেলিভারি কাভারেজ' : 'Local Logistics Network'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif leading-tight">
              {lang === 'bn' ? 'খুব সহজে সারা বাংলাদেশে হোম ডেলিভারি' : 'Super Fast Dispatch All Over Bangladesh'}
            </h2>
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              {lang === 'bn'
                ? 'আমরা ঢাকার সব জায়গা সহ পুরো বাংলাদেশের কুরিয়ার পার্টনারদের মাধ্যমে হোম ডেলিভারি দিয়ে থাকি। আপনাদের সুবিধার্থে ঢাকায় হোম ডেলিভারি চার্জ মাত্র ৬০ টাকা ও ঢাকার বাইরে ১২০ টাকা। ঢাকায় ৫০০টাকার ওপরে এবং ঢাকার বাইরে ১৫০০ টাকার অর্ডারে ডেলিভারি চার্জ একদম ফ্রি !'
                : 'Enjoy doorstep home shipping using secure fragile food channels. Free deliveries trigger at just 500 BDT inside Dhaka suburbans, and 1500 BDT for rest of divisions.'}
            </p>

            {/* List Cities */}
            <div className="grid grid-cols-2 gap-4 text-xs font-sans font-medium text-stone-800">
              <div className="flex items-center space-x-2">
                <MapPin className="text-amber-600" size={16} />
                <span>{lang === 'bn' ? 'ঢাকা হোম ডেলিভারি (১-২ দিন)' : 'Dhaka Home (1-2 days)'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-amber-600" size={16} />
                <span>{lang === 'bn' ? 'চট্টগ্রাম বিভাগ (২-৩ দিন)' : 'Chittagong Div (2-3 days)'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-amber-600" size={16} />
                <span>{lang === 'bn' ? 'সিলেট ও রাজশাহী (২-৪ দিন)' : 'Sylhet & Rajshahi (2-4 days)'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-amber-600" size={16} />
                <span>{lang === 'bn' ? 'খুলনা ও বরিশাল (২-৪ দিন)' : 'Khulna & Barisal (2-4 days)'}</span>
              </div>
            </div>
          </div>

          {/* Visual representations (Map/Address box) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-250/30 shadow-md space-y-4">
            <h3 className="font-serif font-bold text-amber-950 text-base">
              {lang === 'bn' ? 'আমাদের উত্তরা সেলস হেডকোয়ার্টার' : 'Our Uttara Sourcing Hub'}
            </h3>
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              {lang === 'bn'
                ? 'অর্ডার ট্র্যাকিং সিস্টেম এবং আমাদের ফ্রন্ট অফলাইন কাউন্টার উত্তরা সেক্টর ৯-এ অবস্থিত। আপনি চাইলে সশরীরে এসে বোতল দেখে যাচাই করে কেনাকাটা করতে পারেন।'
                : 'You are cordially invited to visit our local checking counter in Uttara Section 9, Dhaka to verify the honey taste profile directly from raw containers.'}
            </p>
            <div className="pt-3.5 border-t border-stone-100 space-y-2 text-xs font-sans">
              <div className="flex justify-between">
                <span className="text-stone-400">Address:</span>
                <span className="font-bold text-stone-800 pl-4 text-right">House 12, Road 5, Sector 9, Uttara, Dhaka</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Sourcing Hotline:</span>
                <span className="font-bold text-stone-800">+৮৮০ ১৭০০০-০০০০০</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Cash on Delivery:</span>
                <span className="text-emerald-600 font-extrabold">{lang === 'bn' ? 'সমর্থিত' : 'Fully Supported'}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQ Section (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="font-sans text-xs bg-amber-50 text-amber-950 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {lang === 'bn' ? 'সাধারণ প্রশ্ন ও উত্তর' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
            {lang === 'bn' ? 'মধু বিষয়ে কাস্টমারদের কৌতূহল' : 'Honey Facts & Purity Sourcing'}
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div 
                key={faq.id} 
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex justify-between items-center sm:text-base font-bold text-stone-900 font-serif bg-stone-50 cursor-pointer"
                >
                  <span>{lang === 'bn' ? faq.questionBn : faq.questionEn}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-amber-800 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <div className="p-5 border-t border-stone-200 text-xs sm:text-sm font-sans text-stone-600 leading-relaxed bg-white">
                    {lang === 'bn' ? faq.answerBn : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
