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
          <div className="flex flex-wrap items-center gap-3.5">
            {/* Ultra-Luxurious VIP WhatsApp Direct Button */}
            <a
              href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "السلام عليكم فريق Ecom Boost Pro، أرغب في استشارة سريعة حول خدماتكم لمتجري."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-[#fafffb] border-2 border-[#25D366]/60 hover:border-[#25D366] shadow-[0_4px_18px_rgba(37,211,102,0.22)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.4)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[64px]"
              title="تواصل معنا مباشرة عبر واتساب"
            >
              {/* Luxurious 3D WhatsApp Medallion Icon with Ripple Ping */}
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#0f766e] via-[#25D366] to-[#4ade80] shadow-[0_4px_14px_rgba(37,211,102,0.55)] border-2 border-white flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                {/* Subtle outer radar ring */}
                <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping" />
                {/* Official WhatsApp Vector Emblem */}
                <svg
                  className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white fill-current relative z-10 drop-shadow-sm"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.93C20.28 16.48 16.59 20.15 12.05 20.15ZM16.57 14.36C16.32 14.23 15.1 13.63 14.88 13.55C14.65 13.47 14.49 13.43 14.32 13.68C14.16 13.93 13.69 14.49 13.54 14.65C13.4 14.82 13.25 14.84 13 14.71C12.75 14.59 11.95 14.33 11 13.49C10.26 12.83 9.76 12.02 9.61 11.77C9.47 11.52 9.6 11.39 9.72 11.26C9.83 11.15 9.97 10.97 10.1 10.82C10.22 10.67 10.26 10.57 10.34 10.4C10.42 10.24 10.38 10.1 10.32 9.97C10.26 9.85 9.77 8.64 9.56 8.14C9.36 7.65 9.16 7.72 9.01 7.71C8.87 7.7 8.7 7.7 8.54 7.7C8.38 7.7 8.11 7.76 7.89 8C7.66 8.25 7.03 8.84 7.03 10.04C7.03 11.24 7.9 12.39 8.03 12.56C8.15 12.72 9.75 15.2 12.21 16.26C12.79 16.51 13.25 16.66 13.6 16.77C14.19 16.96 14.73 16.93 15.16 16.87C15.64 16.8 16.64 16.27 16.85 15.68C17.06 15.09 17.06 14.59 17 14.49C16.93 14.4 16.81 14.36 16.57 14.36Z" />
                </svg>
              </div>

              {/* Text Information Stack */}
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-[11px] font-black text-[#071d40] tracking-tight">واتساب مباشر • متاح الآن</span>
                </div>
                <span
                  dir="ltr"
                  className="font-sans font-black text-xs sm:text-[13.5px] text-[#071d40] group-hover:text-[#10b981] transition-colors tracking-wide"
                >
                  {AGENCY_CONFIG.whatsappDisplay}
                </span>
              </div>
            </a>

            {/* Ultra-Luxurious Golden COD Direct Order Button (Identical size, height & structure) */}
            <button
              onClick={onOpenOrderModal}
              className="group relative inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#fdb813] via-[#f59e0b] to-[#fdb813] hover:from-[#f59e0b] hover:to-[#fdb813] text-[#071d40] border-2 border-[#f59e0b]/80 hover:border-[#b45309] shadow-[0_4px_18px_rgba(253,184,19,0.35)] hover:shadow-[0_8px_28px_rgba(253,184,19,0.55)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[64px]"
              title="اضغط لطلب خدمة فورية بنظام الدفع عند الاستلام"
            >
              {/* Luxurious 3D Golden/Navy Medallion Icon with Ripple Ping */}
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#071d40] shadow-[0_4px_12px_rgba(7,29,64,0.4)] border-2 border-[#fef08a] flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                {/* Subtle outer radar ring */}
                <span className="absolute -inset-1 rounded-full bg-[#fdb813] opacity-35 animate-ping" />
                {/* Layers Icon */}
                <Layers className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#fdb813] relative z-10 drop-shadow-sm" />
              </div>

              {/* Text Information Stack matching WhatsApp button */}
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#071d40] animate-pulse" />
                  <span className="text-[11px] font-black text-[#071d40]/90 tracking-tight">دفع عند الاستلام • حجز فوري</span>
                </div>
                <span className="font-sans font-black text-xs sm:text-[13.5px] text-[#071d40] tracking-wide">
                  طلب خدمة الآن (COD)
                </span>
              </div>
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
