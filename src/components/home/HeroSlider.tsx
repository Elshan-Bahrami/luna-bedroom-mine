"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/home";
import { useEffect, useState } from "react";

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[active];

  return (
    <section className="luna-hero luna-section">
      <div className="luna-container">
        <div className="luna-hero-box">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`luna-hero-slide ${index === active ? "active" : ""}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="luna-hero-image"
              />

              <div className="luna-hero-overlay" />
            </div>
          ))}

          <div className="luna-hero-content">
            <span className="luna-hero-kicker">Luna Bedroom</span>

            <h1>{currentSlide.title}</h1>

            <p>{currentSlide.subtitle}</p>

            <Link href={currentSlide.href} className="luna-btn luna-btn-primary">
              مشاهده محصولات
            </Link>
          </div>

          <div className="luna-hero-controls">
            <button
              type="button"
              className="luna-icon-btn"
              onClick={prevSlide}
              aria-label="اسلاید قبلی"
            >
              <ChevronRight size={20} />
            </button>

            <button
              type="button"
              className="luna-icon-btn"
              onClick={nextSlide}
              aria-label="اسلاید بعدی"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="luna-hero-dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`رفتن به اسلاید ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


