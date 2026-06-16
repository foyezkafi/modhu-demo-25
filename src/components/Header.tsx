import React, { useState } from 'react';
import { ShoppingBag, Heart, Menu, X, Search, Phone, ShieldCheck } from 'lucide-react';
import { Product, CartItem } from '../types';

interface HeaderProps {
  lang: 'bn' | 'en';
  setLang: (lang: 'bn' | 'en') => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cart: CartItem[];
  wishlist: Product[];
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  lang,
  setLang,
  activeTab,
  setActiveTab,
  cart,
  wishlist,
  setIsCartOpen,
  setIsWishlistOpen,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home' },
    { id: 'products', labelBn: 'খাঁটি মধুসমূহ', labelEn: 'Pure Honey' },
    { id: 'about', labelBn: 'আমাদের কথা', labelEn: 'About Us' },
    { id: 'blog', labelBn: 'মধু ব্লগ', labelEn: 'Honey Blog' },
    { id: 'contact', labelBn: 'যোগাযোগ', labelEn: 'Contact Us' },
    { id: 'tracker', labelBn: 'অর্ডার ট্র্যাকিং', labelEn: 'Track Order' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-100/50 bg-white/95 backdrop-blur-md">
      {/* Top micro bar for announcements & trust lines */}
      <div className="bg-amber-950 text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs">
              {lang === 'bn' 
                ? '১০০% খাঁটি সুন্দরবন ও সরিষা মধু গ্যারান্টি' 
                : '100% Pure Sundarbans & Mustard Honey Guarantee'}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+8801700000000" className="hover:text-amber-300 flex items-center space-x-1 transition-colors">
              <Phone size={12} />
              <span className="text-[10px] md:text-s">+৮৮০ ১৭০০০-০০০০০</span>
            </a>
            <button
              onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
              className="bg-amber-800 hover:bg-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded transition-all text-white border border-amber-600 cursor-pointer"
            >
              {lang === 'bn' ? 'English' : 'বাংলা'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center space-x-2.5 cursor-pointer select-none group"
        >
          {/* Custom vector hex honey logo */}
          <div className="relative w-11 h-12 flex items-center justify-center bg-amber-500 rounded-lg shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-400"></div>
            {/* Embedded honeycomb design */}
            <div className="absolute w-6 h-6 border-2 border-white/40 rotate-45 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-amber-950 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-amber-950 leading-tight">
              Shuddho Modhu
            </h1>
            <span className="font-sans text-[9px] md:text-[10px] tracking-widest text-amber-700 uppercase font-bold leading-none">
              {lang === 'bn' ? 'বাংলাদেশী শতভাগ খাঁটি পণ্য' : 'Bangladesh 100% Pure'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-2 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === item.id 
                  ? 'text-amber-800 font-semibold' 
                  : 'text-stone-600 hover:text-amber-700'
              }`}
            >
              {lang === 'bn' ? item.labelBn : item.labelEn}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Header Right Interactions */}
        <div className="flex items-center space-x-2.5 sm:space-x-4">
          {/* Dynamic Search Box */}
          <div className="relative">
            {showSearchInput ? (
              <div className="flex items-center bg-stone-50 border border-amber-200 rounded-full px-2.5 py-1 w-40 sm:w-56 transition-all duration-300">
                <input
                  type="text"
                  placeholder={lang === 'bn' ? 'মধু খুঁজুন...' : 'Search honey...'}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (activeTab !== 'products') {
                      setActiveTab('products');
                    }
                  }}
                  className="bg-transparent border-none text-xs text-stone-800 focus:outline-none w-full pl-1"
                  autoFocus
                />
                <button 
                  onClick={() => {
                    setShowSearchInput(false);
                    setSearchQuery('');
                  }} 
                  className="text-stone-400 hover:text-stone-600 p-0.5"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowSearchInput(true)} 
                className="p-2 text-stone-600 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-colors cursor-pointer"
                title={lang === 'bn' ? 'মধু খুঁজুন' : 'Search Products'}
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Wishlist Icon */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2 text-stone-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
            title={lang === 'bn' ? 'পছন্দের তালিকা' : 'Wishlist'}
          >
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 bg-rose-500 text-white font-sans text-[10px] w-4 h-4 flex items-center justify-center rounded-full shadow-sm animate-bounce">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-stone-600 hover:text-amber-800 hover:bg-amber-50 rounded-full transition-colors cursor-pointer"
            title={lang === 'bn' ? 'শপিং ব্যাগ' : 'Shopping Cart'}
          >
            <ShoppingBag size={20} />
            {cartItemsCount > 0 && (
              <span className="absolute top-1 right-1 bg-amber-700 text-white font-sans text-[10px] w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-sm">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-amber-800 hover:bg-amber-50 rounded-full transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-50 bg-white shadow-xl animate-fade-in py-3 px-4 transition-all max-h-[70vh] overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex justify-between items-center cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-amber-50 text-amber-950 font-semibold border-l-4 border-amber-600 pl-2'
                    : 'text-stone-700 hover:bg-stone-50 hover:text-amber-800'
                }`}
              >
                <span>{lang === 'bn' ? item.labelBn : item.labelEn}</span>
                {activeTab === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col space-y-3.5 mb-2">
            <div className="flex justify-between items-center bg-stone-50 p-2.5 rounded-lg border border-stone-200/50">
              <span className="text-xs text-stone-500 font-medium font-sans">
                {lang === 'bn' ? 'ভাষা পরিবর্তন (Language)' : 'Change Language'}
              </span>
              <button
                onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
                className="bg-amber-800 text-white font-semibold text-xs px-3 py-1 rounded shadow-sm hover:bg-amber-700 transition"
              >
                {lang === 'bn' ? 'English' : 'বাংলা'}
              </button>
            </div>
            <div className="flex items-center space-x-2 text-amber-800 text-xs px-1">
              <ShieldCheck size={14} />
              <span>{lang === 'bn' ? '১০০% বিশুদ্ধ ক্যাশ অন ডেলিভারি' : '100% Pure Cash on Delivery'}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
