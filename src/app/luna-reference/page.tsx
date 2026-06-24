import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgePercent,
  BarChart3,
  Bell,
  BookOpen,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  Edit3,
  ExternalLink,
  Eye,
  FileText,
  Gift,
  Heart,
  HelpCircle,
  Home,
  ImagePlus,
  Instagram,
  Layers3,
  Link2,
  ListFilter,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleQuestion,
  Package,
  PackageCheck,
  Palette,
  Percent,
  Phone,
  ReceiptText,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  Store,
  Tags,
  Trash2,
  Truck,
  User,
  Users,
} from "lucide-react";

type Feature = {
  title: string;
  text?: string;
  icon?: LucideIcon;
};

type ProductCard = {
  title: string;
  tag: string;
  price: string;
  oldPrice?: string;
  discount?: string;
};

const categories = [
  "لباس خواب",
  "روتختی",
  "شمع و رایحه",
  "نور و فضا",
  "دکور اتاق خواب",
  "هدیه‌ها",
  "برندها",
  "اکسسوری خواب",
];

const homeSections: Feature[] = [
  {
    title: "هدر + لوگوی لونا",
    text: "هدر باید تمیز، ثابت، RTL و مناسب موبایل باشد.",
    icon: Home,
  },
  {
    title: "سرچ با پیشنهاد کلمه",
    text: "کاربر هنگام تایپ، پیشنهادهای مرتبط ببیند.",
    icon: Search,
  },
  {
    title: "دسته‌بندی‌های خطی",
    text: "مثل تجربه کاربری Trendyol، اما با ظاهر اختصاصی لونا.",
    icon: Layers3,
  },
  {
    title: "بنر اصلی",
    text: "بنر گرم، آرام، Soft Premium و مناسب فروشگاه خواب و آرامش.",
    icon: Sparkles,
  },
  {
    title: "محصولات پرفروش هفته",
    text: "به صورت ریلی، با کارت محصول و علاقه‌مندی.",
    icon: Star,
  },
  {
    title: "تخفیف‌های شگفت‌انگیز",
    text: "بخش جدا و کمی رنگی‌تر، اما هماهنگ با تم لونا.",
    icon: BadgePercent,
  },
  {
    title: "برندها / کالکشن‌ها",
    text: "کالکشن‌های کاربردی به جای آیتم‌های بزرگ و نامرتبط.",
    icon: Store,
  },
  {
    title: "مقالات و فوتر کامل",
    text: "بلاگ، راهنماها، قوانین، شبکه‌های اجتماعی و متن برند.",
    icon: BookOpen,
  },
];

const products: ProductCard[] = [
  {
    title: "لباس خواب ساتن رز",
    tag: "پرفروش هفته",
    price: "۲,۴۹۰,۰۰۰ تومان",
    oldPrice: "۳,۱۰۰,۰۰۰",
    discount: "۲۰٪",
  },
  {
    title: "روتختی دو نفره کرم",
    tag: "انتخاب لونا",
    price: "۴,۸۰۰,۰۰۰ تومان",
    oldPrice: "۵,۶۰۰,۰۰۰",
    discount: "۱۴٪",
  },
  {
    title: "شمع معطر وانیل",
    tag: "Cozy Mood",
    price: "۶۹۰,۰۰۰ تومان",
  },
  {
    title: "چراغ خواب مینیمال",
    tag: "نور و فضا",
    price: "۱,۳۵۰,۰۰۰ تومان",
    oldPrice: "۱,۷۰۰,۰۰۰",
    discount: "۲۱٪",
  },
];

const collections: Feature[] = [
  {
    title: "کالکشن خواب آرام",
    text: "محصولات منتخب برای اتاق خواب گرم، آرام و مرتب.",
    icon: Sparkles,
  },
  {
    title: "برندهای محبوب",
    text: "صفحه محصولات هر برند با فیلتر و مرتب‌سازی کامل.",
    icon: Store,
  },
  {
    title: "هدیه‌های لونا",
    text: "پیشنهادهای مناسب تولد، مناسبت‌ها و پک‌های هدیه.",
    icon: Gift,
  },
  {
    title: "دکور اتاق خواب",
    text: "نور، رایحه، شمع، اکسسوری و جزئیات دکور.",
    icon: Home,
  },
];

const filters = [
  "دسته‌بندی",
  "زیرمجموعه",
  "برند",
  "قیمت",
  "رنگ",
  "سایز",
  "جنس",
  "امتیاز",
  "تخفیف‌دارها",
  "موجودی",
];

const sorts = [
  "جدیدترین",
  "پرفروش‌ترین",
  "ارزان‌ترین",
  "گران‌ترین",
  "بیشترین تخفیف",
];

const searchSuggestions = [
  "شمع معطر",
  "روتختی دو نفره",
  "لباس خواب ساتن",
  "دکور اتاق خواب",
];

const productPageItems: Feature[] = [
  { title: "وزن محصول برای محاسبه ارسال و کارگو", icon: Package },
  { title: "گالری عکس محصول", icon: ImagePlus },
  { title: "نام محصول و برند", icon: Store },
  { title: "قیمت تومان و قیمت لیر در صورت نیاز", icon: CircleDollarSign },
  { title: "قیمت قبل و درصد تخفیف", icon: BadgePercent },
  { title: "توضیحات کامل و ویژگی‌ها", icon: FileText },
  { title: "انتخاب رنگ و سایز", icon: Palette },
  { title: "وضعیت موجودی", icon: PackageCheck },
  { title: "افزودن به سبد خرید", icon: ShoppingCart },
  { title: "افزودن به علاقه‌مندی", icon: Heart },
  { title: "پرسش و پاسخ و نظرات کاربران", icon: MessageCircleQuestion },
  { title: "امتیاز محصول", icon: Star },
  { title: "نمایش ۵ محصول مرتبط", icon: Layers3 },
];

const userPanelItems: Feature[] = [
  { title: "سفارش‌های من", icon: ClipboardList },
  { title: "آدرس‌ها", icon: MapPin },
  { title: "علاقه‌مندی‌ها", icon: Heart },
  { title: "اعلان‌ها", icon: Bell },
  { title: "تنظیمات حساب", icon: Settings },
  { title: "کدهای تخفیف من", icon: BadgePercent },
  { title: "نظرات و امتیازهای من", icon: Star },
  { title: "پرسش‌های من", icon: MessageCircleQuestion },
  { title: "خروج از حساب", icon: LogOut },
];

const orderItems = [
  "لیست سفارش‌ها",
  "جزئیات سفارش",
  "وضعیت سفارش",
  "مبلغ کل",
  "تخفیف اعمال‌شده",
  "هزینه ارسال",
  "مبلغ پرداخت‌شده",
  "روش پرداخت",
  "دانلود فاکتور یا رسید",
  "لغو یا ویرایش سفارش قبل از تأیید ادمین",
];

const externalOrderStatuses = [
  "در انتظار تأیید ادمین",
  "در حال ثبت سفارش از ترکیه",
  "سفارش تأیید شد",
  "پرداخت شده",
  "در حال پردازش",
  "در حال ارسال به ایران",
  "آماده تحویل به پست",
  "تحویل داده شد",
  "لغو شده",
  "مرجوع شده",
];

const addressItems = [
  "افزودن آدرس جدید",
  "ویرایش آدرس",
  "حذف آدرس",
  "انتخاب آدرس پیش‌فرض",
  "انتخاب استان از لیست",
  "انتخاب شهر از لیست",
  "شماره موبایل فقط عددی",
  "محدودیت تعداد رقم موبایل",
  "فرم آدرس بزرگ و خوانا",
];

const wishlistItems = [
  "نمایش محصولات ذخیره‌شده",
  "حذف محصول از علاقه‌مندی",
  "رفتن به صفحه محصول",
  "اعلان موجود شدن محصول اگر ناموجود دوباره موجود شد",
  "نمایش قیمت و تخفیف محصول",
];

const notificationItems = [
  "به‌روزرسانی وضعیت سفارش",
  "تخفیف‌های جدید",
  "موجود شدن کالای داخل علاقه‌مندی‌ها",
  "پاسخ داده شدن به سؤال کاربر",
  "پیام‌های مهم سایت",
];

const accountItems = [
  "نام و نام خانوادگی",
  "شماره موبایل",
  "ایمیل",
  "تغییر رمز عبور یا ورود با OTP",
  "تاریخ تولد برای کد تخفیف تولد",
  "خروج از حساب",
];

const cartItems = [
  "تصویر محصول",
  "نام محصول",
  "قیمت",
  "تعداد",
  "تخفیف",
  "هزینه ارسال",
  "مبلغ نهایی",
  "دکمه ادامه خرید",
  "دکمه پرداخت",
  "کلیک روی عکس یا نام محصول باید وارد صفحه همان محصول شود",
];


const userOrderDetailItems = [
  "شماره سفارش",
  "تاریخ ثبت سفارش",
  "وضعیت سفارش",
  "لیست محصولات سفارش",
  "عکس محصول",
  "نام محصول",
  "تعداد هر محصول",
  "قیمت هر محصول",
  "تخفیف اعمال‌شده",
  "هزینه ارسال",
  "مبلغ نهایی",
  "آدرس ارسال",
  "شماره موبایل گیرنده",
  "روش پرداخت",
  "وضعیت پرداخت",
  "رسید یا فاکتور",
  "کد رهگیری ارسال داخل ایران",
];

const userOrderTimelineItems = [
  "ثبت سفارش",
  "در انتظار تأیید ادمین",
  "تأیید سفارش",
  "خرید یا ثبت سفارش از ترکیه",
  "ارسال به ایران",
  "تحویل به پست",
  "تحویل نهایی به مشتری",
];

const userDiscountCodeItems = [
  "کد تخفیف",
  "درصد یا مبلغ تخفیف",
  "تاریخ شروع",
  "تاریخ پایان",
  "وضعیت فعال یا منقضی",
  "حداقل مبلغ خرید",
  "دسته‌بندی یا محصول قابل استفاده",
  "دکمه کپی کد تخفیف",
];

const userReviewItems = [
  "نام محصول",
  "عکس محصول",
  "امتیاز داده‌شده",
  "متن نظر کاربر",
  "وضعیت نظر: در انتظار تأیید، تأیید شده یا رد شده",
  "تاریخ ثبت نظر",
  "امکان ویرایش نظر در صورت مجاز بودن",
];

const userQuestionItems = [
  "نام محصول",
  "سؤال کاربر",
  "وضعیت پاسخ",
  "پاسخ ادمین یا فروشگاه",
  "تاریخ ثبت سؤال",
  "لینک رفتن به صفحه محصول",
  "نمایش پیام ورود برای کاربر مهمان",
];

const userPaymentItems = [
  "پرداخت موفق",
  "پرداخت ناموفق",
  "پرداخت در انتظار",
  "مشاهده مبلغ پرداخت‌شده",
  "مشاهده روش پرداخت",
  "رسید پرداخت",
  "بازگشت وجه دستی توسط ادمین",
];


const adminPanelItems: Feature[] = [
  { title: "مدیریت محصولات", icon: Package },
  { title: "افزودن محصول از Trendyol", icon: Link2 },
  { title: "مدیریت دسته‌بندی‌ها", icon: Layers3 },
  { title: "مدیریت برندها", icon: Store },
  { title: "مدیریت فیلترها", icon: SlidersHorizontal },
  { title: "مدیریت سفارش‌ها", icon: ClipboardList },
  { title: "مدیریت تخفیف‌ها", icon: BadgePercent },
  { title: "مدیریت Q&A", icon: MessageCircleQuestion },
  { title: "مدیریت نظرات", icon: MessageCircle },
  { title: "مدیریت بلاگ", icon: BookOpen },
  { title: "نقش‌ها و سطح دسترسی", icon: ShieldCheck },
  { title: "تنظیمات فروشگاه", icon: Settings },
  { title: "گزارش درآمد", icon: BarChart3 },
  { title: "اعلان‌های ادمین", icon: Bell },
];

const productManagementItems = [
  "افزودن محصول دستی",
  "ویرایش محصول",
  "حذف محصول",
  "افزودن عکس محصول",
  "تعیین برند",
  "تعیین دسته‌بندی",
  "تعیین قیمت تومان",
  "تعیین قیمت لیر در صورت نیاز",
  "تعیین وزن محصول",
  "تعیین موجودی",
  "تعیین تخفیف",
  "فعال یا غیرفعال کردن محصول",
];

const manualProductFormItems = [
  "عنوان محصول",
  "اسلاگ محصول",
  "توضیحات محصول",
  "قیمت تومان",
  "قیمت پایه برای محاسبه تخفیف",
  "ارز پایه: تومان، لیر یا دلار",
  "وضعیت موجودی",
  "برند",
  "دسته‌بندی",
  "منبع محصول: دستی، Trendyol یا Amazon",
  "لینک منبع محصول در صورت وجود",
  "تصویر اصلی محصول",
  "گالری تصاویر محصول با جداکننده کاما",
  "ویژگی‌های پیشرفته به صورت JSON",
  "وزن محصول برای محاسبه ارسال و کارگو",
  "فعال یا غیرفعال کردن محصول",
];

const productListAdminItems = [
  "نمایش تعداد کل محصولات",
  "نمایش تعداد محصولات دستی",
  "نمایش تعداد محصولات Trendyol یا Amazon",
  "جستجوی محصول با نام محصول",
  "فیلتر بر اساس منبع محصول",
  "دکمه افزودن محصول جدید",
  "دکمه وارد کردن محصول از Trendyol",
  "نمایش عنوان محصول",
  "نمایش قیمت",
  "نمایش منبع محصول",
  "دکمه ویرایش محصول",
];

const trendyolImportDetailItems = [
  "فیلد وارد کردن لینک محصول Trendyol",
  "دکمه دریافت اطلاعات",
  "دریافت عنوان محصول",
  "دریافت عکس محصول",
  "دریافت برند",
  "دریافت قیمت لیر",
  "دریافت توضیحات محصول",
  "نمایش پیام خطای ترجمه در صورت مشکل",
  "نمایش متن اصلی ترکی در صورت خطای ترجمه",
  "تشخیص اینکه محصول احتمالاً مرتبط با اتاق خواب هست یا نه",
  "نمایش امتیاز مرتبط بودن محصول",
  "امکان ویرایش همه اطلاعات قبل از ذخیره",
  "امکان تغییر دسته‌بندی و برند قبل از ذخیره",
  "امکان تعیین وزن و هزینه ارسال قبل از ذخیره",
];

const sizeManagementItems = [
  "مدیریت سایزها به عنوان فیلتر",
  "افزودن سایز جدید",
  "ویرایش سایز",
  "حذف سایز",
  "فعال یا غیرفعال کردن سایز",
  "اتصال سایز به دسته‌بندی مربوطه",
  "نمایش سایز در فرم افزودن محصول",
  "سایز نباید یک سیستم جدا و پیچیده باشد؛ باید زیرمجموعه مدیریت فیلترها باشد",
];

const bannerManagementItems = [
  "افزودن بنر جدید",
  "ویرایش بنر",
  "حذف بنر",
  "تصویر بنر",
  "عنوان بنر",
  "موقعیت نمایش مثل home_top",
  "ترتیب نمایش",
  "وضعیت فعال یا غیرفعال",
  "تاریخ شروع و پایان در صورت نیاز",
  "نمایش بنر در صفحه اصلی یا بخش‌های مشخص سایت",
];

const adminSidebarItems = [
  "داشبورد",
  "محصولات",
  "دسته‌بندی‌ها",
  "برندها",
  "اندازه‌ها / سایزها",
  "فیلترها",
  "سفارش‌ها",
  "تخفیف‌ها",
  "سوالات و پاسخ‌ها",
  "نظرات",
  "بلاگ",
  "بنرها",
  "کاربران",
  "بازگشت به صفحه اصلی",
  "خروج از حساب",
];


const trendyolItems = [
  "وارد کردن لینک محصول Trendyol",
  "دریافت عنوان محصول",
  "دریافت عکس‌ها",
  "دریافت توضیحات",
  "دریافت برند",
  "دریافت قیمت",
  "تبدیل قیمت لیر به تومان",
  "امکان ویرایش اطلاعات قبل از ذخیره",
  "امکان جایگزینی محصول",
];

const categoryBrandItems = [
  "افزودن دسته‌بندی جدید",
  "ویرایش دسته‌بندی",
  "حذف دسته‌بندی",
  "فعال یا غیرفعال کردن دسته‌بندی",
  "افزودن برند جدید",
  "ویرایش برند",
  "حذف برند",
  "فعال یا غیرفعال کردن برند",
  "بعد از افزودن برند یا دسته‌بندی، باید بلافاصله در فرم افزودن محصول دیده شود",
];

const adminFilterItems = [
  "رنگ",
  "سایز",
  "جنس",
  "قیمت",
  "امتیاز",
  "موجودی",
  "تخفیف‌دارها",
  "زیرمجموعه دسته‌بندی",
  "بخش جداگانه اندازه لازم نیست؛ اندازه باید یکی از فیلترها باشد",
];

const adminOrderItems = [
  "مشاهده همه سفارش‌ها",
  "جستجوی سفارش",
  "فیلتر بر اساس تاریخ",
  "فیلتر بر اساس وضعیت",
  "فیلتر بر اساس مشتری",
  "فیلتر بر اساس مبلغ",
  "تغییر وضعیت سفارش",
  "ثبت کد رهگیری ارسال داخل ایران",
  "دانلود یا مشاهده فاکتور",
  "مدیریت مرجوعی",
  "گزارش سفارش‌ها",
  "جستجوی سفارش‌ها فقط با Enter یا دکمه جستجو انجام شود",
];

const discountItems = [
  "تخفیف امروز",
  "تخفیف محصول",
  "کد تخفیف",
  "تاریخ شروع",
  "تاریخ پایان",
  "درصد تخفیف",
  "فعال یا غیرفعال بودن تخفیف",
];

const qaReviewItems = [
  "مشاهده پرسش‌های کاربران",
  "پاسخ دادن به پرسش‌ها",
  "تأیید یا رد پرسش",
  "مشاهده نظرات",
  "تأیید یا رد نظر",
  "مدیریت امتیازهای کاربران",
  "ارسال اعلان بعد از پاسخ به سؤال",
];

const blogItems = [
  "افزودن مقاله",
  "ویرایش مقاله",
  "حذف مقاله",
  "تصویر شاخص",
  "عنوان مقاله",
  "متن مقاله",
  "دسته‌بندی مقاله",
  "توضیحات سئو",
  "انتشار یا پیش‌نویس",
  "آپلود Word لازم نیست؛ متن آماده داخل ادیتور کپی می‌شود",
];

const roleItems = [
  "ادمین اصلی: دسترسی کامل",
  "مدیر: دسترسی به بخش‌هایی که ادمین مشخص می‌کند",
  "پرسنل: دسترسی محدودتر",
  "کاربر عادی: فقط پنل کاربر",
];

const storeSettingsItems = [
  "نرخ لیر",
  "نرخ دلار",
  "درصد سود",
  "درصد کارمزد",
  "درصد نرخ امن",
  "هزینه ارسال داخل ترکیه",
  "تعرفه کارگو ترکیه به ایران",
  "هزینه ارسال داخل ایران",
  "اطلاعات تماس",
  "لینک شبکه‌های اجتماعی",
  "متن فوتر",
  "شعار برند",
];

const priceFormulaItems = [
  "قیمت محصول به لیر",
  "نرخ لیر",
  "نرخ دلار در صورت نیاز",
  "درصد سود",
  "درصد کارمزد",
  "درصد نرخ امن",
  "هزینه ارسال داخل ترکیه",
  "هزینه ارسال ترکیه به ایران",
  "هزینه ارسال داخل ایران",
  "وزن محصول",
  "قیمت نهایی باید با نرخ ارز، وزن، کارگو، سود، کارمزد و هزینه‌های ارسال محاسبه شود",
];

const financeItems = [
  "کیف پول حذف شود",
  "شارژ کیف پول حذف شود",
  "استفاده از کیف پول هنگام خرید حذف شود",
  "تاریخچه شارژ و مصرف کیف پول حذف شود",
  "برگشت وجه به کیف پول حذف شود",
  "تراکنش‌ها لازم است",
  "پرداخت موفق، ناموفق و در انتظار لازم است",
  "بازگشت وجه دستی توسط ادمین لازم است",
  "گزارش درآمد لازم است",
  "مشاهده مبلغ پرداخت‌شده و روش پرداخت لازم است",
];

const bugItems = [
  "سایت نباید کاربر را خودکار از حساب خارج کند",
  "Refresh نباید باعث خروج از اکانت شود",
  "صفحات نباید خطای بارگذاری بدهند",
  "بعد از افزودن برند یا دسته‌بندی جدید، باید در فرم افزودن محصول دیده شود",
  "بعد از تغییر وضعیت سفارش، صفحه سفارش‌ها و داشبورد سریع آپدیت شوند",
  "درآمد نباید با ثبت اولیه سفارش اضافه شود",
  "درآمد فقط بعد از پرداخت‌شده یا تأییدشده بودن سفارش حساب شود",
  "در صورت لغو یا مرجوعی، درآمد باید اصلاح شود",
  "جستجوی سفارش‌ها در پنل ادمین نباید وسط تایپ کاربر را قطع کند",
  "کاربر مهمان باید بتواند مسیر ثبت پرسش را واضح ببیند",
"فرم افزودن محصول دستی باید همه فیلدهای لازم مثل قیمت، موجودی، برند، دسته‌بندی، تصویر، گالری، منبع، لینک منبع، ویژگی‌ها و وزن محصول را داشته باشد",
"در وارد کردن محصول از Trendyol اگر ترجمه انجام نشد، متن اصلی محصول نمایش داده شود و خطا واضح باشد",
"سیستم باید تشخیص دهد محصول واردشده از Trendyol مرتبط با فضای اتاق خواب و لونا هست یا نه",
"دسته‌بندی‌های پیش‌فرض نامرتبط مثل اسباب‌بازی، الکترونیک، خودرو و کتاب باید برای سایت لونا حذف یا اصلاح شوند",
"پنل ادمین باید به جای Luna Bedroom Admin بهتر است با نام لونا / LUNA نمایش داده شود",
"رنگ نارنجی شدید فعلی پنل ادمین باید با رنگ‌های گرم و Soft Premium لونا جایگزین شود",


];

const adminDashboardItems = [
  "تعداد سفارش‌های امروز",
  "تعداد سفارش‌های در انتظار تأیید",
  "تعداد سفارش‌های خارجی",
  "درآمد پرداخت‌شده",
  "تعداد محصولات فعال",
  "تعداد محصولات ناموجود",
  "تعداد پرسش‌های بدون پاسخ",
  "تعداد نظرات در انتظار تأیید",
  "اعلان‌های مهم ادمین",
];

const adminProductDetailItems = [
  "مدیریت گالری تصاویر محصول",
  "قیمت قبل",
  "زیرمجموعه محصول",
  "رنگ‌های محصول",
  "سایزهای محصول",
  "جنس محصول",
  "توضیحات کوتاه",
  "توضیحات کامل",
  "ویژگی‌های محصول",
  "امتیاز محصول",
  "محصولات مرتبط",
  "مشخص شدن داخلی یا خارجی بودن محصول",
  "مشخص شدن محصول دستی یا واردشده از Trendyol",
];

const adminUserManagementItems = [
  "لیست کاربران",
  "جستجوی کاربر",
  "مشاهده پروفایل کاربر",
  "شماره موبایل",
  "ایمیل",
  "تعداد سفارش‌ها",
  "مبلغ خرید کل",
  "وضعیت کاربر: فعال یا غیرفعال",
  "مشاهده آدرس‌های کاربر",
  "مشاهده سفارش‌های کاربر",
  "مشاهده نظرات و پرسش‌های کاربر",
];

const adminOrderDetailItems = [
  "شماره سفارش",
  "نام مشتری",
  "شماره موبایل مشتری",
  "آدرس مشتری",
  "لیست محصولات",
  "تعداد محصولات",
  "قیمت هر محصول",
  "تخفیف",
  "هزینه ارسال",
  "مبلغ پرداخت‌شده",
  "روش پرداخت",
  "وضعیت پرداخت",
  "وضعیت سفارش",
  "یادداشت ادمین",
  "کد رهگیری",
  "تاریخ ثبت سفارش",
  "تاریخ تغییر وضعیت سفارش",
];

const adminIncomeReportItems = [
  "درآمد امروز",
  "درآمد این هفته",
  "درآمد این ماه",
  "تعداد سفارش‌های پرداخت‌شده",
  "تعداد سفارش‌های لغوشده",
  "تعداد سفارش‌های مرجوعی",
  "مبلغ برگشت داده‌شده",
  "خروجی ساده گزارش",
  "سفارش ثبت‌شده نباید درآمد حساب شود",
  "درآمد فقط بعد از پرداخت یا تأیید حساب شود",
  "در صورت لغو یا مرجوعی، درآمد باید اصلاح شود",
];

const adminNotificationItems = [
  "سفارش جدید",
  "سفارش خارجی در انتظار تأیید",
  "پرداخت موفق",
  "پرداخت ناموفق",
  "پرسش جدید کاربر",
  "نظر جدید در انتظار تأیید",
  "درخواست مرجوعی",
  "محصول ناموجود",
  "خطا در دریافت محصول از Trendyol",
];

const adminAccessDetailItems = [
  "مشاهده محصولات",
  "افزودن محصول",
  "ویرایش محصول",
  "حذف محصول",
  "مشاهده سفارش‌ها",
  "تغییر وضعیت سفارش",
  "مدیریت تخفیف",
  "مدیریت بلاگ",
  "مدیریت کاربران",
  "مشاهده گزارش درآمد",
  "تغییر تنظیمات فروشگاه",
];

const adminSettingDetailItems = [
  "اطلاعات تماس فروشگاه",
  "شماره تماس",
  "واتساپ",
  "اینستاگرام",
  "تلگرام",
  "روبیکا",
  "بله",
  "متن فوتر",
  "شعار برند",
  "لینک شبکه‌های اجتماعی",
  "تنظیم هزینه ارسال",
  "تنظیم نرخ ارز",
  "تنظیم درصد سود و کارمزد",
];

const footerPages = [
  "درباره ما",
  "ارتباط با ما",
  "قوانین و مقررات",
  "حریم خصوصی",
  "راهنمای خرید",
  "شرایط مرجوعی",
  "سوالات متداول",
  "بلاگ",
];

const footerLinks = [
  "پیشنهاد شگفت‌انگیز",
  "محصولات پرفروش",
  "محصولات جدید",
  "برندهای محبوب",
  "اینستاگرام",
  "تلگرام",
  "واتساپ",
  "روبیکا",
  "بله",
  "نماد اعتماد",
  "کپی‌رایت",
];

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="luna-ref-section-header">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="luna-ref-feature-grid">
      {items.map((item) => {
        const Icon = item.icon || CheckCircle2;

        return (
          <article className="luna-ref-feature-card" key={item.title}>
            <div className="luna-ref-icon">
              <Icon size={20} />
            </div>
            <div>
              <h3>{item.title}</h3>
              {item.text ? <p>{item.text}</p> : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function PillList({ items }: { items: string[] }) {
  return (
    <div className="luna-ref-pill-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="luna-ref-check-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={17} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MiniPanel({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="luna-ref-mini-panel">
      <div className="luna-ref-mini-panel-title">
        <span className="luna-ref-icon">
          <Icon size={20} />
        </span>
        <h3>{title}</h3>
      </div>
      {children}
    </article>
  );
}

function ProductRail() {
  return (
    <div className="luna-ref-product-rail-wrap">
<button className="luna-ref-rail-arrow" type="button" aria-label="قبلی">
  ‹
</button>

      <div className="luna-ref-product-rail">
        {products.map((product, index) => (
          <article className="luna-ref-product-card" key={product.title}>
            <button className="luna-ref-fav" type="button" aria-label="افزودن به علاقه‌مندی">
              <Heart size={18} />
            </button>

            <div className={`luna-ref-product-image luna-ref-product-image-${index + 1}`}>
              <Sparkles size={28} />
            </div>

            <div className="luna-ref-product-body">
              <span>{product.tag}</span>
              <h3>{product.title}</h3>

              <div className="luna-ref-price-row">
                <strong>{product.price}</strong>
                {product.discount ? <em>{product.discount}</em> : null}
              </div>

              {product.oldPrice ? <del>{product.oldPrice} تومان</del> : null}
            </div>
          </article>
        ))}
      </div>

<button className="luna-ref-rail-arrow" type="button" aria-label="بعدی">
  ›
</button>
    </div>
  );
}

export default function LunaReferencePage() {
  return (
    <main className="luna-ref-page" dir="rtl">
        <section className="luna-ref-section luna-ref-intro-simple">
            <SectionHeader
                eyebrow="LUNA"
                title="تنظیمات و تغییرات مورد نیاز سایت لونا"
                text="این صفحه برای نمایش تمام اصلاحات، امکانات لازم، بخش‌های پنل کاربر، پنل ادمین، صفحات فروشگاهی، تنظیمات، باگ‌ها و مواردی که باید در سایت لونا اضافه، حذف یا اصلاح شوند آماده شده است."
  />

  <div className="luna-ref-style-tags">
    <span>Soft Premium</span>
    <span>Cozy</span>
    <span>RTL</span>
    <span>Trendyol-like UX</span>
    <span>«لونا»؛ کنجِ آرامِ تو!</span>
  </div>
</section>


<section className="luna-ref-section luna-ref-color-section">
  <SectionHeader
    eyebrow="COLOR"
    title="رنگ‌های اصلی مورد استفاده در طراحی لونا"
    text="این رنگ‌ها باید در کل سایت، پنل کاربر، پنل ادمین، کارت‌ها، دکمه‌ها، بنرها، فوتر و بخش‌های فروشگاهی رعایت شوند تا ظاهر سایت یکدست، گرم، آرام و Soft Premium بماند."
  />

  <div className="luna-ref-color-grid">
    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-bg" />
      <div>
        <h3>پس‌زمینه اصلی سایت</h3>
        <strong>#FBF4EC</strong>
        <p>برای بک‌گراند کلی صفحه‌ها، فضای اصلی سایت و بخش‌های آرام استفاده شود.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-card" />
      <div>
        <h3>پس‌زمینه کارت‌ها</h3>
        <strong>#FFFAF5</strong>
        <p>برای کارت محصول، کارت پنل کاربر، باکس‌های ادمین و بخش‌های داخلی.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-cream" />
      <div>
        <h3>کرم روشن</h3>
        <strong>#FFF3E4</strong>
        <p>برای باکس‌های نرم، هایلایت‌های سبک، بنرهای آرام و بک‌گراند داخلی.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-soft" />
      <div>
        <h3>بژ نرم</h3>
        <strong>#EAD8C8</strong>
        <p>برای خطوط نرم، جداکننده‌ها، پس‌زمینه آیکون‌ها و بخش‌های خنثی.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-primary" />
      <div>
        <h3>رنگ اصلی برند</h3>
        <strong>#B77B67</strong>
        <p>برای دکمه‌های اصلی، تخفیف‌ها، لینک‌های مهم، آیکون‌های فعال و CTA.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-primary-dark" />
      <div>
        <h3>رنگ تأکیدی تیره</h3>
        <strong>#8F5848</strong>
        <p>برای تیترهای مهم، دکمه‌های پررنگ، متن‌های تأکیدی و حالت فعال منو.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-pink" />
      <div>
        <h3>صورتی چرک / رز گرم</h3>
        <strong>#D8A4A0</strong>
        <p>برای حس لطافت، بنرهای زنانه، کالکشن‌ها، هدیه‌ها و جزئیات دکوراتیو.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-text" />
      <div>
        <h3>رنگ متن اصلی</h3>
        <strong>#3B2A24</strong>
        <p>برای تیترها، نام محصول، متن‌های مهم و قیمت‌های اصلی.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-muted" />
      <div>
        <h3>رنگ متن توضیحی</h3>
        <strong>#7F675D</strong>
        <p>برای توضیحات، متن‌های فرعی، تاریخ‌ها، زیرعنوان‌ها و متن‌های کم‌اهمیت‌تر.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-border" />
      <div>
        <h3>رنگ خط و بوردر</h3>
        <strong>rgba(107, 78, 65, 0.16)</strong>
        <p>برای خط دور کارت‌ها، فرم‌ها، ورودی‌ها، جدول‌ها و جداکننده‌های نرم.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-white" />
      <div>
        <h3>سفید تمیز</h3>
        <strong>#FFFFFF</strong>
        <p>برای کارت‌های برجسته، سرچ‌باکس، منوها، مودال‌ها و بخش‌های خواناتر.</p>
      </div>
    </article>

    <article className="luna-ref-color-card">
      <span className="luna-ref-color-swatch color-shadow" />
      <div>
        <h3>سایه نرم</h3>
        <strong>rgba(96, 66, 54, 0.12)</strong>
        <p>برای سایه کارت‌ها، بنرها، دکمه‌ها و باکس‌های داشبورد بدون سنگین شدن صفحه.</p>
      </div>
    </article>
  </div>
</section>


      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="01"
          title="صفحه اصلی"
          text="صفحه اصلی باید کامل، مرتب، فروشگاهی و مناسب معرفی تمام دسته‌های مربوط به خواب، آرامش، دکور و هدیه باشد."
        />
        <FeatureGrid items={homeSections} />
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="02"
          title="دسته‌بندی‌ها"
          text="دسته‌بندی‌ها باید خطی، جمع‌وجور، قابل اسکرول و مناسب موبایل باشند."
        />

        <div className="luna-ref-category-rail">
          {categories.map((category) => (
            <button type="button" key={category}>
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="03"
          title="محصولات پرفروش"
          text="در دسکتاپ فلش چپ و راست داشته باشد. در موبایل باعث گیر کردن اسکرول نشود. کارت‌ها شامل عکس، نام، قیمت، تخفیف و علاقه‌مندی باشند."
        />
        <ProductRail />
      </section>

      <section className="luna-ref-section luna-ref-offer-section">
        <div className="luna-ref-offer-copy">
          <span>04</span>
          <h2>تخفیف‌های شگفت‌انگیز</h2>
          <p>
            این بخش می‌تواند با عنوان «پیشنهادهای ویژه لونا» هم نمایش داده شود. رنگ آن کمی
            پررنگ‌تر از بخش‌های عادی است، اما همچنان باید گرم، لطیف و هماهنگ با هویت لونا
            باشد.
          </p>
        </div>

        <div className="luna-ref-offer-card">
          <BadgePercent size={34} />
          <strong>تا ۳۰٪ تخفیف</strong>
          <span>روی محصولات منتخب خواب و آرامش</span>
        </div>
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="05"
          title="برندها و کالکشن‌ها"
          text="بخش فعلی که شبیه محصولات بزرگ تکی است، باید تبدیل به کالکشن‌ها و مسیرهای فروشگاهی قابل کلیک شود."
        />
        <FeatureGrid items={collections} />
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="06"
          title="صفحه محصولات و فیلترها"
          text="فیلترها و مرتب‌سازی‌ها باید حرفه‌ای باشند و از پنل ادمین قابل مدیریت شوند."
        />

        <div className="luna-ref-two-col">
          <MiniPanel icon={SlidersHorizontal} title="فیلترهای لازم">
            <PillList items={filters} />
          </MiniPanel>

          <MiniPanel icon={ListFilter} title="مرتب‌سازی لازم">
            <PillList items={sorts} />
          </MiniPanel>
        </div>
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="07"
          title="سرچ پیشرفته"
          text="جستجو باید هنگام تایپ پیشنهاد کلمه نشان دهد و کاربر را سریع به محصول، دسته یا کالکشن مناسب برساند."
        />

        <div className="luna-ref-search-demo">
          <div className="luna-ref-search-box">
            <Search size={20} />
            <span>جستجو در لونا...</span>
          </div>

          <div className="luna-ref-suggestions">
            {searchSuggestions.map((item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="08"
          title="صفحه محصول"
          text="صفحه محصول باید کامل، واضح و فروش‌محور باشد و ۵ محصول مرتبط را هم نمایش دهد."
        />
        <FeatureGrid items={productPageItems} />
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="09"
          title="پنل کاربر"
          text="کیف پول حذف شده است. پنل کاربر باید ساده، کاربردی و شامل بخش‌های اصلی حساب کاربری باشد."
        />
        <FeatureGrid items={userPanelItems} />
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="10"
          title="سفارش‌های من و وضعیت سفارش خارجی"
          text="کاربر باید جزئیات کامل سفارش، پرداخت، ارسال و وضعیت سفارش خارجی را ببیند."
        />

        <div className="luna-ref-two-col">
          <MiniPanel icon={ReceiptText} title="اطلاعات سفارش">
            <CheckList items={orderItems} />
          </MiniPanel>

          <MiniPanel icon={Truck} title="وضعیت سفارش خارجی">
            <CheckList items={externalOrderStatuses} />
          </MiniPanel>
        </div>
      </section>

      <section className="luna-ref-section">
        <SectionHeader eyebrow="11" title="بخش‌های کامل پنل کاربر" />

        <div className="luna-ref-three-col">
          <MiniPanel icon={MapPin} title="آدرس‌ها">
            <CheckList items={addressItems} />
          </MiniPanel>

          <MiniPanel icon={Heart} title="علاقه‌مندی‌ها">
            <CheckList items={wishlistItems} />
          </MiniPanel>

          <MiniPanel icon={Bell} title="اعلان‌ها">
            <CheckList items={notificationItems} />
          </MiniPanel>

          <MiniPanel icon={Settings} title="تنظیمات حساب">
            <CheckList items={accountItems} />
          </MiniPanel>

          <MiniPanel icon={ShoppingCart} title="سبد خرید و پرداخت">
            <CheckList items={cartItems} />
          </MiniPanel>
        </div>
      </section>

      <section className="luna-ref-section">
  <SectionHeader
    eyebrow="11.1"
    title="جزئیات تکمیلی پنل کاربر"
    text="این بخش‌ها باید در دمو مشخص باشند تا برنامه‌نویس فقط به یک لیست ساده اکتفا نکند و بداند داخل هر صفحه پنل کاربر دقیقاً چه چیزهایی لازم است."
  />

  <div className="luna-ref-three-col">
    <MiniPanel icon={ReceiptText} title="جزئیات کامل سفارش">
      <CheckList items={userOrderDetailItems} />
    </MiniPanel>

    <MiniPanel icon={Truck} title="تایم‌لاین سفارش خارجی">
      <CheckList items={userOrderTimelineItems} />
    </MiniPanel>

    <MiniPanel icon={BadgePercent} title="کدهای تخفیف من">
      <CheckList items={userDiscountCodeItems} />
    </MiniPanel>

    <MiniPanel icon={Star} title="نظرات و امتیازهای من">
      <CheckList items={userReviewItems} />
    </MiniPanel>

    <MiniPanel icon={MessageCircleQuestion} title="پرسش‌های من">
      <CheckList items={userQuestionItems} />
    </MiniPanel>

    <MiniPanel icon={CreditCard} title="وضعیت پرداخت‌ها">
      <CheckList items={userPaymentItems} />
    </MiniPanel>
  </div>
</section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="12"
          title="پنل ادمین"
          text="پنل ادمین باید کامل باشد، اما بدون امکانات اضافه‌ای مثل کیف پول، حسابداری خیلی پیچیده یا گزارش‌های تحلیلی بسیار پیشرفته."
        />
        <FeatureGrid items={adminPanelItems} />
      </section>

      <section className="luna-ref-section">
        <SectionHeader eyebrow="13" title="مدیریت‌های اصلی پنل ادمین" />

        <div className="luna-ref-three-col">
          <MiniPanel icon={Package} title="مدیریت محصولات">
            <CheckList items={productManagementItems} />
          </MiniPanel>

          <MiniPanel icon={Edit3} title="افزودن محصول دستی">
             <CheckList items={manualProductFormItems} />
          </MiniPanel>

            <MiniPanel icon={ListFilter} title="لیست محصولات در پنل ادمین">
              <CheckList items={productListAdminItems} />
            </MiniPanel>

          <MiniPanel icon={ExternalLink} title="افزودن محصول از Trendyol">
            <CheckList items={trendyolItems} />
          </MiniPanel>

          
            <MiniPanel icon={ExternalLink} title="جزئیات وارد کردن محصول از Trendyol">
              <CheckList items={trendyolImportDetailItems} />
            </MiniPanel>


          <MiniPanel icon={Store} title="مدیریت دسته‌بندی و برند">
            <CheckList items={categoryBrandItems} />
          </MiniPanel>

          <MiniPanel icon={SlidersHorizontal} title="مدیریت فیلترها">
            <CheckList items={adminFilterItems} />
          </MiniPanel>

          <MiniPanel icon={ClipboardList} title="مدیریت سفارش‌ها">
            <CheckList items={adminOrderItems} />
          </MiniPanel>

          <MiniPanel icon={BadgePercent} title="مدیریت تخفیف‌ها">
            <CheckList items={discountItems} />
          </MiniPanel>

          <MiniPanel icon={MessageCircleQuestion} title="مدیریت Q&A و نظرات">
            <CheckList items={qaReviewItems} />
          </MiniPanel>

          <MiniPanel icon={BookOpen} title="مدیریت بلاگ">
            <CheckList items={blogItems} />
          </MiniPanel>

          <MiniPanel icon={Users} title="نقش‌ها و دسترسی‌ها">
            <CheckList items={roleItems} />
          </MiniPanel>

          <MiniPanel icon={ImagePlus} title="مدیریت بنرها">
            <CheckList items={bannerManagementItems} />
          </MiniPanel>

          <MiniPanel icon={Layers3} title="منوی کامل پنل ادمین">
              <CheckList items={adminSidebarItems} />
            </MiniPanel>


        </div>
      </section>

            <section className="luna-ref-section">
  <SectionHeader
    eyebrow="13.1"
    title="جزئیات تکمیلی پنل ادمین"
    text="این بخش‌ها باعث می‌شوند دمو برای برنامه‌نویس کامل‌تر شود و فقط به نام منوها محدود نباشد."
  />

  <div className="luna-ref-three-col">
    <MiniPanel icon={BarChart3} title="داشبورد ادمین">
      <CheckList items={adminDashboardItems} />
    </MiniPanel>

    <MiniPanel icon={Package} title="جزئیات بیشتر مدیریت محصول">
      <CheckList items={adminProductDetailItems} />
    </MiniPanel>

    <MiniPanel icon={Users} title="مدیریت کاربران">
      <CheckList items={adminUserManagementItems} />
    </MiniPanel>

    <MiniPanel icon={ClipboardList} title="جزئیات کامل سفارش برای ادمین">
      <CheckList items={adminOrderDetailItems} />
    </MiniPanel>

    <MiniPanel icon={BarChart3} title="گزارش درآمد">
      <CheckList items={adminIncomeReportItems} />
    </MiniPanel>

    <MiniPanel icon={Bell} title="اعلان‌های ادمین">
      <CheckList items={adminNotificationItems} />
    </MiniPanel>

    <MiniPanel icon={ShieldCheck} title="جزئیات سطح دسترسی">
      <CheckList items={adminAccessDetailItems} />
    </MiniPanel>

    <MiniPanel icon={Settings} title="جزئیات تنظیمات فروشگاه">
      <CheckList items={adminSettingDetailItems} />
    </MiniPanel>

      <MiniPanel icon={SlidersHorizontal} title="مدیریت اندازه‌ها / سایزها">
        <CheckList items={sizeManagementItems} />
      </MiniPanel>

      <MiniPanel icon={ImagePlus} title="مدیریت بنرها">
        <CheckList items={bannerManagementItems} />
      </MiniPanel>

      <MiniPanel icon={Layers3} title="منوی کامل پنل ادمین">
        <CheckList items={adminSidebarItems} />
      </MiniPanel>

  </div>
</section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="14"
          title="تنظیمات فروشگاه و محاسبه قیمت محصولات خارجی"
          text="برای محصولات Trendyol باید قیمت نهایی با نرخ ارز، وزن، کارگو، سود، کارمزد و هزینه‌های ارسال محاسبه شود."
        />

        <div className="luna-ref-two-col">
          <MiniPanel icon={Settings} title="تنظیمات فروشگاه">
            <CheckList items={storeSettingsItems} />
          </MiniPanel>

          <MiniPanel icon={CircleDollarSign} title="فرمول قیمت‌گذاری">
            <CheckList items={priceFormulaItems} />
          </MiniPanel>
        </div>
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="15"
          title="مالی بدون کیف پول"
          text="کیف پول، شارژ کیف پول و برگشت وجه به کیف پول حذف شوند؛ اما تراکنش‌ها، وضعیت پرداخت و گزارش درآمد لازم هستند."
        />

        <MiniPanel icon={CreditCard} title="موارد مالی لازم و حذف‌شده">
          <CheckList items={financeItems} />
        </MiniPanel>
      </section>

      <section className="luna-ref-section luna-ref-warning-section">
        <SectionHeader
          eyebrow="16"
          title="باگ‌هایی که باید رفع شوند"
          text="این‌ها قابلیت جدید نیستند؛ رفع اشکال هستند و باید در محدوده اصلاح پروژه در نظر گرفته شوند."
        />

        <MiniPanel icon={AlertTriangle} title="لیست باگ‌ها و اصلاحات ضروری">
          <CheckList items={bugItems} />
        </MiniPanel>
      </section>

      <section className="luna-ref-section">
        <SectionHeader
          eyebrow="17"
          title="صفحات محتوایی و فوتر"
          text="فوتر باید حرفه‌ای، کامل و هماهنگ با هویت برند لونا باشد."
        />

        <div className="luna-ref-two-col">
          <MiniPanel icon={FileText} title="صفحات لازم">
            <PillList items={footerPages} />
          </MiniPanel>

          <MiniPanel icon={Tags} title="لینک‌های فوتر">
            <PillList items={footerLinks} />
          </MiniPanel>
        </div>

        <div className="luna-ref-footer-demo">
          <div>
            <h3>LUNA / لونا</h3>
            <p>
              لونا فروشگاهی برای انتخاب‌های آرام، گرم و دل‌نشین خانه است؛ از لباس خواب و
              روتختی تا شمع، رایحه، نور و دکور اتاق خواب.
            </p>
            <strong>«لونا»؛ کنجِ آرامِ تو!</strong>
          </div>

          <div className="luna-ref-socials">
            <span>
              <Instagram size={18} />
              اینستاگرام
            </span>
            <span>
              <MessageCircle size={18} />
              تلگرام
            </span>
            <span>
              <Phone size={18} />
              واتساپ
            </span>
            <span>
              <Mail size={18} />
              ارتباط با ما
            </span>
          </div>
        </div>
      </section>


    </main>
  );
}