"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  X,
  User,
  Phone,
  MapPin,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Layers,
  Send,
  Clock,
  Sparkles,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { ServiceItem, OrderFormData } from "@/types";
import { SERVICES_DATA, MOROCCAN_CITIES, AGENCY_CONFIG } from "@/data/services";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceItem | null;
  onSelectServiceChange: (service: ServiceItem) => void;
}

export default function OrderModal({
  isOpen,
  onClose,
  selectedService,
  onSelectServiceChange,
}: OrderModalProps) {
  const currentService = selectedService || SERVICES_DATA[0];

  const [formData, setFormData] = useState<OrderFormData>({
    fullName: "",
    whatsapp: "",
    city: MOROCCAN_CITIES[0],
    serviceId: currentService.id,
    projectDetails: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: selectedService.id,
      }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "يرجى كتابة الاسم الكامل";
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "يرجى إدخال رقم الواتساب لتأكيد الطلب";
    } else if (
      !/^(0[567]\d{8}|\+?212[567]\d{8}|\+?\d{8,15})$/.test(
        formData.whatsapp.replace(/[\s-]/g, "")
      )
    ) {
      newErrors.whatsapp = "يرجى كتابة رقم هاتف صحيح (مثال: 0612345678)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const activeService =
    SERVICES_DATA.find((s) => s.id === formData.serviceId) || currentService;

  const generateWhatsAppMessage = () => {
    const text = `*طلب خدمة جديد — Ecom Boost Pro*
━━━━━━━━━━━━━━━━━━
📌 *الخدمة:* ${activeService.number} - ${activeService.title}
💰 *السعر:* ${activeService.price} ${activeService.currency}
⏱️ *مدة التسليم:* ${activeService.deliveryTime}
━━━━━━━━━━━━━━━━━━
👤 *الاسم:* ${formData.fullName}
📱 *الواتساب:* ${formData.whatsapp}
📍 *المدينة:* ${formData.city}
📝 *تفاصيل إضافية:* ${formData.projectDetails || "لا توجد ملاحظات إضافية"}
━━━━━━━━━━━━━━━━━━
يرجى تأكيد استلام الطلب والبدء في الإجراءات.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppInstantSubmit = () => {
    if (!validate()) return;
    const url = `https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
    setIsSubmitted(true);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{
        backgroundColor: "rgba(7, 26, 56, 0.75)",
      }}
    >
      <div
        className="w-full max-w-xl rounded-2xl overflow-hidden my-auto shadow-2xl bg-white border-2 border-[#b9d5fb]"
        dir="rtl"
      >
        {/* Modal Header in Royal Blue */}
        <div className="bg-gradient-to-r from-[#004ec4] to-[#0066ff] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#fdb813] text-[#071d40] font-black text-sm flex items-center justify-center shadow">
              {activeService.number}
            </span>
            <div>
              <h3 className="text-base font-black leading-tight">
                استمارة طلب الخدمة (COD)
              </h3>
              <p className="text-[11px] text-blue-100">
                ECOMBOOST PRO — دفع وتأكيد فوري
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-5 bg-[#f4f8fe]">
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-emerald-100 border-2 border-emerald-500 shadow-md">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <div>
              <h4 className="text-2xl font-black text-[#071d40] mb-1">
                تم تسجيل طلبك بنجاح! 🎉
              </h4>
              <p className="text-sm text-[#526484] max-w-md mx-auto">
                شكراً لاختيارك Ecom Boost Pro. تم حجز طلب خدمة:{" "}
                <strong className="text-[#0056d6]">{activeService.title}</strong>
              </p>
            </div>

            <div className="p-4 rounded-xl text-right max-w-md mx-auto space-y-2 text-xs bg-white border border-[#b9d5fb] shadow-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">الاسم الكامل:</span>
                <span className="font-bold text-[#071d40]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">رقم الواتساب:</span>
                <span className="font-bold text-[#071d40]" dir="ltr">{formData.whatsapp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">المدينة:</span>
                <span className="font-bold text-[#071d40]">{formData.city}</span>
              </div>
              <div className="flex justify-between border-t border-[#e2eaf5] pt-2 font-black text-sm">
                <span className="text-neutral-600">المبلغ الإجمالي:</span>
                <span className="text-[#0056d6]">{activeService.price} {activeService.currency}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-[#0056d6] flex items-center gap-2 max-w-md mx-auto">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>
                سيتواصل معك مستشارك التقني عبر الواتساب خلال أقل من 30 دقيقة لبدء التنفيذ الفوري.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow-gold flex-1 text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>متابعة فورية عبر الواتساب</span>
              </a>

              <button
                onClick={resetAndClose}
                className="py-3 px-6 rounded-xl border border-neutral-300 text-sm font-bold text-neutral-700 hover:bg-neutral-100"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleFormSubmit} className="p-6 space-y-4 bg-white">
            {/* Service selector */}
            <div className="p-3.5 rounded-xl bg-[#f0f6ff] border border-[#b9d5fb] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#071d40]">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#0056d6]" />
                  الخدمة المختارة:
                </span>
                <span className="text-[#0056d6] text-sm font-black">
                  {activeService.price} {activeService.currency}
                </span>
              </div>

              <select
                value={formData.serviceId}
                onChange={(e) => {
                  const newService = SERVICES_DATA.find((s) => s.id === e.target.value);
                  if (newService) {
                    onSelectServiceChange(newService);
                    setFormData({ ...formData, serviceId: newService.id });
                  }
                }}
                className="w-full p-2.5 rounded-lg border border-[#b9d5fb] bg-white text-[#071d40] text-xs font-bold focus:outline-none focus:border-[#0056d6]"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.number} - {srv.title} ({srv.price} {srv.currency})
                  </option>
                ))}
              </select>

              <div className="flex items-center justify-between text-[11px] text-[#526484]">
                <span>⏱️ مدة التسليم: {activeService.deliveryTime}</span>
                <span className="text-emerald-600 font-bold">✓ ضمان الجودة والمتابعة</span>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#071d40] mb-1">
                  الاسم الكامل *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="مثال: محمد بنجلون"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    className="w-full p-2.5 pr-8 rounded-lg border border-[#cbe0fc] text-xs focus:outline-none focus:border-[#0056d6]"
                  />
                  <User className="w-4 h-4 text-neutral-400 absolute top-2.5 right-2.5" />
                </div>
                {errors.fullName && (
                  <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#071d40] mb-1">
                  رقم الواتساب للتواصل *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="0612345678"
                    value={formData.whatsapp}
                    onChange={(e) => {
                      setFormData({ ...formData, whatsapp: e.target.value });
                      if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                    }}
                    className="w-full p-2.5 pr-8 rounded-lg border border-[#cbe0fc] text-xs font-mono text-left focus:outline-none focus:border-[#0056d6]"
                    dir="ltr"
                  />
                  <Phone className="w-4 h-4 text-neutral-400 absolute top-2.5 right-2.5" />
                </div>
                {errors.whatsapp && (
                  <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
                  </p>
                )}
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-bold text-[#071d40] mb-1">
                المدينة *
              </label>
              <div className="relative">
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-2.5 pr-8 rounded-lg border border-[#cbe0fc] text-xs focus:outline-none focus:border-[#0056d6]"
                >
                  {MOROCCAN_CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <MapPin className="w-4 h-4 text-neutral-400 absolute top-2.5 right-2.5" />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold text-[#071d40] mb-1">
                ملاحظات أو رابط متجرك (اختياري)
              </label>
              <textarea
                rows={2}
                placeholder="أخبرنا باختصار عن فكرة منتجك، الرابط، أو أي متطلبات ترغب بها..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                className="w-full p-2.5 rounded-lg border border-[#cbe0fc] text-xs resize-none focus:outline-none focus:border-[#0056d6]"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppInstantSubmit}
                className="w-full py-3 rounded-xl font-black text-xs sm:text-sm bg-[#10b981] hover:bg-[#059669] text-white flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تأكيد وحجز الخدمة فوراً عبر الواتساب</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-yellow-gold w-full text-xs sm:text-sm py-3"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "جاري الحجز..." : "تأكيد الطلب المباشر عبر الموقع"}</span>
              </button>
            </div>

            <div className="text-center text-[10px] text-neutral-500 pt-1 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0056d6]" />
              <span>نظام موثوق ومعتمد بدون رسوم اشتراك شهرية</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
