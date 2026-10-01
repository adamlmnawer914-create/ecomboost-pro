// ===== ECOMBOOST PRO — Agency & Service Types =====

export type ServiceCategory = "development" | "marketing" | "design" | "solutions";

export interface ServiceItem {
  id: string;
  number: string; // "01", "02", etc.
  title: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  currency: string; // "MAD"
  badge?: string;
  badgeType?: "gold" | "blue" | "green";
  deliveryTime: string;
  category: ServiceCategory;
  categoryName: string;
  iconName:
    | "code"
    | "layout"
    | "credit-card"
    | "sparkles"
    | "video"
    | "trending-up"
    | "smartphone";
  features: string[];
  popular?: boolean;
}

export interface OrderFormData {
  fullName: string;
  whatsapp: string;
  city: string;
  serviceId: string;
  projectDetails?: string;
}

export interface OrderSubmission extends OrderFormData {
  serviceTitle: string;
  servicePrice: number;
  currency: string;
  submittedAt: string;
}

export interface TrustBadgeItem {
  title: string;
  subtitle: string;
  iconName: "shield" | "zap" | "headphones" | "award";
}
