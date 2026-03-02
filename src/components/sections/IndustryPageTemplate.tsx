import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Mail } from "lucide-react";

interface PainCard {
  title: string;
  body: string;
}

interface TransformCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}

interface UseCase {
  team: string;
  scenario: string;
  body: string;
}

interface Regulation {
  acronym: string;
  name: string;
  description: string;
}

export interface IndustryPageData {
  label: string;
  headline: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badges: string[];
  heroImage?: string;
  heroImageAlt?: string;

  realityLabel: string;
  realityHeadline: string;
  realitySubtext: string;
  painCards: PainCard[];

  withAliphLabel: string;
  withAliphHeadline: string;
  withAliphSubtext: string;
  transformCards: TransformCard[];

  useCasesLabel: string;
  useCasesHeadline: string;
  useCasesSubtext: string;
  useCases: UseCase[];

  regulationsHeadline: string;
  regulations: Regulation[];
  additionalFrameworks?: string;

  ctaHeadline: string;
  ctaSubtext: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  ctaTrust: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const IndustryPageTemplate = ({ data }: { data: IndustryPageData }) => {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative py-[56px] md:py-[88px] bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="container relative z-10 px-6">
          <div className={`grid ${data.heroImage ? "lg:grid-cols-[55fr_45fr] gap-12 items-center" : ""}`}>
            <div className="max-w-3xl">
              <motion.p {...fadeUp} className="section-label mb-3">
                {data.label}
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ delay: 0.1 }}
                className="font-bold text-[32px] md:text-[40px] lg:text-[48px] tracking-tight leading-[1.1] mb-4 text-foreground"
              >
                {data.headline}
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className="section-subtext mb-8 max-w-[520px]"
              >
                {data.subtext}
              </motion.p>
              <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <Link to={data.primaryCta.href} className="btn-primary group">
                  {data.primaryCta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to={data.secondaryCta.href} className="btn-secondary">
                  {data.secondaryCta.label}
                </Link>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="flex flex-wrap gap-3">
                {data.badges.map((b) => (
                  <div key={b} className="flex items-center gap-1.5 trust-line">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {b}
                  </div>
                ))}
              </motion.div>
            </div>
            {data.heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
                  <img
                    src={data.heroImage}
                    alt={data.heroImageAlt || data.label}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: The Reality */}
      <section className="py-12 md:py-[72px] bg-[#F9FAFB]">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.p {...fadeUp} className="section-label mb-3">
              {data.realityLabel}
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
              {data.realityHeadline}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
              {data.realitySubtext}
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.painCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="card-std card-std-pain"
              >
                <h3 className="card-title-std mb-2">{card.title}</h3>
                <p className="card-body-std">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What Changes With Aliph */}
      <section className="py-12 md:py-[72px] bg-background">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.p {...fadeUp} className="section-label mb-3">
              {data.withAliphLabel}
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
              {data.withAliphHeadline}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
              {data.withAliphSubtext}
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.transformCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="card-std card-std-success"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 rounded-lg bg-accent/10">
                      <Icon className="card-icon" />
                    </div>
                    <div>
                      <h3 className="card-title-std mb-2">{card.title}</h3>
                      <p className="card-body-std">{card.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Use Cases */}
      <section className="py-12 md:py-[72px] bg-[#F9FAFB]">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.p {...fadeUp} className="section-label mb-3">
              {data.useCasesLabel}
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
              {data.useCasesHeadline}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
              {data.useCasesSubtext}
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.useCases.map((uc, i) => (
              <motion.div
                key={uc.team}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="card-std"
              >
                <span className="inline-block section-label text-accent mb-3">
                  {uc.team}
                </span>
                <p className="text-sm italic text-muted-foreground mb-3">"{uc.scenario}"</p>
                <p className="card-body-std">{uc.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Regulations Covered */}
      <section className="py-12 md:py-[72px] bg-background">
        <div className="container px-6">
          <motion.h2 {...fadeUp} className="section-headline text-center mb-10">
            {data.regulationsHeadline}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {data.regulations.map((reg, i) => (
              <motion.div
                key={reg.acronym}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="flex-1 min-w-[200px] max-w-[260px] text-center card-std card-std-accent-top"
              >
                <p className="reg-acronym mb-1">{reg.acronym}</p>
                <p className="reg-name mb-2">{reg.name}</p>
                <p className="reg-body">{reg.description}</p>
              </motion.div>
            ))}
          </div>
          {data.additionalFrameworks && (
            <motion.p {...fadeUp} className="text-center trust-line mt-8">
              {data.additionalFrameworks}
            </motion.p>
          )}
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="dark-cta-section py-[56px] md:py-[88px]">
        <div className="container px-6 text-center max-w-[680px] mx-auto">
          <motion.h2 {...fadeUp} className="dark-cta-headline mb-4">
            {data.ctaHeadline}
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="dark-cta-subtext mb-8">
            {data.ctaSubtext}
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to={data.ctaPrimary.href} className="btn-primary group">
              {data.ctaPrimary.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={data.ctaSecondary.href} className="btn-secondary btn-secondary-dark">
              {data.ctaSecondary.label}
            </Link>
          </motion.div>
          <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="dark-cta-trust mb-4">
            {data.ctaTrust}
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.35 }} className="flex justify-center gap-4 dark-cta-contact">
            <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
              <MessageCircle className="h-3.5 w-3.5" /> +966 56 967 8421
            </a>
            <a href="mailto:raj@aliphai.ai" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
              <Mail className="h-3.5 w-3.5" /> raj@aliphai.ai
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustryPageTemplate;
