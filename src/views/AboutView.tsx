import React from 'react';
import { ShieldCheck, Flame, Award, Heart, HelpCircle, Eye, Users } from 'lucide-react';
import { STORY_IMAGE } from '../data';

interface AboutViewProps {
  lang: 'bn' | 'en';
}

export default function AboutView({ lang }: AboutViewProps) {
  const steps = [
    {
      id: 's1',
      titleBn: '১. সুন্দরবন ও ফসলি জমিতে মৌচাক নির্বাচন',
      titleEn: '1. Nest Selection in Sanctuary Zones',
      descBn: 'আমাদের প্রশিক্ষিত মৌয়ালরা সুন্দরবনের গহীন অঞ্চলে খলিশা গাছের ফুল বা ফসল খেতে প্রাকৃতিক মৌচাকগুলো সতর্কতার সাথে পর্যবেক্ষণ করেন।',
      descEn: 'Our skilled gatherers locate fully developed natural bee hives deep within Sundarbans Khalisha zones or organic crop fields.',
    },
    {
      id: 's2',
      titleBn: '২. চিরাচরিত ধোঁয়া দিয়ে মৌমাছি তাড়ানো',
      titleEn: '2. Smoke-Based Mild Bee Deflection',
      descBn: 'কোনো কেমিক্যাল কীটনাশক ব্যবহার না করে, খড় পোড়ানো ধোঁয়ার মাধ্যমে মৌমাছিদের কামড় থেকে আত্মরক্ষা করে আলতো করে মৌমাছিদের সরানো হয়।',
      descEn: 'Straw smoke is generated to safely and humanely clear bees off the combs without using toxic chemical deterrents.',
    },
    {
      id: 's3',
      titleBn: '৩. বৈজ্ঞানিক ও নিরাপদ মধু নিষ্কাশন',
      titleEn: '3. Hand Squeezed Traditional Extraction',
      descBn: 'মৌচাক সম্পূর্ণ ধ্বংস না করে শুধুমাত্র মধুর অংশটুকু বিশুদ্ধ হাত কাটার মাধ্যমে বের করা হয় যাতে পরিবেশের ও মৌমাছির ক্ষতি না হয়।',
      descEn: 'Only the top honey storage portion is carefully cut. Hives and queen bees remain completely preserved for natural regeneration.',
    },
    {
      id: 's4',
      titleBn: '৪. কাঁচের জারে বিশুদ্ধ প্যাকেটজাতকরণ',
      titleEn: '4. Lab-Grade Glass Jar Sealing',
      descBn: 'মধু উত্তরা ল্যাব সেন্টারে নিয়ে আদ্রতা যাচাই ও ক্লিন ফিল্টারিং করা হয়, এবং কোনো রূপ হিট প্রসেসিং ছাড়া সরাসরি কাঁচের জারে সিল করা হয়।',
      descEn: 'Harvested honeys are brought to our testing lab to filter out wax remnants before direct bottling in sterile glass jars.',
    }
  ];

  const team = [
    {
      nameBn: 'আব্দুল হাকিম',
      nameEn: 'Abdul Hakim',
      roleBn: 'প্রধান মৌয়াল ও সুন্দরবন প্রশিক্ষক',
      roleEn: 'Chief Mawali & Coordinator',
      bioBn: '২৫ বছরেরও বেশি সময় ধরে সুন্দরবনের খলিশা মধু আহরণে অভিজ্ঞ, আমাদের সুন্দরবন টিমের সেনাপতি।',
      bioEn: 'Over 25 years of ancestral experience gathering Khalisha and Goran honey from wild Sundarbans.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      nameBn: 'আফরিন সুলতানা',
      nameEn: 'Afrin Sultana',
      roleBn: 'ফুড সেফটি ও কোয়ালিটি কন্ট্রোলার',
      roleEn: 'Food Safety & Lab Lead',
      bioBn: 'মধুর আদ্রতা, সুক্রোজ এবং পুষ্টির পরিমাণ গবেষণাগারে BSTI মান অনুযায়ী সুনিশ্চিত করেন।',
      bioEn: 'Ensures the biochemical integrity of each batch adheres to BSTI and BCSIR organic parameters.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    },
    {
      nameBn: 'এস. এম. তানজীল',
      nameEn: 'S. M. Tanzil',
      roleBn: 'ফাউন্ডার ও সিইও',
      roleEn: 'Founder & CEO',
      bioBn: 'প্রান্তিক মৌয়ালদের অধিকার নিশ্চিত করা এবং ঢাকয় শতভাগ খাঁটি মধু পৌঁছে দেওয়ার মূল স্বপ্নদ্রষ্টা।',
      bioEn: 'Driven to build the ultimate fair-trade organic honey supply loop within Bangladesh.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    }
  ];

  return (
    <div className="space-y-24 font-serif">
      
      {/* 1. Header Hero text */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-8">
        <span className="font-sans text-xs bg-amber-100 text-amber-950 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          {lang === 'bn' ? 'আমাদের বিশুদ্ধতার গল্প' : 'Pure Brand Sourcing'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
          {lang === 'bn' ? 'মৌয়ালদের মেহনত আর আমাদের শুদ্ধ উপহার' : 'The Ancestral Journey of Pure Bangladeshi Honey'}
        </h1>
        <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          {lang === 'bn'
            ? 'খামারে ভেজাল ও কেমিক্যালের ছড়াছড়িতে আমরা সিদ্ধান্ত নেই সুন্দরবন ও গ্রামীণ মাঠ থেকে সরাসরি কোনো কেমিক্যাল প্রসেস ছাড়া শতভাগ খাঁটি মধু সংগ্রহ করব। সেই স্বপ্ন বাস্তবায়নেই "শুদ্ধ মধু বাংলাদেশ"-এর জন্ম।'
            : 'In an industry filled with high fructose sugar syrup adulteration, Shuddho Modhu was established with a singular focus: to preserve and bridge raw honey direct from Bangladeshi mangrove and crop keepers to wellness lovers.'}
        </p>
      </section>

      {/* 2. Sourcing Timeline / Traditional Honey Gathering Process with Generated Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Sourcing Left Text */}
        <div className="lg:col-span-6 space-y-8 lg:order-2">
          <div className="space-y-3.5">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-amber-900 block">
              {lang === 'bn' ? 'সংগ্রহ পদ্ধতি বা প্রসেস' : 'Traditional Sourcing Ritual'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              {lang === 'bn' ? 'কিভাবে গভীর সুন্দরবন থেকে মধু সংগ্রহ করা হয়?' : 'How is Sundarbans Khalisha Honey Extracted?'}
            </h2>
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              {lang === 'bn'
                ? 'সুন্দরবনের খলিশা ও গরান ফুলের খাঁটি মধু সংগ্রহ করার কাজ অত্যন্ত কষ্টসাধ্য ও রোমাঞ্চকর। ড্রেসআপ ছাড়া শত শত মৌমাছির দংশন উপেক্ষা করে কায়িক পরিশ্রমের মাধ্যমে এই সোনালী তরল আহরিত হয়।'
                : 'Mawal gatherers enter the wild tidal mangrove forests at high risk under cooperative licenses. Our team preserves safety, hygienic protocols, and ecology while collecting.'}
            </p>
          </div>

          {/* Sourcing Timeline */}
          <div className="space-y-6 font-sans text-xs text-stone-700">
            {steps.map((s) => (
              <div key={s.id} className="flex space-x-3 pb-2 border-b border-stone-150">
                <div className="text-amber-800 font-extrabold shrink-0 select-none text-sm font-mono uppercase bg-amber-100/50 w-7 h-7 rounded-lg flex items-center justify-center">
                  {s.id === 's1' ? '1' : null}
                  {s.id === 's2' ? '2' : null}
                  {s.id === 's3' ? '3' : null}
                  {s.id === 's4' ? '4' : null}
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-serif font-extrabold text-stone-900 text-sm">
                    {lang === 'bn' ? s.titleBn : s.titleEn}
                  </h4>
                  <p className="text-stone-500 text-[11px] leading-snug">
                    {lang === 'bn' ? s.descBn : s.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Image container */}
        <div className="lg:col-span-6 bg-stone-100 p-3 rounded-3xl border border-stone-200 lg:order-1 relative group overflow-hidden">
          <img
            src={STORY_IMAGE}
            alt="Traditional Honey collection in Sundarban Bangladesh"
            referrerPolicy="no-referrer"
            className="w-full h-96 object-cover rounded-2xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-[#120903]/90 text-white p-4 rounded-xl border border-amber-500/20 shadow-xl font-sans text-xs">
            <span className="font-semibold text-yellow-400 block mb-0.5">
              {lang === 'bn' ? 'সুন্দরবনে মধু সংগ্রহরত মৌয়াল' : 'Harvesting wild honeycomb in progress'}
            </span>
            <p className="text-stone-300 text-[11px] leading-relaxed">
              {lang === 'bn' 
                ? 'বুনো চাকে মৌমাছি তাড়াতে খড়-কুটার প্রাকৃতিক ধোঁয়া ব্যবহার করা হয়।' 
                : 'Straw-burning smoke safely guards our ethical honey hunters.'}
            </p>
          </div>
        </div>

      </section>

      {/* 3. Sourcing Core Principles/Trust standards */}
      <section className="bg-amber-100/20 py-20 border-y border-amber-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-3.5 max-w-xl mx-auto">
            <span className="font-sans text-xs bg-amber-100 text-amber-955 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {lang === 'bn' ? 'কোয়ালিটি অ্যাসুরেন্স' : 'Sourcing Safeguards'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
              {lang === 'bn' ? 'কোনো প্রকার আপোষহীন ল্যাব নীতি' : 'Our Quality Standards'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs">
            
            {/* Natural Moisture check */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 flex space-x-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-1.5 text-left">
                <h4 className="font-serif font-bold text-stone-900 text-sm">
                  {lang === 'bn' ? 'আর্দ্রতা বা ওয়াটার কনটেন্ট কন্ট্রোল' : 'Scientific Moisture Calibration'}
                </h4>
                <p className="text-stone-500 leading-relaxed">
                  {lang === 'bn'
                    ? 'মধুতে অতিরিক্ত পানির পরিমাণ থাকলে তা গেঁজে টক গন্ধ হয়ে ফেটে যেতে পারে। আমাদের প্রতি ব্যাচে হাইড্রোমিটার পরীক্ষায় পানির পরিমাণ ২০% এর নিচে নিশ্চিত করা হয়।'
                    : 'Water content is carefully standardized using refractometers to strictly stay below 20%, halting anaerobic fermentation and off-odors.'}
                </p>
              </div>
            </div>

            {/* Zero Boiler Heating */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 flex space-x-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Flame size={20} />
              </div>
              <div className="space-y-1.5 text-left">
                <h4 className="font-serif font-bold text-stone-900 text-sm">
                  {lang === 'bn' ? 'নো-বয়লিং বা নো-হিট ফিল্টারিং' : 'No Pasteurized Heat Stripping'}
                </h4>
                <p className="text-stone-500 leading-relaxed">
                  {lang === 'bn'
                    ? 'তাপ প্রয়োগে মধুর এনজাইম, সুবাস এবং অ্যান্টি-অক্সিডেন্ট সম্পূর্ণ ধূলিসাৎ হয়ে যায়। তাই আমরা কোল্ড ক্রাশড প্রসেসিং সম্পন্ন করি।'
                    : 'Chemical factories heat raw honey to preserve clear liquid consistency, destroying beneficial enzymes. We bypass fine filtering and heating.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Sourcing Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="font-sans text-xs bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {lang === 'bn' ? 'বিশেষজ্ঞ টিম' : 'Meet The Team'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
            {lang === 'bn' ? 'মৌয়াল ও খাদ্য সুরক্ষায় নিয়োজিত আমাদের দল' : 'The Protectors of Pure Honey'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((t, idx) => (
            <div key={idx} className="bg-stone-50 p-6 rounded-2xl border border-stone-150/60 hover:shadow-md transition text-center space-y-4">
              <img
                src={t.avatar}
                alt={lang === 'bn' ? t.nameBn : t.nameEn}
                className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-amber-500/30"
              />
              <div className="space-y-1">
                <h4 className="font-bold text-stone-950 text-base">{lang === 'bn' ? t.nameBn : t.nameEn}</h4>
                <span className="font-sans text-xs text-amber-800 font-semibold block">{lang === 'bn' ? t.roleBn : t.roleEn}</span>
              </div>
              <p className="font-sans text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
                {lang === 'bn' ? t.bioBn : t.bioEn}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
