import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Coins, 
  Sparkles, 
  Facebook, 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  MapPin, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

interface FooterProps {
  lang: 'bn' | 'en';
  setActiveTab: (tab: string) => void;
}

export default function Footer({ lang, setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c0f05] text-amber-50 font-serif border-t-4 border-amber-500 overflow-hidden">
      
      {/* 1. Value Proposition Grid */}
      <div className="bg-amber-950/20 py-8 px-4 border-b border-amber-900/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          
          {/* Purity Guarantee */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-yellow-400 font-sans tracking-wide">
                {lang === 'bn' ? '১০০% খাঁটি মধুর নিশ্চয়তা' : '100% Raw Purity'}
              </h4>
              <p className="font-sans text-xs text-stone-400 mt-1">
                {lang === 'bn' ? 'ল্যাব টেস্টে ভেজাল প্রমাণে দ্বিগুণ মূল্য ফেরত !' : 'Double refunds if laboratory tests show adulteration.'}
              </p>
            </div>
          </div>

          {/* Fast Delivery */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <Truck size={28} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-yellow-400 font-sans tracking-wide">
                {lang === 'bn' ? 'দ্রুত দেশব্যাপী ডেলিভারি' : 'Fast Nationwide Shipping'}
              </h4>
              <p className="font-sans text-xs text-stone-400 mt-1">
                {lang === 'bn' ? 'ঢাকার ভেতরে ২৪-৪৮ ঘণ্টা, ঢাকার বাইরে ২-৪ দিন।' : 'Dhaka 1-2 days, outside locations in 2-4 days max.'}
              </p>
            </div>
          </div>

          {/* Cash on Delivery */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <Coins size={28} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-yellow-400 font-sans tracking-wide">
                {lang === 'bn' ? 'ক্যাশ অন ডেলিভারি' : 'Cash On Delivery'}
              </h4>
              <p className="font-sans text-xs text-stone-400 mt-1">
                {lang === 'bn' ? 'হাতে পণ্য পেয়ে দেখে মূল্য পরিশোধের সুবিধা।' : 'Check honey container first, pay on secure receipt.'}
              </p>
            </div>
          </div>

          {/* Premium Harvesting */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <Sparkles size={28} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-yellow-400 font-sans tracking-wide">
                {lang === 'bn' ? 'অর্গানিক ও অপরিশোধিত' : 'Organic & Unheated'}
              </h4>
              <p className="font-sans text-xs text-stone-400 mt-1">
                {lang === 'bn' ? 'কোন কৃত্রিম কেমিক্যাল ও সুগার সিরাপ মুক্ত।' : 'Completely raw syrup, preserves vital natural pollen.'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Information */}
        <div className="space-y-5">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-10 bg-amber-500 rounded flex items-center justify-center relative shadow-inner">
              <div className="w-5 h-5 border border-amber-950/20 rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-amber-950 rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-white leading-tight">Shuddho Modhu</h3>
              <span className="text-[10px] tracking-widest uppercase font-sans text-amber-400 font-semibold block leading-none">Bangladesh</span>
            </div>
          </div>
          <p className="text-stone-300 text-xs font-sans leading-relaxed">
            {lang === 'bn' 
              ? 'আমাদের লক্ষ্য পুরো বাংলাদেশের ঘরে ঘরে শতভাগ খাঁটি ও প্রাকৃতিক বনের মধু পৌঁছে দেওয়া। সরাসরি কৃষকের হাত থেকে সংগৃহীত আমাদের মধু কোনো প্রকার আর্টিফিশিয়াল প্রিজারভেটিভ ছাড়াই প্যাকেটজাত করা হয়।'
              : 'Our mission is to supply 100% raw, unheated, organic tree honey from premium mustard farms and mangrove Sundarban clusters directly to conscious consumers without secondary alterations.'}
          </p>
          <div className="flex space-x-3.5 pt-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-stone-800 text-amber-400 flex items-center justify-center hover:bg-amber-500 hover:text-amber-950 transition-all cursor-pointer"
              title="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a 
              href="https://wa.me/8801700000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-stone-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-amber-950 transition-all cursor-pointer"
              title="WhatsApp Chat"
            >
              <MessageSquare size={16} />
            </a>
          </div>
        </div>

        {/* Categories/Quick links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 border-b border-stone-800 pb-2">
            {lang === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Navigation'}
          </h4>
          <ul className="space-y-3 font-sans text-xs">
            <li>
              <button onClick={() => handleLinkClick('home')} className="text-stone-300 hover:text-yellow-400 transition cursor-pointer">
                {lang === 'bn' ? 'হোম পেইজ' : 'Home Page'}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('products')} className="text-stone-300 hover:text-yellow-400 transition cursor-pointer">
                {lang === 'bn' ? 'আমাদের মধু সংগ্রহ' : 'Our Pure Honeys'}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('about')} className="text-stone-300 hover:text-yellow-400 transition cursor-pointer">
                {lang === 'bn' ? 'আমাদের গল্প ও প্রসেস' : 'Story & Sourcing'}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('blog')} className="text-stone-300 hover:text-yellow-400 transition cursor-pointer">
                {lang === 'bn' ? 'স্বাস্থ্য ও মধু বিষয়ক ব্লগ' : 'Health Blogs'}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('contact')} className="text-stone-300 hover:text-yellow-400 transition cursor-pointer">
                {lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('tracker')} className="text-stone-300 hover:text-yellow-400 transition cursor-pointer font-bold text-amber-400">
                {lang === 'bn' ? 'অর্ডার ট্র্যাক করুন ↗' : 'Track Active Order ↗'}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 border-b border-stone-800 pb-2">
            {lang === 'bn' ? 'যোগাযোগের ঠিকানা' : 'Contact Office'}
          </h4>
          <ul className="space-y-4 font-sans text-xs text-stone-300">
            <li className="flex items-start space-x-3">
              <MapPin className="text-amber-500 shrink-0 mt-0.5" size={16} />
              <span>
                {lang === 'bn' 
                  ? 'হাউজ ১২, রোড ৫, সেক্টর ৯, উত্তরা, ঢাকা-১২৩০, বাংলাদেশ।' 
                  : 'House 12, Road 5, Sector 9, Uttara, Dhaka-1230, Bangladesh.'}
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <PhoneCall className="text-amber-500 shrink-0" size={16} />
              <span>+৮৮০ ১৭০০০-০০০০০ (সকাল ৯টা - রাত ৯টা)</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-amber-500 shrink-0" size={16} />
              <span>support@shuddhomodhu.com.bd</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="text-amber-500 shrink-0" size={16} />
              <span>{lang === 'bn' ? 'ডেলিভারি কাভারেজ: ফুল বাংলাদেশ' : 'Delivery: Countrywide Cash On Delivery'}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white mb-6 border-b border-stone-800 pb-2">
            {lang === 'bn' ? 'নিউজলেটার সাবস্ক্রিপশন' : 'Newsletter'}
          </h4>
          <p className="text-stone-300 text-xs font-sans leading-relaxed">
            {lang === 'bn' 
              ? 'আমাদের নতুন মধু কালেকশন, ছাড়ের অফার ও খাঁটি মধু চেনার ট্রিকস জানতে ইমেইল দিন।' 
              : 'Join to receive alerts on new wild extractions, exclusive seasonal deals, and honey purity tests.'}
          </p>
          
          <form onSubmit={handleSubscribe} className="pt-2 font-sans">
            <div className="flex bg-stone-800/80 rounded-lg p-1 border border-stone-700 focus-within:border-amber-500 transition-colors">
              <input
                type="email"
                required
                className="bg-transparent border-none text-xs text-white placeholder-stone-500 focus:outline-none w-full pl-3"
                placeholder={lang === 'bn' ? 'আপনার সচল ইমেইল...' : 'Enter your email...'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-amber-950 p-2 rounded-md transition-colors flex items-center justify-center shrink-0 cursor-pointer"
              >
                <ArrowRight size={14} />
              </button>
            </div>
            
            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2 font-sans animate-pulse">
                {lang === 'bn' ? '✓ আপনাকে স্বাগত! সাবস্ক্রিপশন সম্পন্ন হয়েছে।' : '✓ Thank you! Joined successfully.'}
              </p>
            )}
          </form>
        </div>

      </div>

      {/* 3. Footer Copyright bar and payment badges */}
      <div className="bg-[#120903] py-6 px-4 border-t border-amber-950/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <div className="text-stone-400 text-xs font-sans">
            <p>© ২০২৬ শুদ্ধ মধু বাংলাদেশ (Shuddho Modhu Bangladesh). সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="text-[10px] text-stone-500 mt-1">
              Made with pure rural heritage for premium wellness.
            </p>
          </div>
          
          {/* Payment gateway icons / badge labels in design */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 font-sans text-[10px] text-stone-400 font-semibold">
            <span className="px-2 py-1 rounded bg-stone-800/80 border border-stone-700/50">bKash (বিকাশ)</span>
            <span className="px-2 py-1 rounded bg-stone-800/80 border border-stone-700/50">Nagad (নগদ)</span>
            <span className="px-2 py-1 rounded bg-stone-800/80 border border-stone-700/50">Cash on Delivery</span>
            <span className="px-2 py-1 rounded bg-stone-800/80 border border-stone-700/50">BSTI & BCSIR Standard</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
