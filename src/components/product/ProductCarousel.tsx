"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  href: string;
};

type ProductCarouselProps = {
  title: string;
  href: string;
  products: Product[];
  offerStyle?: boolean;
};

export default function ProductCarousel({
  title,
  href,
  products,
  offerStyle = false,
}: ProductCarouselProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="luna-section">
      <div className="luna-container">
        <div className={offerStyle ? "luna-offers-panel" : ""}>
          <div className="luna-section-header">
           <div className={offerStyle ? "luna-offers-heading" : ""}>
              <h2 className="luna-section-title">{title}</h2>

              {offerStyle && (
               <p className="luna-offers-subtitle">
                      پیشنهادهای [جذاب] لونا برای خریدهای گرم، آرام و اقتصادی‌تر.
                </p>
  )}
            </div>

            <div className="luna-carousel-arrows">
              <Link href={href} className="luna-section-link">
                مشاهده همه
              </Link>

              <button
                className="luna-icon-btn"
                onClick={() => scroll("right")}
                aria-label="حرکت به راست"
                type="button"
              >
                <ChevronRight size={20} />
              </button>

              <button
                className="luna-icon-btn"
                onClick={() => scroll("left")}
                aria-label="حرکت به چپ"
                type="button"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          </div>

          <div ref={rowRef} className="luna-products-row luna-scroll-hide">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

