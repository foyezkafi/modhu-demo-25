import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, Eye, ShieldAlert } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  lang: 'bn' | 'en';
  onAddToCart: (product: Product, weight: '250g' | '500g' | '1kg', price: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onOpenQuickView: (product: Product) => void;
}

export default function ProductCard({
  product,
  lang,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenQuickView,
}: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState<'250g' | '500g' | '1kg'>('250g');
  const currentPrice = product.weightPrices[selectedWeight];

  const handleWeightChange = (weight: '250g' | '500g' | '1kg', e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedWeight(weight);
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedWeight, currentPrice);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  return (
    <article className="group bg-white rounded-2xl border border-stone-200/50 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Top badges (Best Seller, etc) */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
        {product.isBestSeller && (
          <span className="bg-amber-600 text-white font-sans text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
            {lang === 'bn' ? 'বেস্ট সেলার' : 'Best Seller'}
          </span>
        )}
        {product.category === 'sundarban' && (
          <span className="bg-emerald-600 text-white font-sans text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
            {lang === 'bn' ? 'সুন্দরবন' : 'Sundarbans'}
          </span>
        )}
      </div>

      {/* Heart Wishlist Trigger */}
      <button
        onClick={handleWishlistClick}
        className="absolute top-3 right-3 z-10 p-2 rounded-full shadow-sm bg-white/80 hover:bg-white text-stone-500 hover:text-rose-600 transition-colors cursor-pointer"
        title={lang === 'bn' ? 'পছন্দের তালিকায় রাখুন' : 'Save to wishlist'}
      >
        <Heart size={18} className={isWishlisted ? 'fill-rose-500 text-rose-500' : ''} />
      </button>

      {/* 1. Card Media section */}
      <div 
        onClick={() => onOpenQuickView(product)}
        className="relative pt-[100%] bg-stone-50 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={lang === 'bn' ? product.nameBn : product.nameEn}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Quick view mask on hover */}
        <div className="absolute inset-0 bg-amber-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white/95 text-amber-950 text-xs font-semibold px-4 py-2 rounded-full shadow-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform font-sans">
            <Eye size={14} />
            <span>{lang === 'bn' ? 'বিস্তারিত দেখুন' : 'Quick View'}</span>
          </span>
        </div>
      </div>

      {/* 2. Text and details info */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-stone-300'
                }`}
              />
            ))}
            <span className="text-stone-500 font-sans text-xs ml-1 font-bold">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpenQuickView(product)}
            className="font-serif text-[15px] sm:text-base font-bold text-stone-900 leading-snug hover:text-amber-800 cursor-pointer min-h-[44px] line-clamp-2"
          >
            {lang === 'bn' ? product.nameBn : product.nameEn}
          </h3>

          {/* Category breadcrumb */}
          <span className="font-sans text-[11px] text-amber-700/80 font-bold block mt-1">
            Category: {lang === 'bn' ? product.categoryBn : product.categoryEn}
          </span>
        </div>

        <div>
          {/* Weight Selection Buttons */}
          <div className="mt-4">
            <label className="text-[10px] text-stone-400 font-sans uppercase font-bold tracking-wider block mb-1.5">
              {lang === 'bn' ? 'পরিমাণ (ওজন) নির্বাচন করুন' : 'Select Weight Options'}
            </label>
            <div className="grid grid-cols-3 gap-1 px-0.5">
              {(['250g', '500g', '1kg'] as const).map((wt) => (
                <button
                  key={wt}
                  onClick={(e) => handleWeightChange(wt, e)}
                  className={`text-xs py-1 rounded-lg font-semibold font-sans transition-all cursor-pointer border ${
                    selectedWeight === wt
                      ? 'bg-amber-100 text-amber-900 border-amber-500 font-bold shadow-sm'
                      : 'bg-stone-50 text-stone-600 border-stone-250/20 hover:bg-stone-100'
                  }`}
                >
                  {wt === '250g' ? (lang === 'bn' ? '২৫০গ্রাম' : '250g') : null}
                  {wt === '500g' ? (lang === 'bn' ? '৫০০গ্রাম' : '500g') : null}
                  {wt === '1kg' ? (lang === 'bn' ? '১ কেজি' : '1kg') : null}
                </button>
              ))}
            </div>
          </div>

          {/* Price display and CTA Actions */}
          <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-stone-400 font-sans leading-none uppercase font-bold tracking-wider">
                {lang === 'bn' ? 'মূল্য' : 'Price'}
              </span>
              <span className="text-lg md:text-xl font-bold text-amber-900 font-sans mt-0.5">
                ৳{currentPrice.toLocaleString('bn-BD')}
              </span>
            </div>

            <button
              onClick={handleAddClick}
              className="bg-amber-600 hover:bg-amber-700 text-white hover:scale-[1.02] active:scale-95 text-xs font-bold px-4 py-2 md:py-2.5 rounded-xl shadow-sm hover:shadow-md flex items-center space-x-1.5 transition-all text-center cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span>{lang === 'bn' ? 'কার্টে যোগ করুন' : 'Add to Bag'}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
