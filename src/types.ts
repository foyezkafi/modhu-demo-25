export interface Product {
  id: string;
  nameBn: string;
  nameEn: string;
  category: 'sundarban' | 'mustard' | 'litchi' | 'kalojira' | 'mixed';
  categoryBn: string;
  categoryEn: string;
  basePrice: number; // 250g price in BDT
  weightPrices: {
    '250g': number;
    '500g': number;
    '1kg': number;
  };
  descriptionBn: string;
  descriptionEn: string;
  benefitsBn: string[];
  benefitsEn: string[];
  rating: number;
  reviewsCount: number;
  image: string;
  isAvailable: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  id: string; // unique ID composite: productId_weight
  product: Product;
  selectedWeight: '250g' | '500g' | '1kg';
  price: number;
  quantity: number;
}

export interface CarouselImage {
  id: string;
  url: string;
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  subtitleEn: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  commentBn: string;
  commentEn: string;
  date: string;
}

export interface BlogPost {
  id: string;
  titleBn: string;
  titleEn: string;
  excerptBn: string;
  excerptEn: string;
  contentBn: string;
  contentEn: string;
  image: string;
  date: string;
  readTimeBn: string;
  readTimeEn: string;
  tagsBn: string[];
  tagsEn: string[];
}

export interface FAQ {
  id: string;
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  deliveryAddress: string;
  city: string;
  items: {
    productNameBn: string;
    productNameEn: string;
    weight: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
  deliveryFee: number;
  paymentMethod: 'cod' | 'bkash' | 'nagad';
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  estimatedDelivery: string;
}
