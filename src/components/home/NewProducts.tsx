import Link from "next/link";
import { newProducts } from "@/data/home";
import ProductCard from "@/components/product/ProductCard";

export default function NewProducts() {
  return (
    <section className="luna-section">
      <div className="luna-container">
        <div className="luna-section-header">
          <h2 className="luna-section-title">محصولات جدید</h2>
          <Link href="/products/new" className="luna-section-link">
            مشاهده همه
          </Link>
        </div>

        <div className="luna-products-grid">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}