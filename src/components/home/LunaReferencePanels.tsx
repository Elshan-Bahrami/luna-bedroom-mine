import {
  Bell,
  Heart,
  LayoutDashboard,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Tags,
  Truck,
  UserRound,
} from "lucide-react";

const trendCategories = [
  "اتاق خواب",
  "لباس خواب",
  "روتختی",
  "شمع و رایحه",
  "نور و فضا",
  "دکور",
  "هدیه‌ها",
  "برندها",
];

const productCards = [
  "روتختی‌های پرفروش",
  "لباس خواب‌های محبوب",
  "شمع‌های خاص",
  "کوسن و دکور",
];

const brandCards = [
  "کالکشن خواب آرام",
  "برندهای محبوب",
  "هدیه‌های لونا",
  "دکور اتاق خواب",
];

const userPanelItems = [
  { title: "سفارش‌های من", icon: PackageCheck },
  { title: "آدرس‌ها", icon: Truck },
  { title: "علاقه‌مندی‌ها", icon: Heart },
  { title: "اعلان‌ها", icon: Bell },
  { title: "تنظیمات حساب", icon: UserRound },
];

const adminPanelItems = [
  { title: "مدیریت محصولات", icon: ShoppingBag },
  { title: "سفارش‌ها", icon: PackageCheck },
  { title: "تخفیف‌ها", icon: Tags },
  { title: "نرخ ارز و سود", icon: Settings },
  { title: "نقش‌ها و دسترسی", icon: ShieldCheck },
];

export default function LunaReferencePanels() {
  return (
    <section className="luna-reference-section">
      <div className="luna-container">
        <div className="luna-reference-header">
          <span>UI Reference</span>
          <h2>مدل نهایی پیشنهادی برای لونا</h2>
          <p>
            این بخش فقط برای نمایش ظاهر، رنگ، چیدمان و کارایی سایت است تا برنامه‌نویس
            بداند تغییرات باید با چه سبک و ساختاری انجام شوند.
          </p>
        </div>

        <div className="luna-reference-card">
          <div className="luna-reference-card-head">
            <div>
              <span className="luna-reference-label">صفحه اصلی</span>
              <h3>ساختار شبیه ترندیول، با هویت بصری لونا</h3>
            </div>
            <Sparkles size={24} />
          </div>

          <div className="luna-trend-strip">
            {trendCategories.map((item) => (
              <div key={item} className="luna-trend-item">
                <span />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="luna-reference-grid">
          <div className="luna-reference-card">
            <div className="luna-reference-card-head">
              <div>
                <span className="luna-reference-label">ریلی</span>
                <h3>محصولات پرفروش هفته</h3>
              </div>
              <ShoppingBag size={23} />
            </div>

            <div className="luna-mini-products">
              {productCards.map((item, index) => (
                <div key={item} className="luna-mini-product">
                  <div className="luna-mini-product-image">
                    <span>{index + 1}</span>
                  </div>
                  <strong>{item}</strong>
                  <p>نمایش ریلی با فلش چپ و راست</p>
                </div>
              ))}
            </div>
          </div>

          <div className="luna-reference-card luna-reference-offer">
            <div className="luna-reference-card-head">
              <div>
                <span className="luna-reference-label">فروش ویژه</span>
                <h3>تخفیف‌های شگفت‌انگیز</h3>
              </div>
              <Tags size={23} />
            </div>

            <p className="luna-reference-note">
              این بخش باید رنگی‌تر و جذاب‌تر باشد، اما همچنان با سبک گرم و آرام لونا
              هماهنگ بماند.
            </p>

            <div className="luna-offer-preview-row">
              <span>پیشنهاد محدود</span>
              <strong>تا ۳۰٪ تخفیف</strong>
              <button type="button">مشاهده همه</button>
            </div>
          </div>
        </div>

        <div className="luna-reference-card">
          <div className="luna-reference-card-head">
            <div>
              <span className="luna-reference-label">به جای محصولات بزرگ تکی</span>
              <h3>برندها، کالکشن‌ها و دسته‌بندی‌های ویژه</h3>
            </div>
            <LayoutDashboard size={23} />
          </div>

          <div className="luna-brand-reference-grid">
            {brandCards.map((item) => (
              <div key={item} className="luna-brand-reference-card">
                <div />
                <strong>{item}</strong>
                <p>با کلیک، صفحه محصولات همین برند یا کالکشن باز شود.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="luna-reference-grid">
          <div className="luna-reference-card">
            <div className="luna-reference-card-head">
              <div>
                <span className="luna-reference-label">صفحه محصولات</span>
                <h3>فیلترهای حرفه‌ای</h3>
              </div>
              <SlidersHorizontal size={23} />
            </div>

            <div className="luna-filter-preview">
              <span>دسته‌بندی</span>
              <span>برند</span>
              <span>قیمت</span>
              <span>رنگ</span>
              <span>سایز</span>
              <span>امتیاز</span>
              <span>تخفیف‌دارها</span>
            </div>

            <div className="luna-search-preview">
              <Search size={18} />
              <span>جستجو با پیشنهاد کلمه...</span>
            </div>
          </div>

          <div className="luna-reference-card">
            <div className="luna-reference-card-head">
              <div>
                <span className="luna-reference-label">پنل‌ها</span>
                <h3>پنل کاربر و پنل ادمین</h3>
              </div>
              <UserRound size={23} />
            </div>

            <div className="luna-panel-preview">
              <div>
                <strong>پنل کاربر</strong>
                {userPanelItems.map(({ title, icon: Icon }) => (
                  <span key={title}>
                    <Icon size={15} />
                    {title}
                  </span>
                ))}
              </div>

              <div>
                <strong>پنل ادمین</strong>
                {adminPanelItems.map(({ title, icon: Icon }) => (
                  <span key={title}>
                    <Icon size={15} />
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}