"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  MessageCircle,
} from "lucide-react";
import { AGENCY_CONFIG, SERVICES_DATA } from "@/data/services";
import { ServiceItem } from "@/types";

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function Footer({ onSelectService }: FooterProps) {
  return (
    <footer className="bg-[#071a38] text-white border-t-4 border-[#0056d6]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#0056d6] flex items-center justify-center font-black text-white text-base shadow border-2 border-white">
                EB
              </div>
              <div>
                <span className="text-xl font-black text-white">
                  ECOM<span className="text-[#0066ff]">BOOST</span>
                </span>
                <span className="bg-[#fdb813] text-[#071d40] text-[10px] font-black px-1.5 py-0.5 rounded mr-1">
                  PRO
                </span>
              </div>
            </div>

            <p className="text-xs text-blue-200 leading-relaxed">
              وكالة التجارة الإلكترونية المتكاملة: حلول برمجية، صفحات هبوط، حملات إعلانية، وبوابات دفع عالمية لمساعدتك في بناء إمبراطوريتك التجارية من الصفر وحتى المبيعات.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0b2754] text-[#fdb813] border border-[#1e4887]">
                <Zap className="w-3.5 h-3.5" />
                {AGENCY_CONFIG.cornerSlogan}
              </span>
            </div>
          </div>

          {/* Col 2: The 7 Services */}
          <div>
            <h4 className="text-sm font-black text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#fdb813]" />
              الخدمات السبع المتكاملة
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv)}
                    className="text-blue-200 hover:text-white transition-colors text-right flex items-center gap-1.5"
                  >
                    <span className="text-[#fdb813] font-mono font-bold">
                      {srv.number}.
                    </span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-sm font-black text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0066ff]" />
              التواصل والدعم الفني
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-200">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                <a
                  href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  dir="ltr"
                >
                  {AGENCY_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066ff] flex-shrink-0" />
                <span>{AGENCY_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#fdb813] flex-shrink-0 mt-0.5" />
                <span>{AGENCY_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span>{AGENCY_CONFIG.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust Guarantees */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              ضمانات Ecom Boost Pro
            </h4>
            <div className="p-3.5 rounded-xl bg-[#0b2754] border border-[#1e4887] space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  متجر خاص ملكك 100% بدون اشتراكات أو عمولات على المبيعات.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  دعم فني ومتابعة شخصية بعد التسليم لضمان انطلاقة ناجحة.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#133261] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} ECOMBOOST PRO — جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span>نظام دفع مرن (COD)</span>
            <span>•</span>
            <span>بوابات دفع دولية</span>
            <span>•</span>
            <span>دعم فني 7/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
