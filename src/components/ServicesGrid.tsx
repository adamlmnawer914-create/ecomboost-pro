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
    return (
      <div
        key={service.id}
        onClick={() => onSelectService(service)}
        className="service-card-exact group relative flex flex-col justify-between cursor-pointer"
        style={{
          minHeight: "310px",
          maxHeight: "350px",
        }}
        title={`اضغط لطلب خدمة: ${service.title}`}
      >
        {/* Yellow Circular Number Badge on TOP-LEFT corner matching the image */}
        <div className="service-number-badge">
          {service.number}
        </div>

        {/* Top Royal Blue Header Ribbon with Arabic Title */}
        <div className="service-header-ribbon">
          <h3 className="text-xs sm:text-[13px] lg:text-sm font-black text-white leading-snug truncate">
            {service.title}
          </h3>
        </div>

        {/* Card Body: Mockup + Description */}
        <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between bg-white space-y-2.5">
          {/* Visual Mockup matching the image with compact proportional height */}
          <div className="w-full">
            <ServiceMockup serviceNumber={service.number} />
          </div>

          {/* Description text matching the image */}
          <div className="text-center px-1">
            <p className="text-[11px] sm:text-xs font-bold text-[#071d40] leading-snug line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* Subtle Hover Action Pill (appears cleanly on hover without stretching card) */}
          <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-[10px] font-black text-[#0056d6] bg-blue-50 px-3 py-0.5 rounded-full border border-blue-200 shadow-xs">
              اطلب الآن • {service.price} {service.currency}
            </span>
          </div>
        </div>

        {/* Circular Bottom Icon on the card matching the image */}
        <div className="relative pb-4 pt-1 flex justify-center bg-white border-t border-[#edf3fc]">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Row 1: Exactly 4 Cards (01, 02, 03, 04) spanning full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {rowOne.map((service) => renderCard(service, false))}
        </div>

        {/* Row 2: Exactly 3 Cards (05, 06, 07) spanning the EXACT SAME full width */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {rowTwo.map((service) => renderCard(service, true))}
        </div>
      </div>
    </section>
  );
}
