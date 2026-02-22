import { motion } from "framer-motion";
import Section from "./Section";

interface Stat {
  value: string;
  label: string;
  detail?: string;
}

interface ImpactStatsProps {
  eyebrow?: string;
  title?: string;
  stats: Stat[];
  alabaster?: boolean;
}

const ImpactStats = ({ eyebrow, title, stats, alabaster = false }: ImpactStatsProps) => {
  return (
    <Section alabaster={alabaster}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          {title}
        </motion.h2>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-8 text-center"
          >
            <p className="font-heading font-bold text-4xl md:text-5xl text-gradient mb-3">
              {stat.value}
            </p>
            <p className="font-heading font-semibold text-sm text-foreground mb-1">
              {stat.label}
            </p>
            {stat.detail && (
              <p className="font-body text-xs text-muted-foreground">{stat.detail}</p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ImpactStats;
