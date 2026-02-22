import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import Section from "./Section";

interface ComparisonRow {
  feature: string;
  competitor: boolean;
  aliph: boolean;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  competitorName: string;
  aliphName: string;
  rows: ComparisonRow[];
  alabaster?: boolean;
}

const ComparisonTable = ({
  title,
  subtitle,
  competitorName,
  aliphName,
  rows,
  alabaster = false,
}: ComparisonTableProps) => {
  return (
    <Section alabaster={alabaster}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground tracking-tight"
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-10 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}

      <div className="max-w-3xl mx-auto rounded-2xl border border-border overflow-hidden bg-card">
        {/* Header */}
        <div className="grid grid-cols-3 bg-secondary">
          <div className="p-4 flex items-center">
            <span className="font-heading font-semibold text-sm text-muted-foreground">Capability</span>
          </div>
          <div className="p-4 text-center border-l border-border">
            <span className="font-heading font-semibold text-sm text-muted-foreground">{competitorName}</span>
          </div>
          <div className="p-4 text-center border-l border-accent/20 bg-accent/5">
            <span className="font-heading font-semibold text-sm text-accent">{aliphName}</span>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <motion.div
            key={row.feature}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="grid grid-cols-3 border-t border-border"
          >
            <div className="p-4 flex items-center">
              <span className="font-body text-sm text-foreground">{row.feature}</span>
            </div>
            <div className="p-4 flex items-center justify-center border-l border-border">
              {row.competitor ? (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground/40" />
              )}
            </div>
            <div className="p-4 flex items-center justify-center border-l border-accent/20 bg-accent/5">
              {row.aliph ? (
                <CheckCircle2 className="h-5 w-5 text-accent" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground/40" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ComparisonTable;
