"use client";

import {
  ShoppingCart,
  Image as ImageIcon,
  CreditCard,
  Play,
  TrendingUp,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { ServiceItem } from "@/types";
import { SERVICES_DATA } from "@/data/services";
import ServiceMockup from "./ServiceMockup";

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  // Row 1: 4 cards (01, 02, 03, 04)
  const rowOne = SERVICES_DATA.slice(0, 4);
  // Row 2: 3 cards (05, 06, 07)
  const rowTwo = SERVICES_DATA.slice(4, 7);

  const getServiceCircularIcon = (serviceNumber: string) => {
    switch (serviceNumber) {
      case "01":
        return <ShoppingCart className="w-5 h-5 text-white" />;
      case "02":
        return <ImageIcon className="w-5 h-5 text-white" />;
      case "03":
        return <CreditCard className="w-5 h-5 text-white" />;
      case "04":
        return <ImageIcon className="w-5 h-5 text-white" />;
      case "05":
        return <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />;
      case "06":
        return <TrendingUp className="w-5 h-5 text-white" />;
      case "07":
        return <Smartphone className="w-5 h-5 text-white" />;
      default:
        return <ShoppingCart className="w-5 h-5 text-white" />;
    }
  };

  const renderCard = (service: ServiceItem, isRowTwo: boolean = false) => {
    const discountPercent = service.originalPrice
      ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
      : null;
    const savingsAmount = service.originalPrice ? service.originalPrice - service.price : null;

    return (
      <div
        key={service.id}
        onClick={() => onSelectService(service)}
        className="service-card-exact group relative flex flex-col justify-between cursor-pointer"
        title={`اضغط لطلب خدمة: ${service.title}`}
      >
        {/* Yellow Circular Number Badge on TOP-LEFT corner matching the image */}
        <div className="service-number-badge">
          {service.number}
        </div>

        {/* Top Royal Blue Header Ribbon with Centered Arabic Title */}
        <div className="service-header-ribbon">
          <h3 className="text-xs sm:text-[13px] lg:text-[13.5px] font-black text-white leading-snug truncate drop-shadow-xs">
            {service.title}
          </h3>
        </div>

        {/* Card Body: Mockup + Description + VIP Luxury Price Vault */}
        <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between space-y-2.5 pb-11">
          {/* Visual Mockup inside luxury framed container */}
          <div className="w-full rounded-xl overflow-hidden border border-[#d4e4f8] shadow-xs group-hover:border-[#0056d6]/40 transition-colors bg-white">
            <ServiceMockup serviceNumber={service.number} />
          </div>

          {/* Description text with refined typography */}
          <div className="text-center px-1 min-h-[36px] flex items-center justify-center">
            <p className="text-[11px] sm:text-[12px] font-bold text-[#071d40] leading-snug line-clamp-2">
              {service.description}
            </p>
          </div>

          {/* ULTRA-LUXURY PRICE & ORDER VAULT ("مكان ظهور المبلغ الفخم جداً") */}
          <div className="relative overflow-hidden rounded-2xl p-3 bg-gradient-to-br from-[#071d40] via-[#092654] to-[#051735] border border-[#fdb813]/40 shadow-[0_6px_20px_rgba(7,29,64,0.22),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:border-[#fdb813] group-hover:shadow-[0_8px_26px_rgba(245,158,11,0.25),0_6px_20px_rgba(7,29,64,0.35)] transition-all duration-300">
            {/* Glowing subtle background ambiance */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#fdb813]/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#0066ff]/20 rounded-full blur-xl pointer-events-none" />

            {/* Top row: VIP badge & Savings Pill */}
            <div className="relative z-10 flex items-center justify-between gap-1 mb-2">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#fef08a]/20 via-[#fdb813]/25 to-[#f59e0b]/20 border border-[#fdb813]/50 text-[#fde047] text-[9.5px] font-black shadow-xs">
                <Sparkles className="w-2.5 h-2.5 text-[#fde047]" />
                <span>{service.badge || "باقة VIP"}</span>
              </div>

              {discountPercent && (
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[9.5px] font-black font-sans shadow-xs">
                  <span>وفر {savingsAmount?.toLocaleString("en-US")} د.م</span>
                  <span className="text-emerald-400">(-{discountPercent}%)</span>
                </div>
              )}
            </div>

            {/* Middle row: The Big Gleaming Price Presentation */}
            <div className="relative z-10 flex items-end justify-between border-y border-white/10 py-2 my-1">
              <div className="flex flex-col text-right">
                <span className="text-[10px] text-blue-200/75 font-medium leading-none mb-1">
                  سعر الخدمة:
                </span>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-2xl sm:text-[25px] font-black text-white font-sans tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    suppressHydrationWarning
                  >
                    {service.price.toLocaleString("en-US")}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#fdb813] drop-shadow-xs">
                    د.م
                  </span>
                </div>
              </div>

              {service.originalPrice && (
                <div className="flex flex-col items-end text-left">
                  <span className="text-[9px] text-neutral-400 font-normal leading-none mb-0.5">
                    بدلاً من
                  </span>
                  <span
                    className="text-xs sm:text-[13px] text-blue-200/60 line-through font-sans font-bold"
                    suppressHydrationWarning
                  >
                    {service.originalPrice.toLocaleString("en-US")} د.م
                  </span>
                  <span className="text-[8.5px] text-[#fde047]/90 font-bold mt-0.5">
                    ✓ دفعة واحدة فقط
                  </span>
                </div>
              )}
            </div>

            {/* High-Impact 3D Gold CTA Order Button */}
            <div className="relative z-10 mt-2">
              <div className="w-full py-2 sm:py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#ffe066] via-[#fdb813] to-[#f59e0b] text-[#071d40] font-black text-xs sm:text-[12.5px] flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(245,158,11,0.45)] group-hover:shadow-[0_6px_22px_rgba(245,158,11,0.7)] group-hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/50">
                <Sparkles className="w-3.5 h-3.5 text-[#071d40] fill-[#071d40]" />
                <span>طلب الخدمة الآن (COD)</span>
                <span className="text-xs opacity-75 font-sans">←</span>
              </div>
            </div>

            {/* Micro-Trust Footer inside the Price Vault */}
            <div className="relative z-10 mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[9.5px] text-blue-200/80 font-medium">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                تسليم: {service.deliveryTime}
              </span>
              <span>الدفع عند الاستلام 100%</span>
            </div>
          </div>
        </div>

        {/* Circular Bottom Icon centered overlapping bottom edge matching original banner */}
        <div className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 z-20">
          <div className="card-bottom-icon-btn">
            {getServiceCircularIcon(service.number)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="services"
      className="relative z-10 py-6 sm:py-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Row 1: Exactly 4 Cards (01, 02, 03, 04) spanning full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-5 gap-y-10">
          {rowOne.map((service) => renderCard(service, false))}
        </div>

        {/* Row 2: Exactly 3 Cards (05, 06, 07) spanning the EXACT SAME full width */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 sm:gap-x-5 gap-y-10">
          {rowTwo.map((service) => renderCard(service, true))}
        </div>
      </div>
    </section>
  );
}
