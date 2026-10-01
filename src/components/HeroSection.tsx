"use client";

import Link from "next/link";
import {
  Rocket,
  ShoppingBag,
  Layers,
  ArrowDown,
  Sparkles,
  PhoneCall,
  Laptop,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { AGENCY_CONFIG } from "@/data/services";

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export default function HeroSection({ onOpenOrderModal }: HeroSectionProps) {
  return (
    <section
      className="relative pt-6 pb-12 overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f2f7ff] to-[#e8f2fc]"
      dir="rtl"
    >
      {/* Curved Royal Blue Wave Accent at Top Background */}
      <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#0056d6] via-[#0066ff] to-[#fdb813]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header / Branding Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b border-[#d8e5f8] mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Geometric diamond logo */}
            <div className="w-11 h-11 rounded-xl bg-[#0056d6] flex items-center justify-center relative overflow-hidden shadow-md border-2 border-white">
              <span className="font-black text-white text-base tracking-tighter">EB</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#fdb813] rotate-45" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-[#071d40]">
                  ECOM<span className="text-[#0056d6]">BOOST</span>
                </span>
                <span className="bg-[#fdb813] text-[#071d40] text-xs font-black px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                  PRO
                </span>
              </div>
              <p className="text-[10px] font-bold text-[#526484] uppercase tracking-[0.2em]">
                MORE SALES • BETTER TRAFFIC • BIGGER DREAMS
              </p>
            </div>
          </div>

          {/* Quick Action Buttons on Header */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#10b981] border border-[#b9d5fb] shadow-sm hover:shadow transition-all"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>واتساب مباشر:</span>
              <span dir="ltr" className="inline-block font-sans font-bold">{AGENCY_CONFIG.whatsappDisplay}</span>
            </a>

            <button
              onClick={onOpenOrderModal}
              className="btn-yellow-gold text-xs sm:text-sm py-2.5 px-5"
            >
              <Layers className="w-4 h-4" />
              <span>طلب خدمة الآن (COD)</span>
            </button>
          </div>
        </div>

        {/* Hero Main Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 pb-6">
          {/* Right Column: Main Text Headlines matching image exactly */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-4">
            {/* Main Title: خدماتنا السبع المتكاملة with yellow brush highlight */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#071d40] tracking-tight leading-[1.25]">
              خدماتنا السبع{" "}
              <span className="relative inline-block px-2 text-[#071d40]">
                <span className="relative z-10">المتكاملة</span>
                <span
                  className="absolute inset-x-0 bottom-2 h-4 sm:h-5 bg-[#fdb813] rounded z-0 opacity-90"
                  style={{ transform: "rotate(-1.5deg)" }}
                />
              </span>
            </h1>

            {/* Subtitle in Royal Blue matching the banner */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0056d6] leading-snug">
              {AGENCY_CONFIG.subtitle}
            </h2>

            {/* Specialties Bar: تصميم | تطوير | تسويق | محتوى | هوية بصرية */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 py-2 px-4 rounded-xl bg-white border-2 border-[#b9d5fb] shadow-xs text-xs sm:text-sm font-bold text-[#0056d6]">
              {AGENCY_CONFIG.specialties.map((item, index) => (
                <span key={item} className="flex items-center gap-2">
                  <span>{item}</span>
                  {index < AGENCY_CONFIG.specialties.length - 1 && (
                    <span className="text-[#fdb813] font-black">|</span>
                  )}
                </span>
              ))}
            </div>

            {/* Explanatory description */}
            <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed pt-2">
              باقة الخدمات الرقمية الحصرية المتكاملة لتأسيس وإطلاق المتاجر الإلكترونية في المغرب والأسواق العالمية، مصممة خصيصاً بنظام الدفع عند الاستلام مع متابعة شخصية حتى تحقيق مبيعاتك الأولى.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#services"
                className="btn-blue-royal text-sm sm:text-base py-3 px-7"
              >
                <span>تصفح الخدمات السبع والأسعار</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenOrderModal}
                className="btn-yellow-gold text-sm sm:text-base py-3 px-6"
              >
                <span>طلب مباشر بدون انتظار</span>
              </button>
            </div>
          </div>

          {/* Left Column: 3D Illustration matching the banner's visual setup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Showcase Card with Rocket, Laptop & Shopify Bag */}
            <div className="relative w-full max-w-md bg-white rounded-2xl p-5 border-2 border-[#b9d5fb] shadow-xl overflow-hidden">
              {/* Rocket Taking Off in the top left */}
              <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 bg-[#0056d6] text-white px-3 py-1 rounded-full text-xs font-black shadow-md border border-white">
                <Rocket className="w-4 h-4 text-[#fdb813] animate-bounce" />
                <span>انطلاقة صاروخية</span>
              </div>

              {/* Shopify Green Bag Mockup */}
              <div className="absolute top-12 left-4 z-20 w-12 h-14 bg-[#95bf47] rounded-lg shadow-lg flex flex-col items-center justify-center text-white border-2 border-white">
                <div className="w-4 h-2 border-2 border-t-0 border-white rounded-b-sm -mt-2 mb-0.5" />
                <span className="font-black text-xs">S</span>
                <span className="text-[6px] font-bold">Shopify</span>
              </div>

              {/* Laptop Screen Showcase */}
              <div className="relative mx-auto mt-4 w-64 h-40 bg-[#0a192f] rounded-t-xl p-2 shadow-2xl border border-[#2a4365] flex flex-col z-10">
                <div className="flex items-center gap-1 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[7px] text-blue-200 ml-auto font-mono">ecomboost.pro/store</span>
                </div>
                {/* Store layout on laptop */}
                <div className="flex-1 bg-white rounded-md p-1.5 flex flex-col justify-between">
                  <div className="h-5 bg-gradient-to-r from-[#0056d6] to-[#0066ff] rounded flex items-center justify-between px-2 text-[6px] text-white font-black">
                    <span>Premium Sound X1</span>
                    <span className="bg-[#fdb813] text-black px-1 rounded-xs">COD</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 py-1">
                    <div className="h-10 bg-blue-50 rounded flex items-center justify-center text-xs">🎧</div>
                    <div className="h-10 bg-amber-50 rounded flex items-center justify-center text-xs">⌚</div>
                    <div className="h-10 bg-emerald-50 rounded flex items-center justify-center text-xs">👟</div>
                    <div className="h-10 bg-purple-50 rounded flex items-center justify-center text-xs">🕶️</div>
                  </div>
                  <div className="h-3 bg-[#fdb813] rounded text-[6px] font-black text-[#071d40] flex items-center justify-center">
                    اطلب الآن والدفع عند الاستلام
                  </div>
                </div>
              </div>

              {/* Potted Plant on far left matching banner */}
              <div className="absolute left-2 bottom-2 z-20 flex flex-col items-center">
                <span className="text-2xl -mb-1">🌿</span>
                <div className="w-5 h-4 bg-stone-200 rounded-b-md border border-stone-300 shadow-xs" />
              </div>

              {/* Smartphone on right side of laptop */}
              <div className="absolute right-4 bottom-4 w-16 h-32 bg-[#071d40] rounded-xl p-1 shadow-2xl border-2 border-white z-20 flex flex-col">
                <div className="w-4 h-1 bg-neutral-600 rounded-full mx-auto mb-1" />
                <div className="flex-1 bg-white rounded-lg p-1 flex flex-col items-center justify-between text-center">
                  <div className="w-full h-2.5 bg-[#0056d6] rounded-xs text-[5px] text-white font-bold">
                    Mobile App
                  </div>
                  <span className="text-sm">🎧</span>
                  <div className="w-full h-2.5 bg-[#10b981] rounded-xs text-[5px] text-white font-black">
                    تم الطلب ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
