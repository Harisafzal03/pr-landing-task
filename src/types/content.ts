export type Badge = {
    text: string
    icon?: string
  }
  
  export type CTA = {
    label: string
    href: string
    variant?: "primary" | "secondary" | "ghost"
  }
  
  export type FormField = {
    name: string
    label: string
    type: "text" | "email" | "tel" | "select" | "textarea"
    placeholder?: string
    required?: boolean
    options?: { label: string; value: string }[]
  }
  
  export type HeroContent = {
    eyebrow?: string
    title: string
    subtitle?: string
    description?: string
    badges?: Badge[]
    form?: {
      title: string
      description?: string
      fields: FormField[]
      submitLabel: string
      disclaimer?: string
    }
    illustration?: string
    ctas?: CTA[]
  }
  
  export type SectionBlock = {
    eyebrow?: string
    title: string
    paragraphs: string[]
    ctas?: CTA[]
    illustration?: string
  }
  
  export type PricingTier = {
    title: string
    subTitle: string
    stats: { label: string; value: string | number }[]
    price: { amount: string; cadence: string }
    ctas: CTA[]
    featured?: boolean
  }
  
  export interface FooterContent {
    columns: {
      title?: string;
      links: {
        label: string;
        href: string;
      }[];
    }[];
    legal?: string;
    badges?: {
      text: string;
    }[];
    contact?: {
      phone?: string;
      address?: {
        line1: string;
        line2: string;
      };
    };
  }
  
  export type NavbarContent = {
    logoText: string
    links: { label: string; href: string }[]
    rightCtas?: CTA[]
    trustBadge?: Badge
    contactBar?: { label: string; phone: string }
  }
  
  export type PageContent = {
    navbar: NavbarContent
    hero: HeroContent
    howItWorks: SectionBlock
    prCrm: SectionBlock
    leadsWarning: SectionBlock
    pricing: {
      eyebrow?: string
      title: string
      subtitle?: string
      tiers: PricingTier[]
      disclaimer?: string
    }
    footer: FooterContent
  }