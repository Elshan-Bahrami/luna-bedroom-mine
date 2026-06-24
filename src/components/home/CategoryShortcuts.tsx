import Link from "next/link";
import { categories } from "@/data/home";

export default function CategoryShortcuts() {
  return (
    <section className="luna-section luna-category-section">
      <div className="luna-container">
        <div className="luna-section-header">
          <div>
            <h2 className="luna-section-title">دسته‌بندی‌های لونا</h2>
          </div>

          <Link href="/products" className="luna-view-all">
            مشاهده همه
          </Link>
        </div>

        <div className="luna-category-panel">
          <div className="luna-categories">
           {categories.map((category, index) => {
  const Icon = category.icon;

  return (
    <Link
      key={`${category.href}-${category.title}-${index}`}
      href={category.href}
      className="luna-category-card"
    >
      <span className="luna-category-icon">
        <Icon size={25} />
      </span>

      <span>{category.title}</span>
    </Link>
  );
})}
          </div>
        </div>
      </div>
    </section>
  );
}