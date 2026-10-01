"use client";

import {
  ShieldCheck,
  Zap,
  Headphones,
  Lightbulb,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { AGENCY_CONFIG, TRUST_BADGES } from "@/data/services";

export default function TrustBanner() {
  return (
    <div className="bottom-trust-bar text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* 4 Trust Badges matching image footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1 w-full">
            {/* Badge 1: جودة عالية ومعايير عالمية */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center bg-[#072454] shadow flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black leading-tight text-white">
                  جودة عالية
                </h4>
                <p className="text-[11px] text-blue-200">ومعايير عالمية</p>
              </div>
            </div>

            {/* Badge 2: التسليم في الوقت المحدد */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center bg-[#072454] shadow flex-shrink-0">
                <Zap className="w-5 h-5 text-[#fdb813]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black leading-tight text-white">
                  التسليم في الوقت
                </h4>
                <p className="text-[11px] text-blue-200">المحدد</p>
              </div>
            </div>

            {/* Badge 3: دعم فني مستمر بعد التسليم */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center bg-[#072454] shadow flex-shrink-0">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black leading-tight text-white">
                  دعم فني مستمر
                </h4>
                <p className="text-[11px] text-blue-200">بعد التسليم</p>
              </div>
            </div>

            {/* Badge 4: خبرة واحترافية في كل تفصيلة */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center bg-[#072454] shadow flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-[#fdb813]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black leading-tight text-white">
                  خبرة واحترافية
                </h4>
                <p className="text-[11px] text-blue-200">في كل تفصيلة</p>
              </div>
            </div>
          </div>

          {/* Yellow Corner Banner Sticker: معاً نحو نجاح أكبر */}
          <div className="flex-shrink-0 pt-2 lg:pt-0">
            <div className="corner-yellow-ribbon px-6 py-2.5 rounded-2xl flex items-center gap-2 transform -rotate-1 shadow-lg border-2 border-white">
              <div className="text-right">
                <span className="text-[11px] font-bold text-[#071d40] block leading-none">
                  شعارنا الدائم
                </span>
                <span className="text-base font-black text-[#071d40] leading-tight block">
                  معاً نحو نجاح أكبر
                </span>
              </div>
              {/* Curved Arrow SVG */}
              <svg
                className="w-7 h-7 text-[#071d40] transform rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
