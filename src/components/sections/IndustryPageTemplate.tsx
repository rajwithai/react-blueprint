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
      <section className="relative py-24 md:py-32 lg:py-36 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="container relative z-10 px-6">
          <div className="max-w-3xl">
            <motion.p
              {...fadeUp}
              className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
            >
              {data.label}
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-[2.5rem] md:text-[2.85rem] lg:text-[3.25rem] tracking-tight leading-[1.08] mb-6 text-foreground"
            >
              {data.headline}
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-[520px]"
            >
              {data.subtext}
            </motion.p>
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Link
                to={data.primaryCta.href}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all shadow-sm group"
              >
                {data.primaryCta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={data.secondaryCta.href}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground hover:bg-muted font-heading font-semibold transition-all"
              >
                {data.secondaryCta.label}
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="flex flex-wrap gap-3">
              {data.badges.map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-sm font-body text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {b}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: The Reality */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-muted-foreground mb-3">
              {data.realityLabel}
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              {data.realityHeadline}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-lg">
              {data.realitySubtext}
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.painCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm border-l-[3px] border-l-destructive/60"
              >
                <h3 className="font-heading font-semibold text-base mb-2 text-foreground">{card.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What Changes With Aliph */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-accent mb-3">
              {data.withAliphLabel}
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              {data.withAliphHeadline}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-lg">
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
                  className="bg-card rounded-xl p-6 border border-border shadow-sm border-l-[3px] border-l-green-500/60"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base mb-2 text-foreground">{card.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Use Cases */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-muted-foreground mb-3">
              {data.useCasesLabel}
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              {data.useCasesHeadline}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-lg">
              {data.useCasesSubtext}
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.useCases.map((uc, i) => (
              <motion.div
                key={uc.team}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <span className="inline-block text-xs uppercase tracking-wider font-heading font-semibold text-accent mb-3">
                  {uc.team}
                </span>
                <p className="font-body text-sm italic text-muted-foreground mb-3">"{uc.scenario}"</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{uc.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Regulations Covered */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container px-6">
          <motion.h2 {...fadeUp} className="font-heading font-bold text-2xl md:text-3xl text-center mb-10 text-foreground">
            {data.regulationsHeadline}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {data.regulations.map((reg, i) => (
              <motion.div
                key={reg.acronym}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="flex-1 min-w-[200px] max-w-[260px] text-center"
              >
                <p className="font-heading font-bold text-2xl text-accent mb-1">{reg.acronym}</p>
                <p className="font-body text-xs text-muted-foreground mb-2">{reg.name}</p>
                <p className="font-body text-xs text-muted-foreground/80 leading-relaxed">{reg.description}</p>
              </motion.div>
            ))}
          </div>
          {data.additionalFrameworks && (
            <motion.p {...fadeUp} className="text-center text-xs text-muted-foreground mt-8">
              {data.additionalFrameworks}
            </motion.p>
          )}
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-20 md:py-28 bg-[hsl(var(--primary))] text-primary-foreground">
        <div className="container px-6 text-center max-w-3xl mx-auto">
          <motion.h2 {...fadeUp} className="font-heading font-bold text-3xl md:text-4xl mb-6">
            {data.ctaHeadline}
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-primary-foreground/70 text-lg leading-relaxed mb-8">
            {data.ctaSubtext}
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link
              to={data.ctaPrimary.href}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all shadow-sm group"
            >
              {data.ctaPrimary.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={data.ctaSecondary.href}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold transition-all"
            >
              {data.ctaSecondary.label}
            </Link>
          </motion.div>
          <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="text-xs text-primary-foreground/50 mb-4">
            {data.ctaTrust}
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.35 }} className="flex justify-center gap-4 text-xs text-primary-foreground/50">
            <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
              <MessageCircle className="h-3.5 w-3.5" /> +966 56 967 8421
            </a>
            <a href="mailto:raj@aliphai.ai" className="inline-flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
              <Mail className="h-3.5 w-3.5" /> raj@aliphai.ai
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustryPageTemplate;
