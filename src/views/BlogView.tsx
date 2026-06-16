import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowLeft, ArrowRight, Share2, Heart, MessageSquare } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOGS } from '../data';

interface BlogViewProps {
  lang: 'bn' | 'en';
}

export default function BlogView({ lang }: BlogViewProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const handleToggleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleShare = (postTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    alert(lang === 'bn' 
      ? `✓ লিংক ক্লিপবোর্ডে কপি হয়েছে: "${postTitle}"` 
      : `✓ Copied link to Clipboard: "${postTitle}"`
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-serif">
      
      {!selectedPost ? (
        /* --- 1. Articles Grid List View --- */
        <div className="space-y-12">
          {/* Header Title Block */}
          <div className="text-center space-y-3.5 max-w-xl mx-auto">
            <span className="font-sans text-xs bg-amber-100 text-amber-955 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {lang === 'bn' ? 'মধু জ্ঞান ও সচেতনতা ব্লগ' : 'Organic Honey Sourcing Blogs'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
              {lang === 'bn' ? 'খাঁটি মধুর গুণাগুণ ও সচেতনতার আসর' : 'The Sweet Science: Honey & Wellness'}
            </h1>
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              {lang === 'bn'
                ? 'ভেজাল মধুর ভিড়ে আপনার সচেতনতাই আসল সুরক্ষা। নিয়মিত মধু সেবনের উপকারিতা এবং বিশুদ্ধতা পরীক্ষার বৈজ্ঞানিক নিয়মগুলো জানুন।'
                : 'Read our clinical and traditional guides to understand chemical-free extraction, health therapies, and honey identification tricks.'}
            </p>
          </div>

          {/* List Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {BLOGS.map((post) => (
              <article 
                key={post.id}
                onClick={() => {
                  setSelectedPost(post);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="group bg-white rounded-2xl border border-stone-200/60 overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Post Cover image */}
                  <div className="relative pt-[56.25%] overflow-hidden bg-stone-50">
                    <img
                      src={post.image}
                      alt={lang === 'bn' ? post.titleBn : post.titleEn}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {(lang === 'bn' ? post.tagsBn : post.tagsEn).map((tag, idx) => (
                        <span key={idx} className="bg-[#120903]/85 text-amber-400 font-sans text-[10px] font-bold px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Date and time badges */}
                    <div className="flex items-center space-x-4 text-stone-400 text-[10px] sm:text-xs font-sans font-medium">
                      <div className="flex items-center space-x-1">
                        <Calendar size={13} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={13} />
                        <span>{lang === 'bn' ? post.readTimeBn : post.readTimeEn}</span>
                      </div>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                      {lang === 'bn' ? post.titleBn : post.titleEn}
                    </h2>

                    <p className="font-sans text-xs text-stone-500 leading-relaxed line-clamp-3">
                      {lang === 'bn' ? post.excerptBn : post.excerptEn}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-900 hover:text-amber-700 font-sans">
                    <span>{lang === 'bn' ? 'বিস্তারিত পড়ুন' : 'Read Full Article'}</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="flex items-center space-x-3 text-stone-400">
                    <button 
                      onClick={(e) => handleToggleLike(post.id, e)} 
                      className={`hover:text-rose-500 p-1 cursor-pointer transition-colors ${
                        likedPosts.includes(post.id) ? 'text-rose-500 fill-rose-500' : ''
                      }`}
                      title="Like"
                    >
                      <Heart size={16} />
                    </button>
                    <button 
                      onClick={(e) => handleShare(lang === 'bn' ? post.titleBn : post.titleEn, e)} 
                      className="hover:text-amber-800 p-1 cursor-pointer transition-colors"
                      title="Copy URL Share"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sourcing warning note background */}
          <div className="bg-amber-50/40 border border-amber-200/50 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <BookOpen size={20} />
            </div>
            <div className="space-y-1.5 text-left font-sans text-xs text-stone-600">
              <h4 className="font-serif font-bold text-amber-950 text-sm">
                {lang === 'bn' ? 'মধু সংরক্ষণ সম্পর্কিত বিশেষ সতর্কতা' : 'Helpful Advice: Honey Storage'}
              </h4>
              <p className="leading-relaxed">
                {lang === 'bn'
                  ? 'মধু কখনই ধাতব চামচে ভিজিয়ে দীর্ঘক্ষণ রাখবেন না, এটি মধুর মেগা এনজাইমগুলোর সাথে প্রতিক্রিয়া করতে পারে। সবসময় শুকনা মার্বেল বা কাঠের হানিস্পুন ব্যবহার করুন এবং কাঁচের জারে অন্ধকার শীতল কুঠুরিতে মুখ বন্ধ করে রাখুন।'
                  : 'Avoid exposing wet steel silverware inside honey containers for long intervals. Metals react with biological plant acids. We recommend using a clean dry wooden honey dipper or glass server spoon.'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* --- 2. Full Article Reading Mode --- */
        <div className="max-w-3xl mx-auto bg-white border border-stone-200/80 rounded-2xl shadow-xl overflow-hidden animate-fade-in space-y-6">
          {/* Cover image header */}
          <div className="relative pt-[45%] bg-stone-50">
            <img 
              src={selectedPost.image} 
              alt={lang === 'bn' ? selectedPost.titleBn : selectedPost.titleEn} 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <button
              onClick={() => {
                setSelectedPost(null);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="absolute top-4 left-4 bg-[#120903]/80 hover:bg-stone-900 text-amber-400 font-sans text-xs font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 shadow-md border border-amber-500/20 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>{lang === 'bn' ? 'সকল ব্লগে ফিরুন' : 'Back to Blogs'}</span>
            </button>
          </div>

          {/* Full content scroll */}
          <div className="p-6 sm:p-10 space-y-6 text-left">
            {/* Meta */}
            <div className="flex items-center space-x-4 text-stone-400 text-xs font-sans pb-3 border-b border-stone-100">
              <span className="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">
                {lang === 'bn' ? 'নিবন্ধ' : 'Official Advice'}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar size={13} />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={13} />
                <span>{lang === 'bn' ? selectedPost.readTimeBn : selectedPost.readTimeEn}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3.5xl font-extrabold text-stone-950 leading-snug">
              {lang === 'bn' ? selectedPost.titleBn : selectedPost.titleEn}
            </h1>

            {/* Content body split by paragraph */}
            <div className="font-sans text-xs sm:text-sm text-stone-850 leading-relaxed space-y-4 whitespace-pre-line antialiased">
              {lang === 'bn' ? selectedPost.contentBn : selectedPost.contentEn}
            </div>

            {/* Footer likes and sharing */}
            <div className="pt-8 border-t border-stone-100 flex justify-between items-center text-xs font-sans">
              <div className="flex space-x-2">
                {(lang === 'bn' ? selectedPost.tagsBn : selectedPost.tagsEn).map((tag, i) => (
                  <span key={i} className="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3.5">
                <button
                  onClick={(e) => handleToggleLike(selectedPost.id, e)}
                  className={`bg-stone-50 border border-stone-200 hover:border-rose-400 p-2 rounded-full cursor-pointer flex items-center space-x-1 text-stone-600 ${
                    likedPosts.includes(selectedPost.id) ? 'bg-rose-50 text-rose-550 border-rose-300' : ''
                  }`}
                >
                  <Heart size={15} className={likedPosts.includes(selectedPost.id) ? 'fill-rose-500' : ''} />
                  <span>{likedPosts.includes(selectedPost.id) ? '1' : ''}</span>
                </button>
                <button
                  onClick={(e) => handleShare(lang === 'bn' ? selectedPost.titleBn : selectedPost.titleEn, e)}
                  className="bg-stone-50 border border-stone-200 hover:border-amber-400 p-2 rounded-full cursor-pointer text-stone-600"
                  title="Share Link"
                >
                  <Share2 size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
