import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

interface ProductsViewProps {
  lang: 'bn' | 'en';
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onAddToCart: (product: Product, weight: '250g' | '500g' | '1kg', price: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: Product[];
  onOpenQuickView: (product: Product) => void;
}

const CATEGORIES = [
  { id: 'all', labelBn: 'সব মধুসমূহ', labelEn: 'All Honeys' },
  { id: 'sundarban', labelBn: 'সুন্দরবন মধু', labelEn: 'Sundarbans' },
  { id: 'mustard', labelBn: 'সরিষা ফুলের মধু', labelEn: 'Mustard Flower' },
  { id: 'litchi', labelBn: 'লিচু ফুলের মধু', labelEn: 'Litchi Flower' },
  { id: 'kalojira', labelBn: 'কালোজিরা মধু', labelEn: 'Black Seed (Cumin)' },
  { id: 'mixed', labelBn: 'মিশ্র ফুলের মধু', labelEn: 'Mixed Forest' },
];

export default function ProductsView({
  lang,
  searchQuery,
  setSearchQuery,
  onAddToCart,
  onToggleWishlist,
  wishlist,
  onOpenQuickView,
}: ProductsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');

  // Filter & Sort logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 2. Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        p => 
          p.nameBn.toLowerCase().includes(q) || 
          p.nameEn.toLowerCase().includes(q) || 
          p.descriptionBn.toLowerCase().includes(q) || 
          p.descriptionEn.toLowerCase().includes(q)
      );
    }

    // 3. Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.basePrice - b.basePrice);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.basePrice - a.basePrice);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-serif">
      
      {/* Page header title & search bar */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-stone-200">
        <div className="space-y-2">
          <span className="font-sans text-xs bg-amber-100 text-amber-950 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {lang === 'bn' ? 'মধু সংগ্রহ ক্যাটালগ' : 'Raw Organic Harvests'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
            {lang === 'bn' ? 'আমাদের শতভাগ খাঁটি মধুসমূহ' : 'Our Pure Raw Honey Collection'}
          </h1>
          <p className="font-sans text-stone-500 text-xs sm:text-sm max-w-xl">
            {lang === 'bn' 
              ? 'নিচে আমাদের সংগৃহীত সকল মধুর তালিকা দেওয়া হলো। ১০০গ্রাম থেকে ১ কেজি জারের অপশন সিলেক্ট করে সরাসরি অর্ডার দিন।' 
              : "Discover real artisanal honeys collected by traditional bee keepers in beautiful wild sanctuaries of Bangladesh."}
          </p>
        </div>

        {/* Dynamic keyword Search */}
        <div className="w-full md:w-80 flex bg-stone-50 border border-amber-250 py-2 px-3 rounded-xl focus-within:ring-1 focus-within:ring-amber-500 font-sans">
          <input
            type="text"
            className="bg-transparent border-none text-xs text-stone-800 placeholder-stone-400 focus:outline-none w-full"
            placeholder={lang === 'bn' ? 'মধু বা ক্যাটাগরি খুঁজুন...' : 'Search honeys...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={16} className="text-amber-700 shrink-0 ml-1.5" />
        </div>
      </div>

      {/* Categories Horizontal scrolling Selector & Sorting Filters bar */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
        
        {/* Category bar */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs py-2 px-4 rounded-xl font-sans font-semibold transition cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-amber-900 text-white border-amber-900 shadow-sm font-bold'
                  : 'bg-white text-stone-605 border-stone-200 hover:bg-stone-50 hover:text-stone-950'
              }`}
            >
              {lang === 'bn' ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Sorting Dropdowns */}
        <div className="flex items-center space-x-3 w-full lg:w-auto justify-end font-sans text-xs text-stone-600">
          <div className="flex items-center space-x-1">
            <ArrowUpDown size={14} className="text-amber-800" />
            <span>{lang === 'bn' ? 'ক্রমানুসারে সাজান:' : 'Sort By:'}</span>
          </div>
          <select
            className="bg-stone-50 border border-stone-200 rounded-lg py-2 px-2.5 text-stone-800 focus:outline-none text-xs"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="default">{lang === 'bn' ? 'ডিফল্ট' : 'Featured'}</option>
            <option value="price-low">{lang === 'bn' ? 'দাম: কম থেকে বেশি' : 'Price: Low to High'}</option>
            <option value="price-high">{lang === 'bn' ? 'দাম: বেশি থেকে কম' : 'Price: High to Low'}</option>
            <option value="rating">{lang === 'bn' ? 'জনপ্রিয়তা (রেটিং)' : 'Rating Points'}</option>
          </select>
        </div>

      </div>

      {/* Products Grid list */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-stone-500 border border-amber-200">
            <SlidersHorizontal size={24} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 font-serif">
              {lang === 'bn' ? 'কোনো ক্যাটাগরি বা মধু মেলেনি !' : 'No honeys matched!'}
            </h3>
            <p className="font-sans text-xs text-stone-500 max-w-sm">
              {lang === 'bn' 
                ? 'আপনার সার্চ কুয়েরি বা ফিল্টার পরিবর্তন করুন।' 
                : 'Please try searching for another keyword or reset the category options.'}
            </p>
          </div>
          <button
            onClick={handleClearFilters}
            className="flex items-center space-x-1 bg-amber-850 hover:bg-stone-900 text-white font-sans text-xs font-bold px-4 py-2 rounded-lg cursor-pointer transition-colors"
          >
            <RefreshCw size={12} />
            <span>{lang === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset Filters'}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some(w => w.id === product.id)}
              onOpenQuickView={onOpenQuickView}
            />
          ))}
        </div>
      )}

      {/* Trust reassurance banner in product context */}
      <div className="bg-amber-50/50 rounded-3xl p-6 border border-amber-200/50 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck size={22} />
          </div>
          <div className="space-y-1 text-left">
            <h4 className="font-bold text-stone-900 text-sm">
              {lang === 'bn' ? '১০০% ডাবল ফেরত পলিসি' : 'Lab Test Quality Standard Purity Guaranteed'}
            </h4>
            <p className="text-stone-500">
              {lang === 'bn' 
                ? 'আমাদের মধু কোনো ফিল্টারিং বা পাস্তুরাইজেশন করা হয় না, ফলে বনের পুষ্টিকর গুণ থাকে সম্পূর্ণ অখণ্ড।' 
                : 'Raw and completely unheated. We do not fine-filter out microscopic pollen grains.'}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setSearchQuery('');
            setSelectedCategory('all');
          }}
          className="bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold px-5 py-2.5 rounded-xl cursor-pointer transition-all shrink-0"
        >
          {lang === 'bn' ? 'আবার সবগুলো দেখুন' : 'View Core Catalogue'}
        </button>
      </div>

    </div>
  );
}
