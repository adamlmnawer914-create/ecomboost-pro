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
      // برمجة المتاجر الإلكترونية الخاصة: Real user-provided image from banner
      return (
        <div className="relative w-full h-32 sm:h-34 bg-white rounded-lg overflow-hidden border border-[#b9d5fb] shadow-sm flex items-center justify-center">
          <Image
            src="/services/custom-store.png"
            alt="برمجة المتاجر الإلكترونية الخاصة"
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>
      );

    case "02":
      // تصميم وبرمجة صفحات الهبوط: Single Product Shoe Landing Page
      return (
        <div className="relative w-full h-32 sm:h-34 bg-gradient-to-b from-[#eaf2ff] to-[#d6e7fc] rounded-lg overflow-hidden flex items-center justify-center p-2 border border-[#b9d5fb]">
          {/* Laptop showing athletic shoe landing page */}
          <div className="relative w-36 h-22 bg-[#07142b] rounded-t-md p-1 shadow-md flex flex-col z-10 border border-[#4a7ec7]">
            <div className="w-full h-2.5 bg-[#0056d6] rounded-xs flex items-center justify-between px-1 mb-0.5">
              <span className="text-[5px] text-white font-bold">New Collection 🔥</span>
              <span className="text-[4px] bg-[#fdb813] text-black px-0.5 rounded-xs font-black">
                -50%
              </span>
            </div>
            <div className="flex-1 bg-white rounded p-0.5 flex items-center gap-1">
              <div className="flex-1 text-right">
                <span className="text-[5px] font-black text-[#0056d6] block">حذاء رياضي</span>
                <span className="text-[4px] text-neutral-500 block leading-tight">
                  صفحة هبوط سريعة
                </span>
                <span className="text-[5px] font-bold text-red-500">299 درهم</span>
              </div>
              <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center text-base">
                👟
              </div>
            </div>
          </div>

          {/* Mobile phone mockup on right */}
          <div className="absolute right-2 bottom-1.5 w-11 h-22 bg-[#0a192f] rounded-lg p-0.5 shadow-md z-20 border-2 border-white flex flex-col">
            <div className="w-3 h-0.5 bg-neutral-600 rounded-full mx-auto mb-0.5" />
            <div className="flex-1 bg-white rounded p-0.5 flex flex-col items-center justify-between text-center">
              <span className="text-[4px] font-black text-[#0056d6]">صفحة هبوط</span>
              <span className="text-sm">👟</span>
              <div className="w-full py-0.5 bg-[#10b981] text-white rounded-xs text-[4px] font-black">
                اطلب الآن
              </div>
            </div>
          </div>
        </div>
      );

    case "03":
      // حلول وبوابات الدفع الدولي: Stripe, Shopify, PayPal, Visa, Mastercard
      return (
        <div className="relative w-full h-32 sm:h-34 bg-gradient-to-b from-[#081f4a] to-[#04122d] rounded-lg overflow-hidden flex flex-col items-center justify-center p-2 border border-[#1d4ed8]">
          <div className="absolute inset-0 flex items-center justify-center opacity-25">
            <Globe className="w-28 h-28 text-blue-400" />
          </div>

          <div className="relative z-10 w-full max-w-[180px] space-y-1.5">
            <div className="flex items-center justify-center gap-1.5">
              <div className="px-2 py-1 rounded bg-[#635bff] text-white font-black text-[11px] shadow border border-white/20">
                stripe
              </div>
              <div className="px-2 py-1 rounded bg-[#95bf47] text-black font-black text-[9px] shadow border border-white/20">
                🛍️ shopify
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5">
              <div className="px-2 py-0.5 rounded bg-white text-[#1a1f71] font-black text-[10px] shadow">
                VISA
              </div>
              <div className="px-2 py-0.5 rounded bg-white flex items-center gap-0.5 shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block -mr-1" />
              </div>
              <div className="px-2 py-0.5 rounded bg-[#003087] text-white font-black text-[10px] shadow border border-blue-400">
                PayPal
              </div>
            </div>
          </div>
        </div>
      );

    case "04":
      // توليد وتصميم منتجات والمتاجر: AI chip, camera, headphones, 4K product photos
      return (
        <div className="relative w-full h-32 sm:h-34 bg-gradient-to-b from-[#eaf2ff] to-[#d6e7fc] rounded-lg overflow-hidden flex items-center justify-around p-2 border border-[#b9d5fb]">
          {/* Headphones */}
          <div className="w-12 h-16 bg-white rounded-lg shadow p-0.5 flex flex-col items-center justify-center border border-blue-100">
            <span className="text-xl">🎧</span>
            <span className="text-[5px] font-bold text-[#0056d6]">4K</span>
          </div>

          {/* AI Glowing badge in center */}
          <div className="w-13 h-13 rounded-xl bg-gradient-to-tr from-[#0056d6] to-[#00b4d8] text-white flex flex-col items-center justify-center shadow-md border-2 border-white z-10 p-1">
            <Sparkles className="w-4 h-4 text-yellow-300 mb-0.5" />
            <span className="text-[10px] font-black tracking-wider leading-none">AI</span>
          </div>

          {/* Camera DSLR */}
          <div className="w-12 h-16 bg-white rounded-lg shadow p-0.5 flex flex-col items-center justify-center border border-blue-100">
            <Camera className="w-5 h-5 text-[#071d40]" />
            <span className="text-[5px] font-bold text-neutral-600">تصوير</span>
          </div>
        </div>
      );

    case "05":
      // صناعة الفيديوهات والإعلانات التجارية: Video editor timeline + camera + play button
      return (
        <div className="relative w-full h-32 sm:h-34 bg-gradient-to-b from-[#0b1b36] to-[#040d1c] rounded-lg overflow-hidden flex flex-col items-center justify-center p-2 border border-[#1e3a6d]">
          <div className="w-full max-w-[240px] bg-[#121c2e] rounded-md p-1.5 border border-[#2a4365] shadow">
            {/* Video Viewport with Headphones & Play Button */}
            <div className="relative w-full h-13 bg-[#1a2942] rounded flex items-center justify-center overflow-hidden mb-1">
              <span className="text-xl opacity-80">🎧</span>
              <div className="absolute w-7 h-7 rounded-full bg-[#0066ff] text-white flex items-center justify-center shadow">
                <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
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
      // الإشهار وإدارة الحملات: TikTok + Meta Facebook + Instagram + Megaphone + Analytics
      return (
        <div className="relative w-full h-32 sm:h-34 bg-gradient-to-b from-[#0c2045] to-[#061226] rounded-lg overflow-hidden flex items-center justify-between p-3 border border-[#1e3a6d]">
          {/* Social logos column */}
          <div className="flex flex-col gap-1 z-10">
            <div className="w-6 h-6 rounded bg-black text-white flex items-center justify-center text-[10px] font-black shadow border border-neutral-700">
              🎵
            </div>
            <div className="w-6 h-6 rounded bg-[#1877f2] text-white flex items-center justify-center text-xs font-black shadow">
              f
            </div>
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-[10px] font-bold shadow">
              📷
            </div>
          </div>

          {/* Megaphone in Center */}
          <div className="w-13 h-13 rounded-full bg-[#0056d6] text-white flex items-center justify-center shadow border-2 border-white z-10">
            <Megaphone className="w-6 h-6 text-yellow-300" />
          </div>

          {/* Analytics Bars on Right */}
          <div className="w-24 bg-[#162744] rounded p-1.5 border border-[#2d4770] flex flex-col justify-end h-22 shadow">
            <div className="text-[5px] text-green-400 font-bold text-center mb-0.5">
              ROAS +450%
            </div>
            <div className="flex items-end justify-between h-14 gap-1 px-1">
              <div className="w-3 h-5 bg-blue-400 rounded-t-xs" />
              <div className="w-3 h-8 bg-blue-500 rounded-t-xs" />
              <div className="w-3 h-11 bg-[#0066ff] rounded-t-xs" />
              <div className="w-3 h-14 bg-[#fdb813] rounded-t-xs" />
            </div>
          </div>
        </div>
      );

    case "07":
      // تطوير تطبيقات المتاجر للهواتف الذكية: Dual smartphones + Apple iOS + Google Android
      return (
        <div className="relative w-full h-32 sm:h-34 bg-gradient-to-b from-[#eaf2ff] to-[#d6e7fc] rounded-lg overflow-hidden flex items-center justify-center p-2 border border-[#b9d5fb]">
          {/* Phone 1 */}
          <div className="relative w-14 h-26 bg-[#0a192f] rounded-lg p-0.5 shadow border-2 border-white flex flex-col z-10 -ml-1.5">
            <div className="w-3 h-0.5 bg-neutral-600 rounded-full mx-auto mb-0.5" />
            <div className="flex-1 bg-white rounded p-0.5 flex flex-col items-center justify-between text-center">
              <span className="text-[5px] font-black text-[#0056d6]">Store App</span>
              <div className="w-full grid grid-cols-2 gap-0.5">
                <div className="h-5 bg-blue-50 rounded" />
                <div className="h-5 bg-amber-50 rounded" />
              </div>
              <div className="w-full h-2 bg-[#0056d6] text-white rounded-xs text-[4px] font-bold">
                طلب
              </div>
            </div>
          </div>

          {/* Phone 2 */}
          <div className="relative w-14 h-26 bg-[#0a192f] rounded-lg p-0.5 shadow border-2 border-white flex flex-col z-20 -mr-1.5">
            <div className="w-3 h-0.5 bg-neutral-600 rounded-full mx-auto mb-0.5" />
            <div className="flex-1 bg-white rounded p-0.5 flex flex-col items-center justify-between text-center">
              <span className="text-[5px] font-black text-[#10b981]">إشعارات</span>
              <div className="w-full p-0.5 bg-yellow-50 rounded text-[4px] font-bold text-amber-800">
                -30%
              </div>
              <div className="w-full h-2 bg-[#fdb813] text-black rounded-xs text-[4px] font-black">
                COD
              </div>
            </div>
          </div>

          {/* Apple & Android Badges on Top Right */}
          <div className="absolute right-2 top-2 flex flex-col gap-1 z-30">
            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[9px] shadow">
              🍎
            </div>
            <div className="w-5 h-5 rounded-full bg-[#3ddc84] text-black flex items-center justify-center text-[9px] shadow">
              🤖
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
