"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#intro", label: "Giới thiệu" },
  { href: "#content", label: "Nội dung" },
  { href: "#schedule", label: "Chi tiết" },
  { href: "#mentor", label: "Mentor" },
  { href: "#register", label: "Đăng ký" },
  { href: "#faq", label: "FAQ" },
  { href: "#ftes", label: "FTES" },
];

export function LandingNav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setActive(href.slice(1));
  };

  const activeClass =
    "border-b-2 border-st-primary py-1 font-bold text-st-primary";
  const defaultClass =
    "py-1 text-st-on-surface-variant transition-colors hover:text-st-secondary";

  return (
    <header className="stitch-glass-header fixed top-0 z-50 w-full border-b border-st-outline-variant/10 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-12">
          <Link
            href="#"
            className="flex items-center"
            aria-label="FTES Master"
          >
            <Image
              src="/images/Ftes_logo.jpg"
              alt="FTES Master"
              width={208}
              height={44}
              className="h-11 w-auto"
              priority
            />
          </Link>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Điều hướng"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={
                  active === item.href.slice(1) ? activeClass : defaultClass
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">

          <a
            href="#register"
            className="stitch-action-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-st-primary/20 transition-transform duration-200 hover:scale-105"
          >
            Đăng ký miễn phí
          </a>
        </div>
      </div>
    </header>
  );
}
