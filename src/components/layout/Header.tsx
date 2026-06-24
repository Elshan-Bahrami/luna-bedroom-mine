"use client";

import Link from "next/link";
import {
  Bell,
  Heart,
  Home,
  LogIn,
  LogOut,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const userIsLoggedIn = false;

  return (
    <>
      <header className="luna-header">
        <div className="luna-container luna-header-inner">
          <button
            className="luna-icon-btn luna-menu-btn"
            aria-label="منو"
            onClick={() => setOpen(true)}
            type="button"
          >
            <Menu size={21} />
          </button>

          <div className="luna-header-actions">
            <Link href="/profile" className="luna-icon-btn" aria-label="حساب کاربری">
              <User size={20} />
            </Link>

            <Link href="/wishlist" className="luna-icon-btn" aria-label="علاقه‌مندی‌ها">
              <Heart size={20} />
            </Link>

            <Link href="/cart" className="luna-icon-btn luna-cart-btn" aria-label="سبد خرید">
              <ShoppingBag size={20} />
              <span>2</span>
            </Link>
          </div>

          <Link href="/" className="luna-logo" aria-label="Luna">
            <span className="luna-logo-main">Luna</span>
            <span className="luna-logo-sub">Bedroom</span>
          </Link>

          <form className="luna-search">
            <input type="search" placeholder="جستجوی محصولات..." />
            <button type="submit" aria-label="جستجو">
              <Search size={19} />
            </button>
          </form>
        </div>
      </header>

      <div
        className={`luna-sidebar-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`luna-mobile-sidebar ${open ? "open" : ""}`}>
        <div className="luna-sidebar-top">
          <Link href="/" className="luna-logo" onClick={() => setOpen(false)}>
            <span className="luna-logo-main">Luna</span>
            <span className="luna-logo-sub">Bedroom</span>
          </Link>

          <button
            className="luna-icon-btn"
            onClick={() => setOpen(false)}
            aria-label="بستن"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="luna-sidebar-user">
          {userIsLoggedIn ? (
            <>
              <strong>سلام، کاربر عزیز</strong>
              <span>به حساب لونا خوش آمدی</span>
            </>
          ) : (
            <>
              <strong>وارد حساب کاربری شوید</strong>
              <span>برای پیگیری سفارش و ذخیره علاقه‌مندی‌ها</span>
            </>
          )}
        </div>

        <nav className="luna-sidebar-menu">
          <Link href="/" onClick={() => setOpen(false)}>
            <Home size={18} />
            صفحه اصلی
          </Link>

          <Link href="/profile" onClick={() => setOpen(false)}>
            <User size={18} />
            حساب کاربری
          </Link>

          <Link href="/orders" onClick={() => setOpen(false)}>
            <ShoppingBag size={18} />
            سفارش‌ها
          </Link>

          <Link href="/notifications" onClick={() => setOpen(false)}>
            <Bell size={18} />
            اعلان‌ها
          </Link>

          <Link href="/wishlist" onClick={() => setOpen(false)}>
            <Heart size={18} />
            علاقه‌مندی‌ها
          </Link>

          <Link href="/cart" onClick={() => setOpen(false)}>
            <ShoppingBag size={18} />
            سبد خرید
          </Link>

          {userIsLoggedIn ? (
            <button type="button">
              <LogOut size={18} />
              خروج از حساب
            </button>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}>
              <LogIn size={18} />
              ورود / ثبت نام
            </Link>
          )}
        </nav>
      </aside>
    </>
  );
}