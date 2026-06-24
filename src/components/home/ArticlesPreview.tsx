import Link from "next/link";
import { articles } from "@/data/home";

export default function ArticlesPreview() {
  return (
    <section className="luna-section">
      <div className="luna-container">
        <div className="luna-section-header">
          <h2 className="luna-section-title">گوشه آرامش لونا</h2>
          <Link href="/blog" className="luna-section-link">
            مشاهده همه مقالات
          </Link>
        </div>

        <div className="luna-articles-grid">
          {articles.map((article) => (
            <Link href={article.href} key={article.id} className="luna-article-card">
              <img src={article.image} alt={article.title} />
              <div className="luna-article-body">
                <span>{article.date}</span>
                <h3>{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}