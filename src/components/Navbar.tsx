"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  PhoneCall,
  Menu,
  X,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { AGENCY_CONFIG } from "@/data/services";

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-colors duration-200"
      style={{
        backgroundColor: "#09090b",
        borderBottom: "1px solid #1e1e24",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Specialty Badge */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Geometric Brand Emblem matching banner (Blue & Gold Diamond/Arrow) */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center relative overflow-hidden transition-transform duration-200 group-hover:scale-105"
                style={{
                  backgroundColor: "#0c1529",
                  border: "1px solid #2563eb",
                }}
              >
                <div className="flex items-center justify-center font-black text-sm">
                  <span style={{ color: "#3b82f6" }}>E</span>
                  <span style={{ color: "#eab308" }}>B</span>
                </div>
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 rotate-45 translate-x-1.5 translate-y-1.5"
                  style={{ backgroundColor: "#eab308" }}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white">
                    ECOM<span style={{ color: "#3b82f6" }}>BOOST</span>
                  </span>
                  <span
                    className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded tracking-wider"
                    style={{
                      backgroundColor: "#eab308",
                      color: "#000000",
                    }}
                  >
                    PRO
                  </span>
                </div>
                <span
                  className="text-[9px] font-bold tracking-[0.18em] uppercase hidden sm:block"
                  style={{ color: "#71717a" }}
                >
                  MORE SALES • BETTER TRAFFIC • BIGGER DREAMS
                </span>
              </div>
            </Link>

            {/* Specialty tag */}
            <div className="hidden xl:flex items-center gap-1.5 pr-4 border-r border-[#1e1e24]">
              <span className="badge-blue text-[11px] py-1">
                <Sparkles className="w-3 h-3 text-[#3b82f6]" />
                وكالة التجارة الإلكترونية المتكاملة
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="#services"
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-white"
              style={{ color: "#a1a1aa" }}
            >
              الخدمات السبع
            </a>
            <a
              href="#features"
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-white"
              style={{ color: "#a1a1aa" }}
            >
              معايير الجودة
            </a>
            <a
              href="#funnel"
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-white"
              style={{ color: "#a1a1aa" }}
            >
              من الصفر للمبيعات
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-white"
              style={{ color: "#a1a1aa" }}
            >
              تواصل معنا
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp direct consult button */}
            <a
              href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "السلام عليكم فريق Ecom Boost Pro، أرغب في استشارة حول خدماتكم لمشروعي التجاري."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors"
              style={{
                backgroundColor: "#121215",
                border: "1px solid #272730",
                color: "#10b981",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>استشارة واتساب</span>
            </a>

            {/* Direct Order Button */}
            <button
              onClick={onOpenOrderModal}
              className="btn-gold text-xs sm:text-sm py-2 px-4 sm:px-5"
            >
              <Layers className="w-4 h-4" />
              <span>اطلب خدمتك الآن</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{
                backgroundColor: "#121215",
                border: "1px solid #272730",
                color: "#f4f4f6",
              }}
              aria-label="تبديل القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Solid Matte, No Blur) */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-4 py-4 space-y-3"
          style={{
            backgroundColor: "#0f0f13",
            borderBottom: "1px solid #272730",
          }}
        >
          <div className="flex flex-col gap-1 pb-3 border-b border-[#1e1e24]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#18181c]"
            >
              الخدمات السبع المتكاملة
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:bg-[#18181c]"
            >
              معايير الجودة والضمان
            </a>
            <a
              href="#funnel"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:bg-[#18181c]"
            >
              خطة من الصفر إلى تحقيق المبيعات
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:bg-[#18181c]"
            >
              معلومات التواصل الرسمي
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="btn-gold w-full text-sm py-2.5"
            >
              <Layers className="w-4 h-4" />
              <span>طلب مباشر للخدمات</span>
            </button>

            <a
              href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-xs py-2 text-center text-[#10b981]"
            >
              محادثة مباشرة عبر الواتساب
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
