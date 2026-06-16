import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send, MessageCircle, Facebook, Clock, Sparkles } from 'lucide-react';

interface ContactViewProps {
  lang: 'bn' | 'en';
}

export default function ContactView({ lang }: ContactViewProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'order', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: 'order', message: '' });
      }, 6000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-serif space-y-16">
      
      {/* 1. Header block */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="font-sans text-xs bg-amber-100 text-amber-955 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          {lang === 'bn' ? 'কাস্টমার সাপোর্ট ডেস্ক' : 'Customer Happiness Desk'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
          {lang === 'bn' ? 'যেকোনো জিজ্ঞাসায় আমাদের সাথে যোগাযোগ করুন' : 'Have Honey Queries? Contact Us Today'}
        </h1>
        <p className="font-sans text-xs text-stone-500 leading-relaxed">
          {lang === 'bn'
            ? 'মধুর গুণগত মান যাচাই, বড় অর্ডার (হোলসেল), হোম ডেলিভারি ট্র্যাকিং বা যেকোনো পরামর্শে আমরা সর্বদা প্রস্তুত।'
            : 'For general checkups, corporate gift partnerships, crop sourcing deals, or delivery inquiries, reach out immediately.'}
        </p>
      </div>

      {/* 2. Communication Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* Phone Call support */}
        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-150 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-800 mx-auto sm:mx-0">
              <PhoneCall size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-base">{lang === 'bn' ? 'সরাসরি কল করুন' : 'Hotline Call Support'}</h3>
              <p className="font-sans text-stone-500 text-xs">
                {lang === 'bn' ? 'সকাল ৯টা থেকে রাত ৯টা পর্যন্ত যেকোনো দিন।' : 'Open daily from 9:00 AM to 9:00 PM.'}
              </p>
            </div>
          </div>
          <span className="font-sans text-base font-extrabold text-amber-900 block mt-4 select-all">
            +৮৮০ ১৭০০০-০০০০০
          </span>
        </div>

        {/* WhatsApp Direct Chat */}
        <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 mx-auto sm:mx-0">
              <MessageCircle size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-base">{lang === 'bn' ? 'ওয়াটসঅ্যাপ চ্যাট' : 'WhatsApp Support'}</h3>
              <p className="font-sans text-stone-500 text-xs">
                {lang === 'bn' ? 'অর্ডার স্ক্রিনশট ও পেমেন্ট স্ক্রিনশট পাঠাতে পারেন।' : 'Send receipt snapshots or locate address maps.'}
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs py-2 px-4 rounded-xl shadow-md mt-4 transition cursor-pointer self-start w-full sm:w-auto"
          >
            <MessageCircle size={14} className="fill-white" />
            <span>{lang === 'bn' ? 'মেসেজ দিন' : 'Start WhatsApp Chat'}</span>
          </a>
        </div>

        {/* Facebook Community */}
        <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mx-auto sm:mx-0">
              <Facebook size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-base">{lang === 'bn' ? 'ফেসবুক পেইজ' : 'Facebook Page'}</h3>
              <p className="font-sans text-stone-500 text-xs">
                {lang === 'bn' ? 'আমাদের নতুন অফার, লাইভ সোর্সিং ভিডিও দেখতে লাইক দিন।' : 'Watch field collection clips and seasonal sales alerts.'}
              </p>
            </div>
          </div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs py-2 px-4 rounded-xl shadow-md mt-4 transition cursor-pointer self-start w-full sm:w-auto"
          >
            <Facebook size={14} className="fill-white" />
            <span>{lang === 'bn' ? 'পেইজ ভিজিট করুন' : 'Visit Shuddho FB'}</span>
          </a>
        </div>

      </div>

      {/* 3. Form and Google Maps Iframe */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Form Left Panel */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-md space-y-5">
          <h2 className="text-xl font-bold text-stone-900 font-serif border-b border-stone-100 pb-3">
            {lang === 'bn' ? 'অনলাইন ম্যাসেজ বোর্ড' : 'Send An Email Inquiry'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">
                  {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tamim Iqbal"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900 text-xs"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">
                  {lang === 'bn' ? 'মোবাইল নম্বর *' : 'Contact Phone *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., 017xxxxxxxx"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900 text-xs"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1.5 font-sans">
              <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="tamim@gmail.com"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900 text-xs"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">
                {lang === 'bn' ? 'যোগাযোগের কারণ' : 'Inquiry Category'}
              </label>
              <select
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900 text-xs text-stone-700"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="order">{lang === 'bn' ? '১. নতুন অর্ডার সম্পর্কিত' : '1. Sourcing or New Orders'}</option>
                <option value="wholesale">{lang === 'bn' ? '২. হোলসেল বা ব্যবসায়িক ডিস্ট্রিবিউটর' : '2. Wholesale Partnerships / Corporate Gifting'}</option>
                <option value="complaint">{lang === 'bn' ? '৩. কোনো প্রকার অভিযোগ বা পরামর্শ' : '3. Suggestions & Quality Claims'}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">
                {lang === 'bn' ? 'আপনার সুনির্দিষ্ট বার্তা' : 'Your Message Details'}
              </label>
              <textarea
                rows={4}
                required
                placeholder={lang === 'bn' ? 'আপনার মেসেজটি এখানে লিখুন...' : 'Write your detailed notes here...'}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900 text-xs"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-4 rounded-xl cursor-pointer shadow transition flex items-center justify-center space-x-1.5 text-xs text-sans mt-2"
            >
              <Send size={14} />
              <span>{lang === 'bn' ? 'বার্তা পাঠান' : 'Submit Message'}</span>
            </button>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-xl leading-normal text-[11px] font-sans antialiased animate-pulse">
                {lang === 'bn'
                  ? '✓ ধন্যবাদ! আপনার বার্তাটি আমাদের সিস্টেমে জমা হয়েছে। দ্রুত আমাদের একজন কর্মী আপনার সাথে যোগাযোগ করবেন।'
                  : '✓ Success! Your message was logged inside our server, our support expert will contact you shortly.'}
              </div>
            )}
          </form>
        </div>

        {/* Google Maps Iframe & Address Panel Right */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-150 space-y-4.5 font-sans text-xs">
            <h3 className="font-serif font-bold text-stone-900 text-base flex items-center space-x-1.5">
              <MapPin size={18} className="text-amber-800" />
              <span>{lang === 'bn' ? 'ঢাকা উত্তরা হেড অফিস ও সেলস পয়েন্ট' : 'Dhaka Uttara Sourcing Outlet'}</span>
            </h3>

            <div className="space-y-2 text-stone-600 leading-snug">
              <p>House 12, Road 5, Sector 9, Uttara, Dhaka, Bangladesh.</p>
              <div className="flex justify-between font-mono text-[10px] text-stone-400 font-semibold pt-1 border-t border-stone-200">
                <span>Coordinates: 23°52'16"N 90°24'03"E</span>
                <span>BSTI Registrations: SM-DH-08</span>
              </div>
            </div>
          </div>

          {/* Real responsive Google Map Iframe locating sector 9, Uttara, Dhaka */}
          <div className="bg-stone-150 rounded-2xl overflow-hidden shadow border border-stone-200/60 min-h-[280px] h-[320px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.37626998902!2d90.39828887515!3d23.87621187858348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c410313cae6d%3A0xe9f75b8782bb0dc1!2sSector-9%20Bus%20Stand%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1718530000000!5m2!1sen!2sbd"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>

    </div>
  );
}
