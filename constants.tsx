
import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Wind, 
  Target, 
  Award, 
  Calendar,
  Check,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { ServiceCard, PricingPlan, Trainer } from './types';

export const SERVICES: ServiceCard[] = [
  {
    title: "1對1 客製化美力課程",
    description: "專為女性設計的訓練邏輯，針對骨盆、姿態、核心與線條，打造妳的理想體態。",
    icon: "Heart"
  },
  {
    title: "科學化體態雕塑",
    description: "不只是瘦，更要健康。利用反作用力訓練原理，提升身體覺知與動態美感。",
    icon: "Wind"
  },
  {
    title: "孕產/產後運動修復",
    description: "專業教練陪伴，在安全且科學的指導下，找回身體的主導權與自信活力。",
    icon: "Sparkles"
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: "質感體驗",
    price: "NT$ 980",
    features: ["身體組成分析 (InBody)", "一小時專業動作檢測", "個人化訓練規劃建議", "單次限定體驗"],
  },
  {
    name: "美力養成",
    price: "NT$ 1,800 / 堂",
    features: ["精準體態優化課程", "專屬個人運動課表", "日常飲食健康諮詢", "定期進度紀錄分析"],
    recommended: true
  },
  {
    name: "深度蛻變",
    price: "NT$ 1,600 / 堂",
    features: ["36 堂以上完整訓練計畫", "運動表現全面提升", "產後/特殊目標專案", "場館自主練習優先預約"],
  }
];

export const TRAINERS: Trainer[] = [
  {
    name: "Mia 教練",
    specialty: "女性體態雕塑、產後恢復、皮拉提斯結合肌力",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    bio: "深信運動是愛自己的表現，擅長用細膩的引導協助妳找到發力感。"
  },
  {
    name: "Leo 教練",
    specialty: "運動科學分析、功能性訓練",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    bio: "將複雜的科學轉化為簡單的動作，讓妳的訓練更精準且高效。"
  }
];

export const ICONS = {
  Heart: <Heart className="w-8 h-8 text-rose-300" />,
  Wind: <Wind className="w-8 h-8 text-rose-300" />,
  Sparkles: <Sparkles className="w-8 h-8 text-rose-300" />,
  Check: <Check className="w-5 h-5 text-rose-400" />,
  Instagram: <Instagram className="w-5 h-5" />,
  Facebook: <Facebook className="w-5 h-5" />,
  Line: <MessageCircle className="w-5 h-5" />
};
