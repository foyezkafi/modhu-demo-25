import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Ticket, Sparkles } from 'lucide-react';
import { CartItem, Order } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  lang: 'bn' | 'en';
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onPlaceOrder: (order: Order) => void;
  onClearCart: () => void;
}

const BD_CITIES = [
  { id: 'dhaka', nameBn: 'ঢাকা (হোম ডেলিভারি)', nameEn: 'Dhaka (Home Delivery)', fee: 60, freeThreshold: 500 },
  { id: 'chittagong', nameBn: 'চট্টগ্রাম', nameEn: 'Chittagong', fee: 120, freeThreshold: 1500 },
  { id: 'sylhet', nameBn: 'সিলেট', nameEn: 'Sylhet', fee: 120, freeThreshold: 1500 },
  { id: 'rajshahi', nameBn: 'রাজশাহী', nameEn: 'Rajshahi', fee: 120, freeThreshold: 1500 },
  { id: 'khulna', nameBn: 'খুলনা', nameEn: 'Khulna', fee: 120, freeThreshold: 1500 },
  { id: 'barisal', nameBn: 'বরিশাল', nameEn: 'Barisal', fee: 120, freeThreshold: 1500 },
  { id: 'rangpur', nameBn: 'রংপুর', nameEn: 'Rangpur', fee: 120, freeThreshold: 1500 },
  { id: 'mymensingh', nameBn: 'ময়মনসিংহ', nameEn: 'Mymensingh', fee: 120, freeThreshold: 1500 },
];

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  lang,
  onUpdateQuantity,
  onRemoveItem,
  onPlaceOrder,
  onClearCart,
}: CartDrawerProps) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCity, setSelectedCity] = useState('dhaka');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash' | 'nagad'>('cod');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const currentCityObj = BD_CITIES.find(c => c.id === selectedCity) || BD_CITIES[0];
  const itemsSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Delivery configuration
  const deliveryFee = itemsSubtotal >= currentCityObj.freeThreshold ? 0 : currentCityObj.fee;

  // Promo handling (SHUDDHO10 gives 10% off)
  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SHUDDHO10') {
      setDiscountPercent(10);
      setPromoSuccess(lang === 'bn' ? '✓ ১০% ডিসকাউন্ট সফলভাবে যুক্ত হয়েছে!' : '✓ 10% Discount applied successfully!');
      setPromoError('');
    } else {
      setPromoError(lang === 'bn' ? 'ভুল প্রোমো কোড! SHUDDHO10 ব্যবহার করুন' : 'Invalid code! Try SHUDDHO10');
      setPromoSuccess('');
    }
  };

  const discountAmount = Math.round(itemsSubtotal * (discountPercent / 100));
  const finalTotal = itemsSubtotal - discountAmount + deliveryFee;

  // Checkout submission
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert(lang === 'bn' ? 'দয়া করে সবগুলো তথ্য পূরণ করুন।' : 'Please fill all fields.');
      return;
    }

    // Generate simulated order tracker number e.g., SM-10452
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const trackingID = `SM-${randomSuffix}`;

    const orderItems = cart.map(item => ({
      productNameBn: item.product.nameBn,
      productNameEn: item.product.nameEn,
      weight: item.selectedWeight,
      quantity: item.quantity,
      price: item.price,
    }));

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + (selectedCity === 'dhaka' ? 2 : 4));
    const estimatedDelivery = nextDate.toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const newOrder: Order = {
      id: trackingID,
      customerName: name,
      phone: phone,
      deliveryAddress: address,
      city: currentCityObj.nameEn,
      items: orderItems,
      totalPrice: finalTotal,
      deliveryFee: deliveryFee,
      paymentMethod: paymentMethod,
      status: 'pending',
      createdAt: new Date().toISOString(),
      estimatedDelivery: estimatedDelivery,
    };

    onPlaceOrder(newOrder);
    onClearCart();
    setIsCheckout(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-serif">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-stone-150 flex items-center justify-between bg-stone-50">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="text-amber-700 animate-pulse" size={22} />
              <h2 className="text-xl font-bold text-stone-900">
                {isCheckout 
                  ? (lang === 'bn' ? 'চেকআউট ও অর্ডার কনফার্ম' : 'Secure Checkout') 
                  : (lang === 'bn' ? 'আপনার শপিং ব্যাগ' : 'Your Shopping Bag')}
              </h2>
            </div>
            <button 
              onClick={onClose} 
              className="p-1 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                  <ShoppingBag size={32} />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg font-bold text-stone-950">
                    {lang === 'bn' ? 'ব্যাগে কোনো পণ্য নেই !' : 'Your bag is empty!'}
                  </p>
                  <p className="font-sans text-xs text-stone-500">
                    {lang === 'bn' 
                      ? 'আমাদের প্রাকৃতিক খাঁটি মধুর ক্যাটালগ দেখে পছন্দের পণ্য নির্বাচন করুন।' 
                      : 'Please view our premium organic collection and add delicious items.'}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold font-sans px-4 py-2 rounded-lg shadow cursor-pointer transition-colors"
                >
                  {lang === 'bn' ? 'কেনাকাটা শুরু করুন' : 'Start Shopping'}
                </button>
              </div>
            ) : !isCheckout ? (
              /* --- 1. Line Items View --- */
              <div className="space-y-4">
                {cart.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between p-3.5 bg-stone-50 border border-stone-150/50 rounded-xl relative group hover:border-amber-200 transition-colors"
                  >
                    <div className="flex space-x-3.5">
                      <img 
                        src={item.product.image} 
                        alt={lang === 'bn' ? item.product.nameBn : item.product.nameEn} 
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 object-cover rounded-lg shrink-0 border border-stone-200 bg-white"
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-extrabold text-stone-900 group-hover:text-amber-800 transition-colors font-serif leading-tight">
                            {lang === 'bn' ? item.product.nameBn : item.product.nameEn}
                          </h4>
                          <span className="font-sans text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold inline-block mt-1">
                            {item.selectedWeight === '250g' ? (lang === 'bn' ? '২৫০গ্রাম' : '250g') : null}
                            {item.selectedWeight === '500g' ? (lang === 'bn' ? '৫০০গ্রাম' : '500g') : null}
                            {item.selectedWeight === '1kg' ? (lang === 'bn' ? '১ কেজি' : '1kg') : null}
                          </span>
                        </div>
                        <span className="font-sans text-xs text-amber-950 font-bold mt-2">
                          ৳{item.price.toLocaleString('bn-BD')} / {lang === 'bn' ? 'জার' : 'jar'}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-rose-500 p-1 cursor-pointer"
                        title={lang === 'bn' ? 'মুছে ফেলুন' : 'Remove item'}
                      >
                        <Trash2 size={16} />
                      </button>

                      {/* Quantity Selector */}
                      <div className="flex items-center space-x-1.5 bg-white border border-stone-250 py-0.5 px-2 rounded-lg font-sans">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="text-stone-500 hover:text-stone-900 disabled:opacity-35 cursor-pointer text-xs"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-xs font-bold text-stone-850 px-1 min-w-[12px] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-stone-500 hover:text-stone-900 cursor-pointer text-xs"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Entry */}
                <form onSubmit={handleApplyPromo} className="pt-4 border-t border-stone-100 font-sans">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-2">
                    {lang === 'bn' ? 'প্রোমো কোড ব্যবহার করুন (ঐচ্ছিক)' : 'Apply Promo Coupon (Optional)'}
                  </span>
                  <div className="flex bg-stone-50 border border-stone-200 rounded-lg p-1 focus-within:border-amber-500 transition-colors">
                    <input
                      type="text"
                      className="bg-transparent border-none text-xs text-stone-800 placeholder-stone-400 w-full pl-2 uppercase focus:outline-none"
                      placeholder="e.g. SHUDDHO10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-amber-900 text-white text-xs font-bold px-3 py-1.5 rounded cursor-pointer transition hover:bg-stone-900"
                    >
                      {lang === 'bn' ? 'আবেদন করুন' : 'Apply'}
                    </button>
                  </div>
                  {promoError && <p className="text-[10px] text-rose-500 mt-1 font-sans">{promoError}</p>}
                  {promoSuccess && <p className="text-[10px] text-emerald-600 mt-1 font-sans font-medium">{promoSuccess}</p>}
                </form>
              </div>
            ) : (
              /* --- 2. Checkout Form View --- */
              <form onSubmit={handleSubmitOrder} className="space-y-4 font-sans text-xs">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                    {lang === 'bn' ? 'আপনার নাম (Customer Name) *' : 'Customer Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder={lang === 'bn' ? 'যেমন: মোহাম্মদ তামিম' : 'e.g. Mohammad Tamim'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                    {lang === 'bn' ? 'সচল মোবাইল নম্বর *' : 'Contact Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="e.g., 017xxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* City */}
                <div className="space-y-1">
                  <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                    {lang === 'bn' ? 'ডেলিভারি ডিস্ট্রিক্ট / শহর *' : 'Delivery City *'}
                  </label>
                  <select
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {BD_CITIES.map((city) => (
                      <option key={city.id} value={city.id}>
                        {lang === 'bn' ? city.nameBn : city.nameEn} (৳{city.fee})
                      </option>
                    ))}
                  </select>
                  <p className="text-[10px] text-stone-400 mt-1">
                    {lang === 'bn' 
                      ? `* ${currentCityObj.nameEn}-এ ৫০০টাকার ওপরে অর্ডারে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি!`
                      : `* Free delivery to ${currentCityObj.nameEn} on spending ৳${currentCityObj.freeThreshold} or more.`}
                  </p>
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                    {lang === 'bn' ? 'পূর্ণাঙ্গ ডেলিভারি ঠিকানা *' : 'Full Delivery Address *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder={lang === 'bn' ? 'হাউজ নম্বর, ফ্ল্যাট, রোড, এলাকা ইত্যাদি' : 'House number, Floor, Road, Locality, landmarks...'}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                {/* Payment method */}
                <div className="space-y-2 pt-2">
                  <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">
                    {lang === 'bn' ? 'পেমেন্ট মেথড নির্বাচন করুন *' : 'Select Payment Method *'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`py-2 px-1 text-[10px] font-sans font-bold rounded-lg border text-center transition cursor-pointer flex flex-col items-center justify-center ${
                        paymentMethod === 'cod'
                          ? 'border-amber-600 bg-amber-50 text-amber-950 font-extrabold'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span>{lang === 'bn' ? 'ক্যাশ অন' : 'Cash On'}</span>
                      <span>{lang === 'bn' ? 'ডেলিভারি' : 'Delivery'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bkash')}
                      className={`py-2 px-1 text-[10px] font-sans font-bold rounded-lg border text-center transition cursor-pointer flex flex-col items-center justify-center ${
                        paymentMethod === 'bkash'
                          ? 'border-pink-600 bg-pink-50 text-pink-950 font-extrabold'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="text-pink-600">bKash</span>
                      <span>(বিকাশ পে)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('nagad')}
                      className={`py-2 px-1 text-[10px] font-sans font-bold rounded-lg border text-center transition cursor-pointer flex flex-col items-center justify-center ${
                        paymentMethod === 'nagad'
                          ? 'border-orange-600 bg-orange-50 text-orange-950 font-extrabold'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="text-orange-600">Nagad</span>
                      <span>(নগদ পে)</span>
                    </button>
                  </div>
                  
                  {paymentMethod !== 'cod' && (
                    <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-[10px] text-amber-900 leading-relaxed font-sans">
                      {lang === 'bn'
                        ? '✓ অর্ডার সাবমিট করার পর আমাদের এজেন্ট আপনাকে একটি পেমেন্ট লিংক বা পার্সোনাল মার্চেন্ট হোয়াটসঅ্যাপ নম্বরে bKash/Nagad পেমেন্ট সম্পূর্ণ করতে সহায়তা করবেন।'
                        : '✓ After completing this order, our team will reach out via WhatsApp with merchant checkout instructions to settle securely.'}
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Pricing Summary and Footer */}
          {cart.length > 0 && (
            <div className="px-6 py-5 border-t border-stone-150 bg-stone-50/70 space-y-4 font-sans">
              
              {/* Receipt Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>{lang === 'bn' ? 'আইটেম মোট:' : 'Items Subtotal:'}</span>
                  <span className="font-bold text-stone-900 font-sans">৳{itemsSubtotal.toLocaleString('bn-BD')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>{lang === 'bn' ? '১০% প্রোমো ডিসকাউন্ট:' : '10% Coupon Discount:'}</span>
                    <span>-৳{discountAmount.toLocaleString('bn-BD')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>
                    {lang === 'bn' ? 'ডেলিভারি চার্জ:' : 'Delivery Surcharge:'} 
                    <span className="text-[10px] text-amber-700/80 font-bold ml-1 uppercase">
                      ({currentCityObj.nameEn})
                    </span>
                  </span>
                  <span className="font-bold text-stone-900 font-sans">
                    {deliveryFee === 0 
                      ? (lang === 'bn' ? 'ফ্রি' : 'FREE') 
                      : `৳${deliveryFee}`}
                  </span>
                </div>
                
                {/* Total */}
                <div className="flex justify-between pt-2.5 border-t border-stone-200 text-sm font-bold text-stone-950 font-serif">
                  <span className="text-stone-900">{lang === 'bn' ? 'সর্বমোট প্রদেয়:' : 'Grand Total Due:'}</span>
                  <span className="text-amber-950 text-base font-bold font-sans">
                    ৳{finalTotal.toLocaleString('bn-BD')}
                  </span>
                </div>
              </div>

              {/* Secure Trust line */}
              <div className="flex items-center space-x-2 text-stone-500 text-[10px] bg-white border border-stone-150 p-2 rounded-lg justify-center shadow-inner">
                <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                <span>
                  {lang === 'bn' 
                    ? '১০০% খাঁটি মধু ও ক্যাশ অন ডেলিভারি সুরক্ষিত অর্ডার।' 
                    : '100% Genuine Honey - Fully Safe Cash on Delivery'}
                </span>
              </div>

              {/* Dynamic Buttons */}
              <div className="flex space-x-2.5 pt-1">
                {!isCheckout ? (
                  <>
                    <button
                      onClick={() => setIsCheckout(true)}
                      className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm py-3 rounded-xl transition duration-250 cursor-pointer text-center"
                    >
                      {lang === 'bn' ? 'অর্ডার করতে এগিয়ে যান' : 'Proceed to Checkout'}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsCheckout(false)}
                      className="w-1/3 bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs py-3 rounded-xl transition cursor-pointer text-center"
                    >
                      {lang === 'bn' ? 'ব্যাগে ফিরুন' : 'Back to Cart'}
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmitOrder}
                      className="w-2/3 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs py-3 rounded-xl transition shadow-md duration-250 cursor-pointer text-center"
                    >
                      {lang === 'bn' ? 'অর্ডার কনফার্ম করুন (৳' + finalTotal.toLocaleString('bn-BD') + ')' : 'Confirm Order (৳' + finalTotal + ')'}
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
