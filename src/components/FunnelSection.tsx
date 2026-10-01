"use client";

import {
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { ServiceItem } from "@/types";
import { SERVICES_DATA } from "@/data/services";

interface FunnelSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function FunnelSection({ onSelectService }: FunnelSectionProps) {
  const steps = [
    {
      step: "المرحلة 01",
      title: "التأسيس والسرعة الخارقة",
      services: [SERVICES_DATA[0], SERVICES_DATA[1]], // Store & Landing Page
      description:
        "بناء متجر إلكتروني كود خاص فائق السرعة وصفحات هبوط تركز على المنتج البطل وتضاعف التحويلات بنظام COD.",
    },
    {
      step: "المرحلة 02",
      title: "التفعيل المالي والمصداقية",
      services: [SERVICES_DATA[2]], // Payment Gateways
      description:
        "تفعيل بوابات الدفع الدولية الرسمية Stripe و Shopify Payments لاستقبال الدفعات من جميع دول العالم بأمان.",
    },
    {
      step: "المرحلة 03",
      title: "الهوية الإبداعية وصناعة المحتوى",
      services: [SERVICES_DATA[3], SERVICES_DATA[4]], // AI Design & Video Ads
      description:
        "توليد صور المنتجات بالذكاء الاصطناعي 4K وإنتاج فيديوهات إعلانية سينمائية مع تعليق صوتي محترف يرفع المبيعات.",
    },
    {
      step: "المرحلة 04",
      title: "إطلاق الحملات والتوسع المستمر",
      services: [SERVICES_DATA[5], SERVICES_DATA[6]], // Media Buying & Mobile Apps
      description:
        "إطلاق حملات تيك توك وميتا المربحة وتطوير تطبيق جوال خاص بمتجرك لضمان تكرار الشراء وعائد استثماري مضاعف.",
    },
  ];

  return (
    <section
      id="funnel"
      className="py-16 sm:py-24 border-t border-[#1e1e24]"
      style={{
        backgroundColor: "#0c0c0f",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-bold inline-block mb-3"
            style={{
              backgroundColor: "#18181f",
              border: "1px solid #2e2e38",
              color: "#3b82f6",
            }}
          >
            خريطة الطريق الكاملة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            كيف تنقلك خدمات Ecom Boost Pro{" "}
            <span style={{ color: "#eab308" }}>من الصفر إلى تدفق المبيعات؟</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            لا داعي للتعامل مع جهات متعددة؛ نقدم لك مساراً مدروساً يغطي كل خطوة في رحلتك التجارية.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="card-matte p-6 flex flex-col justify-between"
              style={{
                backgroundColor: "#121215",
                border: "1px solid #272730",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: "#18181f",
                      color: "#eab308",
                      border: "1px solid #2e2e38",
                    }}
                  >
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    خطوة {idx + 1} من 4
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Linked Services buttons */}
              <div className="space-y-2 pt-4 border-t border-[#1e1e24]">
                <span className="text-[10px] text-neutral-500 block uppercase font-bold">
                  الخدمات الموصى بها في هذه الخطوة:
                </span>
                {item.services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => onSelectService(srv)}
                    className="w-full text-right p-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-between group hover:bg-[#18181f]"
                    style={{
                      border: "1px solid #222228",
                      color: "#f4f4f6",
                    }}
                  >
                    <span className="truncate">
                      {srv.number}. {srv.title}
                    </span>
                    <span className="text-[#eab308] text-[11px] group-hover:translate-x-[-2px] transition-transform">
                      {srv.price} {srv.currency} ←
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
