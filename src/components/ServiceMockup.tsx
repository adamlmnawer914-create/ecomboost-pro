"use client";

import Image from "next/image";
import {
  Laptop,
  Smartphone,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  Video,
  Play,
  TrendingUp,
  Megaphone,
  Sparkles,
  Camera,
  Layers,
  Globe,
  Share2,
  Tv,
} from "lucide-react";

interface ServiceMockupProps {
  serviceNumber: string;
}

export default function ServiceMockup({ serviceNumber }: ServiceMockupProps) {
  switch (serviceNumber) {
    case "01":
      // برمجة المتاجر الإلكترونية الخاصة: Real user-provided image (1024x682, full view)
      return (
        <div className="relative w-full aspect-[1024/682] bg-[#0b1320] rounded-lg overflow-hidden border border-[#b9d5fb] shadow-xs flex items-center justify-center">
          <Image
            src="/services/custom-store.jpg"
            alt="برمجة المتاجر الإلكترونية الخاصة"
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>
      );

    case "02":
      // تصميم وبرمجة صفحات الهبوط: Real user-provided image (1024x682, full view)
      return (
        <div className="relative w-full aspect-[1024/682] bg-[#0b1320] rounded-lg overflow-hidden border border-[#b9d5fb] shadow-xs flex items-center justify-center">
          <Image
            src="/services/landing-page.jpg"
            alt="تصميم وبرمجة صفحات الهبوط"
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>
      );

    case "03":
      // حلول وبوابات الدفع الدولي: Real user-provided image (1024x576, 16:9 full view)
      return (
        <div className="relative w-full aspect-[1024/576] bg-[#071328] rounded-lg overflow-hidden border border-[#1d4ed8] shadow-xs flex items-center justify-center">
          <Image
            src="/services/payment-gateways.jpg"
            alt="حلول وبوابات الدفع الدولي"
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>
      );

    case "04":
      // توليد وتصميم منتجات والمتاجر: AI chip, camera, headphones, 4K product photos
      return (
        <div className="relative w-full aspect-[1024/682] bg-gradient-to-b from-[#eaf2ff] to-[#d6e7fc] rounded-lg overflow-hidden flex items-center justify-around p-1.5 border border-[#b9d5fb]">
          {/* Headphones */}
          <div className="w-10 h-14 bg-white rounded-lg shadow p-0.5 flex flex-col items-center justify-center border border-blue-100">
            <span className="text-base">🎧</span>
            <span className="text-[5px] font-bold text-[#0056d6]">4K</span>
          </div>

          {/* AI Glowing badge in center */}
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0056d6] to-[#00b4d8] text-white flex flex-col items-center justify-center shadow-md border-2 border-white z-10 p-0.5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 mb-0.5" />
            <span className="text-[9px] font-black tracking-wider leading-none">AI</span>
          </div>

          {/* Camera DSLR */}
          <div className="w-10 h-14 bg-white rounded-lg shadow p-0.5 flex flex-col items-center justify-center border border-blue-100">
            <Camera className="w-4 h-4 text-[#071d40]" />
            <span className="text-[5px] font-bold text-neutral-600">تصوير</span>
          </div>
        </div>
      );

    case "05":
      // صناعة الفيديوهات والإعلانات التجارية: Real user-provided image (1024x1024, 1:1 full view)
      return (
        <div className="relative w-full aspect-square bg-[#0b1528] rounded-lg overflow-hidden border border-[#1e3a6d] shadow-xs flex items-center justify-center">
          <Image
            src="/services/video-ads.jpg"
            alt="صناعة الفيديوهات والإعلانات التجارية"
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      );

    case "06":
      // الإشهار وإدارة الحملات: Real user-provided image (1024x1024, 1:1 full view)
      return (
        <div className="relative w-full aspect-square bg-[#0b162c] rounded-lg overflow-hidden border border-[#1e3a6d] shadow-xs flex items-center justify-center">
          <Image
            src="/services/marketing-campaigns.jpg"
            alt="الإشهار وإدارة الحملات"
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      );

    case "07":
      // تطوير تطبيقات المتاجر للهواتف الذكية: Real user-provided image (1024x1024, 1:1 full view)
      return (
        <div className="relative w-full aspect-square bg-[#0c1830] rounded-lg overflow-hidden border border-[#1e3a6d] shadow-xs flex items-center justify-center">
          <Image
            src="/services/mobile-apps.jpg"
            alt="تطوير تطبيقات المتاجر للهواتف الذكية"
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      );

    default:
      return null;
  }
}
