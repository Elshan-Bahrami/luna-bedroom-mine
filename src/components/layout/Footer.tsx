import Link from "next/link";

export default function Footer() {
  return (
    <footer className="luna-footer">
      <div className="luna-container">
        <div className="luna-footer-grid">
          <div>
            <h3>Luna Bedroom</h3>
            <p>
              «لونا»؛ کنجِ آرامِ تو! فروشگاه آرامش، خواب، دکور خانه، شمع، رایحه،
              لباس خواب و انتخاب‌های دلنشین برای فضای شخصی خانه.
            </p>
          </div>

          <div>
            <h4>لینک‌های مهم</h4>
            <div className="luna-footer-links">
              <Link href="/about">درباره ما</Link>
              <Link href="/contact">ارتباط با ما</Link>
              <Link href="/rules">قوانین و مقررات</Link>
              <Link href="/privacy">حریم خصوصی</Link>
              <Link href="/faq">سوالات متداول</Link>
            </div>
          </div>

          <div>
            <h4>دسته‌بندی‌ها</h4>
            <div className="luna-footer-links">
              <Link href="/offers">پیشنهاد شگفت‌انگیز</Link>
              <Link href="/best-sellers">محصولات پرفروش</Link>
              <Link href="/products/new">محصولات جدید</Link>
              <Link href="/collections">کالکشن‌ها</Link>
            </div>
          </div>

          <div>
            <h4>ارتباط با لونا</h4>
            <p>اینستاگرام، تلگرام، واتساپ، روبیکا و بله</p>

            <div className="luna-socials">
              <Link className="luna-btn luna-btn-light" href="#">
                Instagram
              </Link>

              <Link className="luna-btn luna-btn-light" href="#">
                Telegram
              </Link>
            </div>
          </div>
        </div>

        <div className="luna-footer-bottom">
          تمام حقوق این سایت برای Luna محفوظ است.
        </div>
      </div>
    </footer>
  );
}