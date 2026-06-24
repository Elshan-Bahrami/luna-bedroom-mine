import {
  BedDouble,
  Flame,
  Gift,
  Headphones,
  Home,
  Lamp,
  Moon,
  PackageCheck,
  Palette,
  ShieldCheck,
  Shirt,
  Sparkles,
  Truck,
} from "lucide-react";

export const heroSlides = [
  {
    id: 1,
    title: "«لونا»؛ کنجِ آرامِ تو!",
    subtitle: "هر چیزی برای خواب آرام، اتاق دلنشین و لحظه‌های راحت خانه",
    image: "/images/luna/hero-1.jpg",
    href: "/products",
  },

{
    id: 3,
    title: "راحتی از اتاق خواب شروع می‌شود",
    subtitle: "روتختی، لباس خواب، کوسن و انتخاب‌های نرم و دلنشین",
    image: "/images/luna/hero-3.jpg",
    href: "/category/bedroom",
  },

  {
    id: 2,
    title: "فضایی گرم برای شب‌های آرام",
    subtitle: "از شمع و رایحه تا نور و دکور، برای ساختن حال خوب خانه",
    image: "/images/luna/hero-2.jpg",
    href: "/category/decor",
  },
  
];

export const categories = [
  { title: "اتاق خواب", icon: BedDouble, href: "/category/bedroom" },
  { title: "لباس خواب", icon: Shirt, href: "/category/sleepwear" },
  { title: "راحتی خانه", icon: Home, href: "/category/home-comfort" },
  { title: "خواب راحت", icon: Moon, href: "/category/sleep" },
  { title: "شمع و رایحه", icon: Flame, href: "/category/candle-scent" },
  { title: "نور و فضا", icon: Lamp, href: "/category/light" },
  { title: "دکور و هنر دست", icon: Palette, href: "/category/decor" },
  { title: "مراقبت شخصی", icon: Sparkles, href: "/category/self-care" },
  { title: "هدیه‌ها", icon: Gift, href: "/category/gifts" },
];

export const advantages = [
  { title: "ارسال سریع", text: "ارسال مطمئن سفارش‌ها", icon: Truck },
  { title: "ضمانت اصالت کالا", text: "محصولات منتخب و معتبر", icon: ShieldCheck },
  { title: "بسته‌بندی خاص", text: "مناسب هدیه و سفارش شخصی", icon: PackageCheck },
  { title: "پشتیبانی اختصاصی", text: "همراهی قبل و بعد از خرید", icon: Headphones },
];

export const bestSellerProducts = [
  {
    id: 1,
    title: "شمع دست‌ساز رایحه وانیل",
    price: 289000,
    oldPrice: 340000,
    image: "/images/luna/candle.jpg",
    href: "/product/handmade-candle",
  },
  {
    id: 2,
    title: "دریم کچر طرح ماه",
    price: 499000,
    image: "/images/luna/dreamcatcher.jpg",
    href: "/product/moon-dreamcatcher",
  },
  {
    id: 3,
    title: "چراغ خواب ماه مدل چوبی",
    price: 390000,
    oldPrice: 450000,
    image: "/images/luna/moon-lamp.jpg",
    href: "/product/moon-lamp",
  },
  {
    id: 4,
    title: "ست روتختی ساده کرم",
    price: 1490000,
    image: "/images/luna/bedding.jpg",
    href: "/product/cream-bedding",
  },
  {
    id: 5,
    title: "روبدوشامبر مخمل صورتی",
    price: 690000,
    image: "/images/luna/robe.jpg",
    href: "/product/pink-robe",
  },
];

export const offerProducts = [
  {
    id: 6,
    title: "دیفیوزر رایحه آرامش",
    price: 449000,
    oldPrice: 590000,
    image: "/images/luna/diffuser.jpg",
    href: "/product/diffuser",
  },
  {
    id: 7,
    title: "کوسن دکوراتیو کرم",
    price: 329000,
    oldPrice: 399000,
    image: "/images/luna/pillow.jpg",
    href: "/product/cream-pillow",
  },
  {
    id: 8,
    title: "پتوی بافتنی نرم",
    price: 1240000,
    oldPrice: 1490000,
    image: "/images/luna/blanket.jpg",
    href: "/product/soft-blanket",
  },
];

export const newProducts = [
  {
    id: 9,
    title: "شلف دیواری چوبی",
    price: 339000,
    image: "/images/luna/shelf.jpg",
    href: "/product/wooden-shelf",
  },
  {
    id: 10,
    title: "شمع دست‌ساز رایحه وانیل",
    price: 289000,
    image: "/images/luna/candle.jpg",
    href: "/product/handmade-candle",
  },
  {
    id: 11,
    title: "روبدوشامبر مخمل صورتی",
    price: 690000,
    image: "/images/luna/robe.jpg",
    href: "/product/pink-robe",
  },
  {
    id: 12,
    title: "چراغ خواب ماه مدل چوبی",
    price: 390000,
    image: "/images/luna/moon-lamp.jpg",
    href: "/product/moon-lamp",
  },
];

export const collections = [
  {
    id: 1,
    title: "کالکشن خواب راحت",
    text: "محصولاتی برای شب‌های آرام‌تر",
    image: "/images/luna/bedding.jpg",
    href: "/collection/sleep",
  },
  {
    id: 2,
    title: "کالکشن شمع و رایحه",
    text: "برای ساختن فضای گرم و دلنشین",
    image: "/images/luna/candle.jpg",
    href: "/collection/candle-scent",
  },
  {
    id: 3,
    title: "کالکشن هدیه",
    text: "انتخاب‌های خاص برای عزیزان",
    image: "/images/luna/dreamcatcher.jpg",
    href: "/collection/gifts",
  },
];

export const articles = [
  {
    id: 1,
    title: "چطور یک اتاق خواب آرامش‌بخش داشته باشیم؟",
    date: "۱۴۰۳/۰۸/۱۰",
    image: "/images/luna/article-1.jpg",
    href: "/blog/cozy-bedroom",
  },
  {
    id: 2,
    title: "بهترین نور برای اتاق خواب",
    date: "۱۴۰۳/۰۸/۰۵",
    image: "/images/luna/article-2.jpg",
    href: "/blog/bedroom-light",
  },
  {
    id: 3,
    title: "۷ عادت شبانه برای خواب بهتر",
    date: "۱۴۰۳/۰۷/۲۸",
    image: "/images/luna/article-3.jpg",
    href: "/blog/better-sleep",
  },
];