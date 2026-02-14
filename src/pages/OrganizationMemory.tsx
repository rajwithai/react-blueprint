import { motion } from "framer-motion";
import { RefreshCw, Users, TrendingUp } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const dataSources = [
  { name: "Google Drive", status: "Live" },
  { name: "Local File Systems & Network Drives", status: "Live" },
  { name: "Direct Uploads", status: "Live" },
  { name: "Microsoft 365 / SharePoint", status: "Coming Q2 2026" },
  { name: "Salesforce & HubSpot", status: "Coming Q3 2026" },
];

const OrganizationMemory = () => {
  return (
    <>
      <HeroSection
        eyebrow="ORGANIZATION MEMORY"
        title="Twenty years of expertise. Available in seconds."
        subtitle="Every document, every decision, every lesson your organization has ever produced — indexed, searchable, and secured by the permissions you already have. Institutional knowledge that never leaves, even when people do."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      {/* The Promise */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground"
          >
            Your next hire already knows everything.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg text-muted-foreground leading-relaxed"
          >
            When a new employee joins, they inherit access to the collective intelligence of everyone who came before them — filtered by their role, cited to its source, and available in natural language. When a senior leader departs, their expertise stays. Organization Memory is not a document repository. It is a living intelligence layer that learns from every interaction across your entire organization.
          </motion.p>
        </div>
      </Section>

      {/* Connected Systems */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground"
        >
          Connects to where your knowledge already lives.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {dataSources.map((ds, i) => (
            <motion.div
              key={ds.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass glow-border rounded-xl p-5 text-center"
            >
              <span className="font-heading font-medium text-sm text-primary-foreground block mb-2">{ds.name}</span>
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-heading font-semibold ${ds.status === "Live" ? "bg-primary/20 text-primary" : "bg-amber/20 text-amber"}`}>
                {ds.status}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="font-body text-sm text-primary-foreground/50 mt-6 text-center">
          New files and permission changes sync within minutes. No migration. No duplication.
        </p>
      </Section>

      {/* Permissions */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-semibold text-3xl md:text-4xl mb-6"
            >
              Your permissions. Automatically.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-muted-foreground leading-relaxed mb-4"
            >
              Aliph does not create new permission structures. It inherits yours. The files your CEO can see in Google Drive are the files Aliph searches for your CEO. The files a junior analyst can see are the boundaries of their answers. Same question, different depth — based on actual organizational role, with zero admin configuration.
            </motion.p>
            <p className="font-body text-sm text-muted-foreground/60">
              Permission changes propagate in minutes. Employee departs? SSO deprovisioning revokes access immediately.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6">
              <p className="text-xs uppercase tracking-wider text-primary mb-2 font-heading font-semibold">CEO sees</p>
              <p className="font-body text-sm text-muted-foreground">Full policy + HR notes + legal precedents</p>
            </div>
            <div className="rounded-2xl bg-muted border border-border p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-heading font-semibold">Junior Analyst sees</p>
              <p className="font-body text-sm text-muted-foreground">Company-wide policy document only</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Gets Smarter */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground"
        >
          Intelligence that compounds.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={RefreshCw} title="Learns from feedback" description="Corrections, approvals, and usage patterns refine every future response." delay={0} dark />
          <FeatureCard icon={Users} title="Captures new knowledge" description="Every engagement, every decision, every conversation adds to the institutional memory." delay={100} dark />
          <FeatureCard icon={TrendingUp} title="Strengthens over time" description="The platform you deploy today is the weakest version you will ever have." delay={200} dark />
        </div>
      </Section>

      <CTABanner
        title="Stop losing what your organization knows."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default OrganizationMemory;
