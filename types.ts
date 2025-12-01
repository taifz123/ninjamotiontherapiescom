export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConditionCategory {
  id: string;
  title: string;
  items: {
    title: string;
    symptoms: string[];
    treatment: string;
  }[];
}