import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-secondary">
      <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 leading-tight">
          See the Aliph Control Plane in action.
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          We'll walk you through a real workflow—governance controls, protected inputs, and audit-ready outputs—mapped to your environment.
        </p>
        <Link
          to="/demo"
          className="inline-block w-full sm:w-auto px-10 py-5 bg-accent hover:brightness-110 text-accent-foreground text-lg font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
        >
          Book a Demo
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;