import React, { useState } from 'react';
import { Search, Calendar, MapPin, Truck, CheckCircle2, Package, Clock, ShieldAlert } from 'lucide-react';
import { Order } from '../types';

interface OrderTrackerProps {
  orders: Order[];
  lang: 'bn' | 'en';
}

// Sample mock order to let users test right away without needing to check out first!
const SAMPLE_ORDER: Order = {
  id: 'SM-48251',
  customerName: 'মোহাম্মদ হাসিব',
  phone: '01712345678',
  deliveryAddress: 'হাউজ ২৪, রোড ৩, মেরুল বাড্ডা, ঢাকা',
  city: 'Dhaka',
  items: [
    {
      productNameBn: 'প্রিমিয়াম সুন্দরবন খলিশা ও বনফুল মধু',
      productNameEn: 'Premium Sundarbans Khalisha & Wild Honey',
      weight: '500g',
      quantity: 1,
      price: 700,
    }
  ],
  totalPrice: 760,
  deliveryFee: 60,
  paymentMethod: 'cod',
  status: 'processing',
  createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(), // 36 hours ago
  estimatedDelivery: 'বৃহস্পতিবার, ১৮ জুন ২০২৬',
};

export default function OrderTracker({ orders, lang }: OrderTrackerProps) {
  const [typedId, setTypedId] = useState('');
  const [typedPhone, setTypedPhone] = useState('');
  const [activeSearchedOrder, setActiveSearchedOrder] = useState<Order | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedId.trim()) {
      setSearchError(lang === 'bn' ? 'দয়া করে আপনার অর্ডার আইডি নম্বর দিন।' : 'Please enter an Order ID.');
      return;
    }

    const cleanId = typedId.trim().toUpperCase();
    const cleanPhone = typedPhone.trim();

    // Look up in actual session orders
    let found = orders.find(o => o.id.toUpperCase() === cleanId);

    // Support sample order
    if (!found && cleanId === 'SM-48251') {
      found = SAMPLE_ORDER;
    }

    if (found) {
      setActiveSearchedOrder(found);
      setSearchError('');
    } else {
      setActiveSearchedOrder(null);
      setSearchError(
        lang === 'bn' 
          ? 'অর্ডার নম্বরটি পাওয়া যায়নি। ট্রাই করুন নমুনা আইডিটি: SM-48251' 
          : 'Order ID not found in system database. Try sample ID: SM-48251'
      );
    }
    setHasSearched(true);
  };

  const getStepStatus = (orderStatus: string, stepIndex: number) => {
    // 0: pending, 1: processing, 2: shipped, 3: delivered
    const statusMap: Record<string, number> = {
      pending: 0,
      processing: 1,
      shipped: 2,
      delivered: 3,
    };
    const currentLevel = statusMap[orderStatus] ?? 0;
    
    if (currentLevel > stepIndex) return 'completed';
    if (currentLevel === stepIndex) return 'active';
    return 'upcoming';
  };

  const trackingSteps = [
    {
      index: 0,
      titleBn: 'অর্ডার গৃহীত হয়েছে',
      titleEn: 'Order Received & Verified',
      descBn: 'আমাদের সিস্টেমে আপনার অর্ডার রেজিস্টার করা হয়েছে।',
      descEn: 'Your order was registered and confirmed by our server.',
      icon: Clock,
    },
    {
      index: 1,
      titleBn: 'মধু মান নিয়ন্ত্রণ ও প্যাকিং',
      titleEn: 'Honey Quality Check & Packing',
      descBn: 'মধুর বিশুদ্ধতা ডাবল-চেক করে কাঁচের জারে সুরক্ষিত প্যাক করা হচ্ছে।',
      descEn: 'Purity verification done. Packaged in custom shockproof bubble wrap.',
      icon: Package,
    },
    {
      index: 2,
      titleBn: 'কুরিয়ারে ট্রানজিট',
      titleEn: 'In Transit / Dispatched',
      descBn: 'আমাদের ডেলিভারি পার্টনার আপনার ঠিকানায় রওয়ানা করেছে।',
      descEn: 'Shipped via premium logistics team heading to your state.',
      icon: Truck,
    },
    {
      index: 3,
      titleBn: 'ডেলিভারি সম্পন্ন',
      titleEn: 'Delivered Successfully',
      descBn: 'পণ্য বুজে পেয়েছেন। সুস্বাদু ও পুষ্টিকর খাঁটি মধু উপভোগ করুন!',
      descEn: 'Your package is delivered. Enjoy natural sweet nourishment!',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-10 border border-amber-200/60 max-w-4xl mx-auto my-6">
      
      {/* Tracker Heading */}
      <div className="text-center space-y-3 max-w-xl mx-auto mb-10">
        <span className="font-sans text-xs bg-amber-100 text-amber-950 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          {lang === 'bn' ? 'অর্ডার ট্র্যাকিং সিস্টেম' : 'Real-Time Order Logistics'}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
          {lang === 'bn' ? 'আপনার মধুর বোতল কোথায় জানুন' : 'Track Your Pure Honey Bottle'}
        </h2>
        <p className="font-sans text-xs text-stone-500 leading-relaxed">
          {lang === 'bn' 
            ? 'অর্ডার সাবমিট করার পর প্রাপ্ত ৭ অক্ষরের আইডি (যেমন: SM-1082) নিচে ইনপুট করে মুহূর্তেই আপনার হোম ডেলিভারির প্রগতি ট্র্যাকিং করুন।' 
            : 'Enter the unique tracking code received after place-order to obtain shipping details and estimated courier drop schedule.'}
        </p>
      </div>

      {/* Tracker Entry Search Bar */}
      <form onSubmit={handleTrackSearch} className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-md space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4 max-w-2xl mx-auto">
        <div className="flex-1 space-y-1 font-sans">
          <label className="text-[10px] text-stone-400 font-extrabold uppercase tracking-wide block pl-1">
            {lang === 'bn' ? 'অর্ডার আইডি নম্বর' : 'Order ID Number'}
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="e.g., SM-48251"
              value={typedId}
              onChange={(e) => setTypedId(e.target.value)}
              className="w-full pl-3 pr-10 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold font-sans uppercase focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900"
            />
            <span className="absolute right-3.5 top-3 text-amber-600">SM</span>
          </div>
        </div>

        <div className="flex-1 space-y-1 font-sans">
          <label className="text-[10px] text-stone-400 font-extrabold uppercase tracking-wide block pl-1">
            {lang === 'bn' ? 'মোবাইল নম্বর (ঐচ্ছিক)' : 'Mobile Phone (Optional)'}
          </label>
          <input
            type="tel"
            placeholder="017xxxxxxxx"
            value={typedPhone}
            onChange={(e) => setTypedPhone(e.target.value)}
            className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow cursor-pointer transition flex items-center justify-center space-x-1.5 shrink-0 self-end"
        >
          <Search size={16} />
          <span>{lang === 'bn' ? 'খুঁজুন' : 'Track Progress'}</span>
        </button>
      </form>

      {searchError && (
        <div className="mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center space-x-2 max-w-2xl mx-auto font-sans">
          <ShieldAlert size={16} />
          <span>{searchError}</span>
        </div>
      )}

      {/* Preset guidelines if not searched yet */}
      {!hasSearched && (
        <div className="mt-8 text-center font-sans text-[11px] text-stone-400 border-t border-dashed border-amber-200/50 pt-5">
          {lang === 'bn' ? 'টিপ্স্: টেস্ট করতে টাইপ করুন ' : 'Quick Demo: Try tracking with '}
          <button 
            type="button"
            onClick={() => {
              setTypedId('SM-48251');
              setTypedPhone('01712345678');
            }}
            className="text-amber-800 font-bold hover:underline cursor-pointer font-mono"
          >
            SM-48251
          </button>
        </div>
      )}

      {/* --- Visual Staging Tracking UI if found --- */}
      {activeSearchedOrder && (
        <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl border border-amber-100 shadow-lg space-y-8 animate-fade-in">
          
          {/* Top Quick Status Meta */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-5 border-b border-stone-100 space-y-3 sm:space-y-0 text-xs font-sans">
            <div>
              <span className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">Tracking Code</span>
              <p className="text-base font-extrabold text-amber-950 font-mono mt-0.5">{activeSearchedOrder.id}</p>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">Recipient Name</span>
              <p className="text-sm font-bold text-stone-900 mt-0.5">{activeSearchedOrder.customerName}</p>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">Est. Home Delivery</span>
              <div className="flex items-center space-x-1 mt-1 font-bold text-amber-900">
                <Calendar size={13} />
                <span>{activeSearchedOrder.estimatedDelivery}</span>
              </div>
            </div>
          </div>

          {/* Stepper Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {trackingSteps.map((step) => {
              const statusOfStep = getStepStatus(activeSearchedOrder.status, step.index);
              const StepIcon = step.icon;

              return (
                <div key={step.index} className="flex lg:flex-col items-start lg:items-center text-left lg:text-center relative z-10 group">
                  
                  {/* Step status node bubble */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${
                    statusOfStep === 'completed'
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : statusOfStep === 'active'
                      ? 'bg-amber-600 border-amber-600 text-white shadow-md ring-4 ring-amber-100'
                      : 'bg-stone-50 border-stone-200 text-stone-400'
                  }`}>
                    {statusOfStep === 'completed' ? (
                      <CheckCircle2 size={20} className="stroke-[3px]" />
                    ) : (
                      <StepIcon size={18} />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="ml-4 lg:ml-0 lg:mt-3.5 space-y-1">
                    <h4 className={`text-sm font-extrabold font-serif ${
                      statusOfStep === 'active' ? 'text-amber-900' : 'text-stone-900'
                    }`}>
                      {lang === 'bn' ? step.titleBn : step.titleEn}
                    </h4>
                    <p className="text-[11px] font-sans text-stone-500 leading-snug">
                      {lang === 'bn' ? step.descBn : step.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Invoice Summary inside tracking */}
          <div className="bg-stone-50/80 rounded-xl p-4 sm:p-5 border border-stone-200/50 mt-4 text-xs font-sans">
            <h5 className="font-serif font-bold text-stone-850 text-sm mb-3">
              {lang === 'bn' ? 'অর্ডারকৃত মধুর তালিকা' : 'Package Contained Items'}
            </h5>
            <div className="space-y-2 border-b border-stone-200 pb-3">
              {activeSearchedOrder.items.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="font-serif text-stone-750">
                    {lang === 'bn' ? item.productNameBn : item.productNameEn} ({item.weight}) x {item.quantity}
                  </span>
                  <span className="font-bold text-stone-900">৳{(item.price * item.quantity).toLocaleString('bn-BD')}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-3 text-xs text-stone-600">
              <span>{lang === 'bn' ? 'ডেলিভারি ডিস্ট্রিক্ট ও ফি:' : 'District Shipping Fee:'} <strong className="font-serif text-stone-800">{activeSearchedOrder.city}</strong></span>
              <span className="font-bold text-stone-900">৳{activeSearchedOrder.deliveryFee.toLocaleString('bn-BD')}</span>
            </div>
            
            <div className="flex justify-between pt-2.5 text-sm font-extrabold text-amber-950 font-serif border-t border-stone-150 mt-2.5">
              <span>{lang === 'bn' ? 'সর্বমোট মূল্য (পরিশোধিত/COD):' : 'Grand Total Due (COD):'}</span>
              <span>৳{activeSearchedOrder.totalPrice.toLocaleString('bn-BD')}</span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
