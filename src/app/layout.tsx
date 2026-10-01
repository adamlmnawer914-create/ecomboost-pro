import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecomboostpro.vercel.app"),
  title: "ECOMBOOST PRO — خدماتنا السبع المتكاملة لنجاح متجرك الإلكتروني",
  description:
    "Ecom Boost Pro: برمجة المتاجر الخاصة بدون اشتراكات شهرية، صفحات هبوط عالية التحويل، بوابات الدفع الدولية، إعلانات تيك توك وفيسبوك، وتطبيقات الهواتف الذكية. كل ما تحتاجه للنجاح من الصفر وحتى المبيعات.",
  keywords: [
    "Ecom Boost Pro",
    "برمجة متاجر إلكترونية",
    "صفحات هبوط",
    "بوابات الدفع الدولي",
    "إعلانات تيك توك",
    "إعلانات فيسبوك",
    "تصميم صور بالذكاء الاصطناعي",
    "تطبيقات متاجر إلكترونية",
    "COD المغرب",
    "الدفع عند الاستلام",
  ],
  openGraph: {
    title: "ECOMBOOST PRO — خدماتنا السبع المتكاملة",
    description:
      "باقة الخدمات الرقمية الشاملة لنجاح متجرك الإلكتروني من الصفر وحتى تحقيق المبيعات المستمرة.",
    url: "https://ecomboostpro.vercel.app",
    siteName: "ECOMBOOST PRO",
    type: "website",
    locale: "ar_MA",
  },
  alternates: {
    canonical: "https://ecomboostpro.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${cairo.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f6]">
        {children}
      </body>
    </html>
  );
}
