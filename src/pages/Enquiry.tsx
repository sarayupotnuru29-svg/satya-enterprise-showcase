import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import { products } from "@/data/products";
import contactBg from "@/assets/contact-bg.jpg";

const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: preselected,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Satya Enterprises,%0A%0AI am interested in *${form.product}*.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919986824234?text=${text}`, "_blank");
  };

  return (
    <div>
      <PageHero title="Product Enquiry" subtitle="Send us your enquiry and we'll get back to you via WhatsApp." bgImage={contactBg} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <AnimatedSection>
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <MessageSquare className="text-green-600" size={24} />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Enquiry Form</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Select Product</label>
                  <select
                    required
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <option value="">-- Choose a product --</option>
                    {products.map((p) => (
                      <option key={p.name} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    placeholder="Your enquiry details..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3.5 rounded-lg font-body font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
