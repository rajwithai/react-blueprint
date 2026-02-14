import { Link } from "react-router-dom";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";

const blogPosts = [
  { title: "Why Sovereign AI Matters for Saudi Enterprises", category: "Sovereign AI", date: "February 2026", excerpt: "As Saudi Arabia accelerates its AI adoption under Vision 2030, data sovereignty has become the critical differentiator between responsible and reckless AI deployment." },
  { title: "Understanding PDPL: What Every Enterprise Needs to Know", category: "PDPL Compliance", date: "January 2026", excerpt: "Saudi Arabia's Personal Data Protection Law carries penalties of up to SAR 5 million per violation. Here's what your organization needs to understand." },
  { title: "The Four-Layer Architecture Behind Aliph", category: "Product Updates", date: "January 2026", excerpt: "A deep dive into how Aliph's federated architecture resolves the tension between AI capability and data sovereignty." },
];

const Blog = () => {
  return (
    <>
      <HeroSection
        title="Insights & Resources"
        subtitle="Thought leadership on sovereign AI, PDPL compliance, and the future of enterprise intelligence."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
              <div className="h-48 bg-muted" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary">{post.category}</span>
                  <span className="text-xs font-body text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{post.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Blog;
