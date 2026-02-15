import { CheckCircle, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CredibilityProof = () => {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container px-4 md:px-6">

                <div className="text-center mb-16">
                    <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        What's real today
                    </div>
                    <h2 className="text-4xl font-heading font-bold text-navy mb-4">
                        Products are built. The bottleneck is execution speed.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                        <CheckCircle className="w-8 h-8 text-emerald-500 mb-4" />
                        <h3 className="font-bold text-navy text-lg mb-2">Platform + products demonstrable</h3>
                        <p className="text-slate-600 text-sm">End-to-end demo available.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                        <Shield className="w-8 h-8 text-navy mb-4" />
                        <h3 className="font-bold text-navy text-lg mb-2">Designed for regulated adoption</h3>
                        <p className="text-slate-600 text-sm">Governance, audit trails, and controls.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                        <TrendingUp className="w-8 h-8 text-gold mb-4" />
                        <h3 className="font-bold text-navy text-lg mb-2">Deployable across industries</h3>
                        <p className="text-slate-600 text-sm">Delivered through implementation services.</p>
                    </div>
                </div>

                {/* Proof Panel / Dashboard Mock */}
                <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group">
                    {/* Header */}
                    <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="ml-4 text-[10px] text-slate-400 font-mono">AliphLiveDemo.exe</div>
                    </div>

                    {/* Placeholder for Generated Asset - falling back to simple CSS mockup */}
                    <div className="aspect-video bg-navy-deep relative flex items-center justify-center p-8">
                        <div className="text-center">
                            <p className="text-slate-500 text-sm mb-4">Interactive Control Plane Dashboard</p>
                            <Link to="/demo" className="px-6 py-3 bg-gold text-white font-bold rounded hover:bg-gold-light transition-colors">
                                Click to Book Live Demo
                            </Link>
                        </div>

                        {/* Decorative Overlay elements to simulate complexity */}
                        <div className="absolute top-10 left-10 w-48 h-32 bg-white/5 rounded border border-white/10"></div>
                        <div className="absolute bottom-10 right-10 w-64 h-48 bg-white/5 rounded border border-white/10"></div>
                        <div className="absolute top-12 right-12 w-32 h-8 bg-white/5 rounded border border-white/10"></div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/demo" className="inline-block px-10 py-4 bg-navy text-white text-lg font-bold rounded-lg hover:bg-navy-light shadow-lg hover:shadow-xl transition-all">
                        Book a Demo
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CredibilityProof;
