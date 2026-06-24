import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  href: string;
};

type ProductCardProps = {
  product: Product;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;

  return (
    <article className="luna-product-card">
      <Link href={product.href} className="luna-product-image-link">
      <div className="luna-product-image-wrap">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 230px"
          className="luna-product-image"
        />
      </div>
        {hasDiscount ? <span className="luna-discount-badge">تخفیف</span> : null}
      </Link>

      <button className="luna-product-wishlist" aria-label="افزودن به علاقه‌مندی" type="button">
        <Heart size={18} />
      </button>

      <div className="luna-product-info">
        <Link href={product.href} className="luna-product-title">
          {product.title}
        </Link>

      <div className="luna-product-price-row">
         <span className="luna-product-price">{product.price}</span>

        {product.oldPrice && (
         <span className="luna-product-old-price">{product.oldPrice}</span>
  )}
          </div>
      </div>
    </article>
  );
}