import { motion } from "framer-motion";

interface TrustStat {
  value: string;
  label: string;
}

interface TrustBarProps {
  stats: TrustStat[];
}

const TrustBar = ({ stats }: TrustBarProps) => {
  return (
    <section className="py-10 bg-secondary border-y border-border">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
