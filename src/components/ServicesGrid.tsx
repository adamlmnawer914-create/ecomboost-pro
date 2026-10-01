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
        className="service-card-exact group relative flex flex-col justify-between cursor-pointer h-full"
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

        {/* Card Body: Mockup + Description + Luxury Price Bar */}
        <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between bg-white space-y-2 pb-6">
          {/* Visual Mockup matching the image with compact exact aspect ratio */}
          <div className="w-full">
            <ServiceMockup serviceNumber={service.number} />
          </div>

          {/* Description text matching the image with uniform height */}
          <div className="text-center px-1 min-h-[38px] flex items-center justify-center">
            <p className="text-[11px] sm:text-[11.5px] font-bold text-[#071d40] leading-snug line-clamp-2">
              {service.description}
            </p>
          </div>

          {/* Luxury Price & Direct Order Strip */}
          <div className="pt-2 px-2.5 pb-2 rounded-xl bg-gradient-to-b from-[#f8fbff] to-[#edf4fc] border border-[#d6e5f8] flex items-center justify-between shadow-2xs group-hover:border-[#0056d6]/40 transition-colors">
            {/* Price display with feature badge & discount */}
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-1.5">
                {service.badge && (
                  <span className="text-[9px] font-black text-[#92400e] bg-[#fef3c7] px-1.5 py-0.2 rounded border border-[#fde68a]">
                    ★ {service.badge}
                  </span>
                )}
                {discountPercent && (
                  <span className="text-[8.5px] font-black bg-red-100 text-red-600 px-1 py-0.2 rounded font-sans">
                    -{discountPercent}%
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span
                  className="text-sm sm:text-base font-black text-[#0056d6] font-sans tracking-tight"
                  suppressHydrationWarning
                >
                  {service.price.toLocaleString("en-US")}
                </span>
                <span className="text-[10px] font-black text-[#071d40]">د.م</span>
                {service.originalPrice && (
                  <span
                    className="text-[10px] text-neutral-400 line-through font-sans"
                    suppressHydrationWarning
                  >
                    {service.originalPrice.toLocaleString("en-US")}
                  </span>
                )}
              </div>
            </div>

            {/* Luxurious Order CTA Button */}
            <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-[#fef08a] via-[#fdb813] to-[#f59e0b] text-[#071d40] font-black text-[10.5px] shadow-[0_2px_8px_rgba(253,184,19,0.35)] group-hover:scale-105 group-hover:shadow-[0_4px_12px_rgba(253,184,19,0.5)] transition-all">
              <Sparkles className="w-3 h-3 text-[#071d40]" />
              <span>اطلب الآن</span>
            </div>
          </div>
        </div>

        {/* Circular Bottom Icon centered overlapping bottom edge matching original banner */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
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
