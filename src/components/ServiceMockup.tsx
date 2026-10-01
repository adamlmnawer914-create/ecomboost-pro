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
      // برمجة المتاجر الإلكترونية الخاصة: Real user-provided image from banner (exact 346x132 ratio)
      return (
        <div className="relative w-full aspect-[346/132] bg-white rounded-lg overflow-hidden border border-[#b9d5fb] shadow-xs flex items-center justify-center">
          <Image
            src="/services/custom-store.png"
            alt="برمجة المتاجر الإلكترونية الخاصة"
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>
      );

    case "02":
      // تصميم وبرمجة صفحات الهبوط: Single Product Shoe Landing Page
      return (
        <div className="relative w-full aspect-[346/132] bg-gradient-to-b from-[#eaf2ff] to-[#d6e7fc] rounded-lg overflow-hidden flex items-center justify-center p-1.5 border border-[#b9d5fb]">
          {/* Laptop showing athletic shoe landing page */}
          <div className="relative w-32 h-19 bg-[#07142b] rounded-t-md p-1 shadow-md flex flex-col z-10 border border-[#4a7ec7]">
            <div className="w-full h-2 bg-[#0056d6] rounded-xs flex items-center justify-between px-1 mb-0.5">
              <span className="text-[5px] text-white font-bold">New Collection 🔥</span>
              <span className="text-[4px] bg-[#fdb813] text-black px-0.5 rounded-xs font-black">
                -50%
              </span>
            </div>
            <div className="flex-1 bg-white rounded p-0.5 flex items-center gap-1">
              <div className="flex-1 text-right">
                <span className="text-[5px] font-black text-[#0056d6] block">حذاء رياضي</span>
                <span className="text-[4px] text-neutral-500 block leading-tight">
                  صفحة هبوط
                </span>
                <span className="text-[5px] font-bold text-red-500">299 د.م</span>
              </div>
              <div className="w-7 h-7 bg-amber-100 rounded flex items-center justify-center text-xs">
                👟
              </div>
            </div>
          </div>

          {/* Mobile phone mockup on right */}
          <div className="absolute right-2 bottom-1 w-9 h-18 bg-[#0a192f] rounded-lg p-0.5 shadow-md z-20 border-2 border-white flex flex-col">
            <div className="w-2.5 h-0.5 bg-neutral-600 rounded-full mx-auto mb-0.5" />
            <div className="flex-1 bg-white rounded p-0.5 flex flex-col items-center justify-between text-center">
              <span className="text-[4px] font-black text-[#0056d6]">صفحة</span>
              <span className="text-xs">👟</span>
              <div className="w-full py-0.2 bg-[#10b981] text-white rounded-xs text-[3.5px] font-black">
                اطلب
              </div>
            </div>
          </div>
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
        <div className="relative w-full aspect-[346/132] bg-gradient-to-b from-[#eaf2ff] to-[#d6e7fc] rounded-lg overflow-hidden flex items-center justify-around p-1.5 border border-[#b9d5fb]">
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
      // صناعة الفيديوهات والإعلانات التجارية: Video editor timeline + camera + play button
      return (
        <div className="relative w-full aspect-[346/132] bg-gradient-to-b from-[#0b1b36] to-[#040d1c] rounded-lg overflow-hidden flex flex-col items-center justify-center p-1.5 border border-[#1e3a6d]">
          <div className="w-full max-w-[220px] bg-[#121c2e] rounded-md p-1 border border-[#2a4365] shadow">
            {/* Video Viewport with Headphones & Play Button */}
            <div className="relative w-full h-11 bg-[#1a2942] rounded flex items-center justify-center overflow-hidden mb-1">
              <span className="text-lg opacity-80">🎧</span>
              <div className="absolute w-6 h-6 rounded-full bg-[#0066ff] text-white flex items-center justify-center shadow">
                <Play className="w-3 h-3 fill-white text-white translate-x-0.5" />
              </div>
            </div>

            {/* Video Editing Tracks */}
            <div className="space-y-0.5">
              <div className="w-full h-1.5 bg-[#0056d6] rounded-xs" />
              <div className="w-2/3 h-1.5 bg-[#fdb813] rounded-xs" />
            </div>
          </div>
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
      // تطوير تطبيقات المتاجر للهواتف الذكية: Dual smartphones + Apple iOS + Google Android
      return (
        <div className="relative w-full aspect-[346/132] bg-gradient-to-b from-[#eaf2ff] to-[#d6e7fc] rounded-lg overflow-hidden flex items-center justify-center p-1.5 border border-[#b9d5fb]">
          {/* Phone 1 */}
          <div className="relative w-12 h-20 bg-[#0a192f] rounded-lg p-0.5 shadow border-2 border-white flex flex-col z-10 -ml-1">
            <div className="w-2.5 h-0.5 bg-neutral-600 rounded-full mx-auto mb-0.5" />
            <div className="flex-1 bg-white rounded p-0.5 flex flex-col items-center justify-between text-center">
              <span className="text-[4px] font-black text-[#0056d6]">Store</span>
              <div className="w-full grid grid-cols-2 gap-0.5">
                <div className="h-4 bg-blue-50 rounded" />
                <div className="h-4 bg-amber-50 rounded" />
              </div>
              <div className="w-full h-1.5 bg-[#0056d6] text-white rounded-xs text-[3.5px] font-bold">
                طلب
              </div>
            </div>
          </div>

          {/* Phone 2 */}
          <div className="relative w-12 h-20 bg-[#0a192f] rounded-lg p-0.5 shadow border-2 border-white flex flex-col z-20 -mr-1">
            <div className="w-2.5 h-0.5 bg-neutral-600 rounded-full mx-auto mb-0.5" />
            <div className="flex-1 bg-white rounded p-0.5 flex flex-col items-center justify-between text-center">
              <span className="text-[4px] font-black text-[#10b981]">إشعارات</span>
              <div className="w-full p-0.5 bg-yellow-50 rounded text-[3.5px] font-bold text-amber-800">
                -30%
              </div>
              <div className="w-full h-1.5 bg-[#fdb813] text-black rounded-xs text-[3.5px] font-black">
                COD
              </div>
            </div>
          </div>

          {/* Apple & Android Badges on Top Right */}
          <div className="absolute right-2 top-1.5 flex flex-col gap-0.5 z-30">
            <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[8px] shadow">
              🍎
            </div>
            <div className="w-4 h-4 rounded-full bg-[#3ddc84] text-black flex items-center justify-center text-[8px] shadow">
              🤖
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
