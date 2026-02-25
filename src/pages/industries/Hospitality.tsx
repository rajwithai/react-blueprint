import { UserCircle, Globe, TrendingUp, Brain } from "lucide-react";
import IndustryPageTemplate, { IndustryPageData } from "@/components/sections/IndustryPageTemplate";

const data: IndustryPageData = {
  label: "HOSPITALITY & TOURISM",
  headline: "Vision 2030 targets 100 million tourists. Your hotel needs AI for guest intelligence — but guest data is sacred under PDPL.",
  subtext: "From personalized guest experiences to multi-property operations to revenue optimization — Aliph gives hospitality companies sovereign AI that transforms service quality while keeping every guest's passport number, payment detail, and preference fully protected.",
  primaryCta: { label: "Book a Hospitality AI Assessment", href: "/demo" },
  secondaryCta: { label: "See the Platform →", href: "/platform" },
  badges: ["PDPL", "STA", "Tourism Authority Requirements"],

  realityLabel: "YOUR REALITY TODAY",
  realityHeadline: "Your hotels are sitting on a goldmine of guest data they can't safely use.",
  realitySubtext: "Your front desk answers the same questions hundreds of times a week — in Arabic, English, and a dozen other languages. Your revenue manager builds pricing forecasts in spreadsheets that break every Hajj season. Guest preferences and history are trapped in individual property systems — a returning VIP at your Riyadh hotel is a stranger at your Jeddah property. Your concierge team's institutional knowledge about the best restaurants, local experiences, and guest preferences exists only in their heads. And every guest passport number, payment detail, and personal preference stored in your PMS is regulated data you're responsible for under PDPL.",
  painCards: [
    { title: "A returning VIP is a stranger at your other property.", body: "Guest preferences trapped in individual property systems. No cross-property intelligence. Your best guest walks into your Jeddah hotel and nobody knows they stayed in Riyadh last month." },
    { title: "Revenue forecasting breaks every peak season.", body: "Spreadsheet-based pricing can't handle Hajj, Umrah, and seasonal demand patterns. Manual forecasting means missed revenue during your highest-value periods." },
    { title: "Your best concierge retires. Their knowledge vanishes.", body: "Twenty years of knowing which restaurants VIPs prefer, which rooms have the best views, which local experiences guests love — gone overnight. New staff start from zero." },
  ],

  withAliphLabel: "WITH ALIPH",
  withAliphHeadline: "Guest intelligence across every property. Fully sovereign. Fully personalized.",
  withAliphSubtext: "Aliph connects your property management systems and makes guest knowledge accessible across your entire hospitality group — while keeping every piece of guest data inside your walls.",
  transformCards: [
    { icon: UserCircle, title: "One guest profile across all properties.", body: "Guest preferences, stay history, and service patterns searchable across your entire hotel group — by authorized staff only. Your VIP is recognized and welcomed at every property. Privacy Shield ensures guest PII never leaves your systems." },
    { icon: Globe, title: "Concierge AI — 24/7, Arabic and English.", body: "Guest queries handled instantly in multiple languages. Restaurant recommendations, local experiences, hotel services — answered from your curated knowledge base. Consistent service quality at 3 AM and 3 PM." },
    { icon: TrendingUp, title: "Revenue optimization with sovereign data.", body: "Demand forecasting powered by your historical booking data, analyzed through sovereign AI. Hajj season, Umrah periods, weekday patterns — pricing recommendations based on your actual performance data. No proprietary revenue data sent to external servers." },
    { icon: Brain, title: "Hospitality knowledge that compounds.", body: "Every guest preference logged, every concierge recommendation captured, every operational insight preserved. New staff access decades of hospitality knowledge from day one. What one property learns benefits your entire group." },
  ],

  useCasesLabel: "USE CASES",
  useCasesHeadline: "How hospitality teams use Aliph every day.",
  useCasesSubtext: "From front desk to revenue management to group operations — sovereign AI for every team.",
  useCases: [
    { team: "Front Desk & Guest Services", scenario: "Your team answers the same 50 questions every day while trying to deliver personalized service to 300 guests.", body: "AliphChat handles routine guest queries in Arabic and English — sourced from your hotel's actual information. Check-in staff see guest preferences and history instantly. Service requests routed automatically. Your team focuses on hospitality, not repetitive answers." },
    { team: "Revenue Management", scenario: "Your revenue manager spends Monday morning building the weekly forecast from three different spreadsheets.", body: "Ask AliphChat about occupancy trends, rate performance, or demand forecasts. Get answers from your own booking data in seconds. Seasonal pattern analysis that used to take hours happens automatically. Your revenue manager makes decisions, not spreadsheets." },
    { team: "Multi-Property Operations", scenario: "Your hotel group has 5 properties but each one operates as an island — no shared learning, no cross-property intelligence.", body: "Organization Memory connects knowledge across all properties. Best practices from your Riyadh property automatically accessible to your Jeddah team. SOPs, guest insights, and operational procedures shared and searchable group-wide. Governed by role permissions — each property sees what's appropriate." },
  ],

  regulationsHeadline: "Regulatory frameworks mapped for Saudi hospitality.",
  regulations: [
    { acronym: "PDPL", name: "Personal Data Protection Law", description: "Guest personal data protection — passport numbers, payment details, preferences. Consent management and data handling requirements fully mapped." },
    { acronym: "STA", name: "Saudi Tourism Authority", description: "Licensing, service standards, reporting obligations. Monitored for updates." },
    { acronym: "Tourism", name: "Tourism Authority Regulations", description: "Hajj and Umrah operations, hotel classification requirements, and guest safety standards." },
  ],

  ctaHeadline: "See how Aliph transforms guest intelligence for your hotel group.",
  ctaSubtext: "Bring your guest data challenges, your multi-property coordination needs, or your compliance requirements. We'll show you sovereign AI working on hospitality-specific scenarios. 30 minutes. No commitment.",
  ctaPrimary: { label: "Book a Hospitality AI Assessment", href: "/demo" },
  ctaSecondary: { label: "Download the Hospitality Sovereignty Guide", href: "/contact" },
  ctaTrust: "No sales pitch. See sovereign AI working on real hospitality scenarios.",
};

const Hospitality = () => <IndustryPageTemplate data={data} />;
export default Hospitality;
