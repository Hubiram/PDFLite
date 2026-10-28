import { isDev } from "./helpers";
import { Variants } from "framer-motion";

type Plan = {
  id: string;
  name: string;
  price: number;
  priceID: string;
  paymentLink: string;
  items: string[];
};

export const pricingPlans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 10,
    priceID: isDev ? 'price_1SGdgILC2ZVoUwYxt2INVWzL' : '',
    paymentLink: isDev ? 'https://buy.stripe.com/test_4gM5kE71x7zd6XR0KG0Ba00' : '',
    items: [
      '5 PDF summaries per month',
      'Standard processing speed',
      'Subject to availability',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 100,
    priceID: isDev ? 'price_1SGdjTLC2ZVoUwYxpi1AXfqv' : '',
    paymentLink: isDev ? 'https://buy.stripe.com/test_bJe6oIbhN6v91DxgJE0Ba01' : '',
    items: [
      'Unlimited PDF summaries',
      'Priority processing',
      'Markdown Export',
    ],
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

export const ORIGIN_URL = "yourdomain.com"; 