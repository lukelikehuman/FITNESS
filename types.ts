
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Trainer {
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
