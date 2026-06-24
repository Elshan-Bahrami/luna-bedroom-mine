import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryShortcuts from "@/components/home/CategoryShortcuts";
import Advantages from "@/components/home/Advantages";
import ProductCarousel from "@/components/product/ProductCarousel";
import Collections from "@/components/home/Collections";
import NewProducts from "@/components/home/NewProducts";
import ArticlesPreview from "@/components/home/ArticlesPreview";
import { bestSellerProducts, offerProducts } from "@/data/home";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>

       <section className="developer-note-banner" dir="rtl">
  <div className="developer-note-content">
    <div>
      <span className="developer-note-label">برای برنامه‌نویس</span>
      <h2>یادداشت‌هایی برای آقای اصغری عزیز</h2>
      <p>
        برای مشاهده کامل تنظیمات، تغییرات مورد نیاز، پنل کاربر، پنل ادمین، رنگ‌ها،
        امکانات لازم، موارد حذف‌شده و باگ‌های سایت لونا، این صفحه را بررسی کنید.
      </p>
    </div>

    <Link href="/luna-reference" className="developer-note-button">
      مشاهده صفحه تنظیمات و تغییرات سایت لونا
    </Link>
  </div>
</section>

        <HeroSlider />
        <CategoryShortcuts />
        <Advantages />

        <ProductCarousel
          title="محصولات پرفروش هفته"
          href="/best-sellers"
          products={bestSellerProducts}
        />

        <ProductCarousel
          title="تخفیف‌های شگفت‌انگیز"
          href="/offers"
          products={offerProducts}
          offerStyle
        />

        <Collections />
        <NewProducts />
        <ArticlesPreview />
       
      </main>


      

      <Footer />
    </>
  );
}