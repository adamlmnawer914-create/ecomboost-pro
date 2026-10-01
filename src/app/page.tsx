"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TrustBanner from "@/components/TrustBanner";
import OrderModal from "@/components/OrderModal";
import Footer from "@/components/Footer";
import BackgroundDecoration from "@/components/BackgroundDecoration";
import { ServiceItem } from "@/types";
import { SERVICES_DATA } from "@/data/services";

export default function HomePage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsOrderModalOpen(true);
  };

  const handleOpenGeneralOrderModal = () => {
    if (!selectedService) {
      setSelectedService(SERVICES_DATA[0]);
    }
    setIsOrderModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsOrderModalOpen(false);
  };

  const handleServiceChange = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f0f6ff] overflow-hidden">
      {/* Dynamic Background Decoration matching the banner (Corner swooshes, flowing 3D waves, and lighting) */}
      <BackgroundDecoration />

      {/* 1. Top Hero / Showcase Banner */}
      <div className="relative z-10">
        <HeroSection onOpenOrderModal={handleOpenGeneralOrderModal} />
      </div>

      {/* 2. The 7 Services Grid matching the exact card dimensions and layout (4 on top, 3 on bottom) */}
      <main className="relative z-10 flex-1">
        <ServicesGrid onSelectService={handleSelectService} />
      </main>

      {/* 3. The Bottom Navy Blue Trust Bar (4 badges + yellow corner sticker 'معاً نحو نجاح أكبر') */}
      <div className="relative z-10">
        <TrustBanner />
      </div>

      {/* 4. Agency Footer */}
      <div className="relative z-10">
        <Footer onSelectService={handleSelectService} />
      </div>

      {/* 5. Instant COD / WhatsApp Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseModal}
        selectedService={selectedService}
        onSelectServiceChange={handleServiceChange}
      />
    </div>
  );
}
