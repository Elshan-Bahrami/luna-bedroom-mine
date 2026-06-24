import Link from "next/link";
import { collections } from "@/data/home";

export default function Collections() {
  return (
    <section className="luna-section">
      <div className="luna-container">
        <div className="luna-section-header">
          <h2 className="luna-section-title">کالکشن‌های منتخب لونا</h2>
          <Link href="/collections" className="luna-section-link">
            مشاهده همه
          </Link>
        </div>

        <div className="luna-collections-grid">
          {collections.map((item) => (
            <Link href={item.href} key={item.id} className="luna-collection-card">
              <img src={item.image} alt={item.title} />
              <div className="luna-collection-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}