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


export default function HomePage() {
  return (
    <>
      <Header />

      <main>
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