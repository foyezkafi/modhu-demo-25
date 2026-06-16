import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  X, 
  Trash2, 
  MessageSquare, 
  Phone, 
  MapPin, 
  CheckCircle, 
  HelpCircle, 
  Sparkles, 
  Copy,
  Star
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import OrderTracker from './components/OrderTracker';

// Import Views
import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import AboutView from './views/AboutView';
import BlogView from './views/BlogView';
import ContactView from './views/ContactView';

import { Product, CartItem, Order } from './types';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sourcing Local State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  // Interactivity Modals togglers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [successOrder, setSuccessOrder] = useState<Order | null>(null);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('shuddho_cart');
    const savedWishlist = localStorage.getItem('shuddho_wishlist');
    const savedOrders = localStorage.getItem('shuddho_orders');

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  // Save changes to local storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('shuddho_cart', JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: Product[]) => {
    setWishlist(newWishlist);
    localStorage.setItem('shuddho_wishlist', JSON.stringify(newWishlist));
  };

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    localStorage.setItem('shuddho_orders', JSON.stringify(newOrders));
  };

  // 1. Add item to cart
  const handleAddToCart = (product: Product, weight: '250g' | '500g' | '1kg', price: number) => {
    const compositeId = `${product.id}_${weight}`;
    const existing = cart.find(item => item.id === compositeId);

    if (existing) {
      const updated = cart.map(item => 
        item.id === compositeId ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCart(updated);
    } else {
      const newItem: CartItem = {
        id: compositeId,
        product,
        selectedWeight: weight,
        price,
        quantity: 1,
      };
      saveCart([...cart, newItem]);
    }
    // Open cart drawer for great immediate feedback
    setIsCartOpen(true);
  };

  // 2. Adjust Cart Quantity
  const handleUpdateQuantity = (compositeId: string, delta: number) => {
    const updated = cart.map(item => {
      if (item.id === compositeId) {
        const nextQ = item.quantity + delta;
        return { ...item, quantity: nextQ > 0 ? nextQ : 1 };
      }
      return item;
    });
    saveCart(updated);
  };

  // 3. Remove item from cart
  const handleRemoveCartItem = (compositeId: string) => {
    const filtered = cart.filter(item => item.id !== compositeId);
    saveCart(filtered);
  };

  // 4. Toggle Wishlist
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some(item => item.id === product.id);
    if (exists) {
      const filtered = wishlist.filter(item => item.id !== product.id);
      saveWishlist(filtered);
    } else {
      saveWishlist([...wishlist, product]);
    }
  };

  // 5. Place order callback
  const handlePlaceOrder = (newOrder: Order) => {
    const updatedOrders = [newOrder, ...orders];
    saveOrders(updatedOrders);
    setSuccessOrder(newOrder);
  };

  // Clear Cart helper
  const handleClearCart = () => {
    saveCart([]);
  };

  const handleCopyId = (orderId: string) => {
    navigator.clipboard.writeText(orderId);
    alert(lang === 'bn' ? 'অর্ডার আইডি কপি হয়েছে!' : 'Order ID copied to clipboard!');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-stone-50 select-text overflow-x-hidden antialiased font-sans">
      
      {/* Dynamic Header */}
      <Header
        lang={lang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        wishlist={wishlist}
        setIsCartOpen={setIsCartOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main view router container */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomeView
            lang={lang}
            setActiveTab={setActiveTab}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            onOpenQuickView={setQuickViewProduct}
          />
        )}

        {activeTab === 'products' && (
          <ProductsView
            lang={lang}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            onOpenQuickView={setQuickViewProduct}
          />
        )}

        {activeTab === 'about' && <AboutView lang={lang} />}

        {activeTab === 'blog' && <BlogView lang={lang} />}

        {activeTab === 'contact' && <ContactView lang={lang} />}

        {activeTab === 'tracker' && <OrderTracker orders={orders} lang={lang} />}
      </main>

      {/* Dynamic Footer */}
      <Footer lang={lang} setActiveTab={setActiveTab} />

      {/* --- SIDEBAR DIALOGS & OVERLAY SCREENS --- */}

      {/* 1. Shopper Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        lang={lang}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onPlaceOrder={handlePlaceOrder}
        onClearCart={handleClearCart}
      />

      {/* 2. Slideover Wishlist Organizer Panel */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-serif">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsWishlistOpen(false)} />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
              
              <div className="px-6 py-5 border-b border-stone-150 flex items-center justify-between bg-stone-50">
                <div className="flex items-center space-x-2">
                  <Heart className="text-rose-500 fill-rose-500" size={20} />
                  <h2 className="text-lg font-bold text-stone-900">
                    {lang === 'bn' ? 'পছন্দের মধু তালিকা' : 'Your Wishlist'}
                  </h2>
                </div>
                <button 
                  onClick={() => setIsWishlistOpen(false)} 
                  className="p-1 rounded-full hover:bg-stone-200 cursor-pointer text-stone-400 hover:text-stone-800"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-20 text-stone-400 font-sans text-xs">
                    <Heart className="mx-auto text-stone-200 mb-3" size={40} />
                    <p>{lang === 'bn' ? 'তালিকায় কোনো পণ্য যুক্ত করেননি।' : 'No saved honeys found here.'}</p>
                  </div>
                ) : (
                  wishlist.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-stone-50 p-3 rounded-xl border border-stone-200/50">
                      <div className="flex items-center space-x-3.5">
                        <img src={item.image} alt={item.nameBn} className="w-12 h-12 object-cover rounded-lg" referrerPolicy="no-referrer" />
                        <div>
                          <h4 className="text-xs font-bold leading-tight font-serif text-stone-950">
                            {lang === 'bn' ? item.nameBn : item.nameEn}
                          </h4>
                          <span className="font-sans text-[10px] text-amber-800 font-semibold block mt-1">
                            ৳{item.basePrice} / {lang === 'bn' ? '২৫০গ্রাম শুরু' : '250g start'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 shrink-0">
                        <button
                          onClick={() => {
                            handleAddToCart(item, '250g', item.basePrice);
                            handleToggleWishlist(item);
                            setIsWishlistOpen(false);
                          }}
                          className="bg-amber-800 text-white font-sans text-[10px] font-bold px-2.5 py-1.5 rounded hover:bg-amber-900 cursor-pointer"
                        >
                          {lang === 'bn' ? '+ কার্ট' : '+ Cart'}
                        </button>
                        <button 
                          onClick={() => handleToggleWishlist(item)}
                          className="text-stone-400 hover:text-rose-500 p-1 cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 3. Honey Jar Quick-View Detailed Dialog */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm" onClick={() => setQuickViewProduct(null)} />
          
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 font-serif grid grid-cols-1 md:grid-cols-2 gap-8 z-10 overflow-y-auto max-h-[90vh] animate-fade-in">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-1.5 bg-stone-100 rounded-full hover:bg-stone-200 transition text-stone-500 hover:text-stone-850 cursor-pointer"
              title="Close Dialog"
            >
              <X size={18} />
            </button>

            {/* Left Photo */}
            <div className="space-y-4">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.nameBn}
                referrerPolicy="no-referrer"
                className="w-full h-64 md:h-80 object-cover rounded-xl border border-stone-200 bg-stone-50"
              />
              <div className="flex items-center space-x-2 text-amber-800 text-[10px] sm:text-xs font-sans font-bold bg-amber-50 p-2.5 rounded-lg border border-amber-200/50 justify-center">
                <span>✓ Raw & Natural Extraction</span>
                <span>• No Sugar Fillers</span>
              </div>
            </div>

            {/* Right details content */}
            <div className="flex flex-col justify-between text-left">
              <div className="space-y-3.5">
                <div>
                  <span className="font-sans text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded font-extrabold pb-1">
                    {lang === 'bn' ? quickViewProduct.categoryBn : quickViewProduct.categoryEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 leading-tight">
                    {lang === 'bn' ? quickViewProduct.nameBn : quickViewProduct.nameEn}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 font-sans text-xs font-bold text-stone-500">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-current" />
                    ))}
                  </div>
                  <span>{quickViewProduct.rating} ({quickViewProduct.reviewsCount} reviews)</span>
                </div>

                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  {lang === 'bn' ? quickViewProduct.descriptionBn : quickViewProduct.descriptionEn}
                </p>

                {/* Health Benefits bullet lists */}
                <div className="space-y-1.5 pt-1.5">
                  <h4 className="text-xs font-bold font-sans text-stone-900 uppercase tracking-wide">
                    {lang === 'bn' ? 'বিশেষ উপকারিতা সমূহ:' : 'Biological Health Virtues:'}
                  </h4>
                  <ul className="list-disc pl-4 text-stone-600 font-sans text-[11px] leading-relaxed space-y-1">
                    {(lang === 'bn' ? quickViewProduct.benefitsBn : quickViewProduct.benefitsEn).map((bt, i) => (
                      <li key={i}>{bt}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price list and Add */}
              <div className="pt-6 border-t border-stone-100 mt-6 flex justify-between items-center font-sans">
                <div className="flex flex-col">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{lang === 'bn' ? 'মূল্য (২৫০ গ্রাম)' : 'Price (250g)'}</span>
                  <strong className="text-xl font-bold text-amber-900">৳{quickViewProduct.basePrice.toLocaleString('bn-BD')}</strong>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(quickViewProduct, '250g', quickViewProduct.basePrice);
                    setQuickViewProduct(null);
                  }}
                  className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-6 py-3 rounded-xl cursor-pointer shadow flex items-center space-x-1.5 transition-all"
                >
                  <ShoppingBag size={14} />
                  <span>{lang === 'bn' ? '২৫০গ্রাম অর্ডার করুন' : 'Add 250g to Bag'}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 4. Complete Checkout Order Success screen overlay */}
      {successOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" />
          
          <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl border border-stone-150 z-10 animate-fade-in space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-500/20 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle size={36} className="animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="font-sans text-[10px] bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full uppercase">
                {lang === 'bn' ? 'অর্ডার সাবমিট সফল হয়েছে !' : 'Order Placed! Sourcing Initiated'}
              </span>
              <h3 className="text-xl font-extrabold text-stone-950 font-serif leading-tight">
                {lang === 'bn' ? 'ধন্যবাদ! আপনার খাঁটি মধুর অর্ডার নিশ্চিত।' : 'Order Confirmed successfully!'}
              </h3>
              <p className="font-sans text-stone-500 text-xs leading-relaxed">
                {lang === 'bn'
                  ? 'আপনার অর্ডার কলোজিরা ও সুন্দরবন প্যাকারদের কাছে পাঠানো হয়েছে। অর্ডার চেক করতে নিচের ইউনিক আইডিটি কপি করুন।'
                  : 'We have registered your organic honey extraction packet. Please copy your unique logistics key and paste in Order Tracker.'}
              </p>
            </div>

            {/* Tracking ID badge copy */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-center justify-between font-sans">
              <div className="text-left">
                <span className="text-[9px] text-stone-400 font-bold uppercase block">Tracking Key ID</span>
                <strong className="text-base font-bold font-mono text-amber-950">{successOrder.id}</strong>
              </div>
              <button
                onClick={() => handleCopyId(successOrder.id)}
                className="p-2 rounded bg-white hover:bg-stone-100 ring-1 ring-stone-200 text-amber-800 cursor-pointer transition-all"
                title="Copy Key ID"
              >
                <Copy size={14} />
              </button>
            </div>

            {/* Delivery address brief info */}
            <div className="font-sans text-[11px] text-stone-500/90 text-left space-y-1 max-w-xs mx-auto border-t border-stone-100 pt-3">
              <p>• <strong>Recipient:</strong> {successOrder.customerName} ({successOrder.phone})</p>
              <p>• <strong>Shipment drop:</strong> {successOrder.deliveryAddress}, {successOrder.city}</p>
              <p>• <strong>Est. Arrival:</strong> <span className="text-amber-900 font-bold">{successOrder.estimatedDelivery}</span></p>
            </div>

            <button
              onClick={() => {
                setSuccessOrder(null);
                setActiveTab('tracker');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="w-full bg-amber-800 hover:bg-stone-900 text-white font-sans font-bold text-xs py-3.5 rounded-xl cursor-pointer shadow transition"
            >
              {lang === 'bn' ? 'অর্ডার প্রগতি ট্র্যাক করুন ↗' : 'Track Package Progress Now ↗'}
            </button>
          </div>
        </div>
      )}

      {/* --- 5. STICKY WHATSAPP FLOATING BUTTON COUNTER --- */}
      <a
        href="https://wa.me/8801700000000?text=Hello%20Shuddho%20Modhu,%20I'm%20interested%20to%20order%20pure%20honey.%20Please%20help."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer group hover:ring-4 hover:ring-emerald-250"
        title={lang === 'bn' ? 'আমাদের ইমিডিয়েট ওয়াটসঅ্যাপ মেসেজ করুন' : 'WhatsApp Support'}
      >
        <MessageSquare size={28} className="fill-white" />
        {/* Floating text tooltips */}
        <span className="absolute right-16 bg-emerald-900 text-white font-sans text-[10px] font-bold px-3 py-1 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          {lang === 'bn' ? 'ওয়াটসঅ্যাপে অর্ডার করুন' : 'Order via WhatsApp'}
        </span>
      </a>

    </div>
  );
}
