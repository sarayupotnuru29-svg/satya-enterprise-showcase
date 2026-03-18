import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import { products } from "@/data/products";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productLine = form.product ? `\nProduct Interest: ${form.product}` : "";
    const mailto = `mailto:satyaenterprises1@outlook.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message + productLine)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.location.href = mailto;
  };

  return (
    <div>
      <PageHero title="Contact Us" subtitle="Reach out to us for bulk orders and export inquiries." bgImage={contactBg} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Phone", value: "9986824234 / 7026300930", href: "tel:+919986824234" },
                  { icon: Mail, label: "Email", value: "satyaenterprises1@outlook.com", href: "mailto:satyaenterprises1@outlook.com" },
                  { icon: MapPin, label: "Address", value: "Bellary Kampil Main Road, Hosa Daroji, Sandur (TQ), Bellary (DIST) – 583129, Karnataka, India" },
                  { icon: Instagram, label: "Instagram", value: "sree_sai_enterprises_pvt.ltd", href: "https://instagram.com/sree_sai_enterprises_pvt.ltd" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-foreground text-sm">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Business Hours</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 shadow-card flex items-center gap-3">
                  <Clock className="text-secondary shrink-0" size={24} />
                  <div>
                    <div className="font-body font-semibold text-foreground text-sm">Mon – Sat</div>
                    <div className="text-muted-foreground text-sm">9:00 AM – 7:00 PM</div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-5 shadow-card flex items-center gap-3">
                  <Clock className="text-secondary shrink-0" size={24} />
                  <div>
                    <div className="font-body font-semibold text-foreground text-sm">Sunday</div>
                    <div className="text-muted-foreground text-sm">10:00 AM – 5:00 PM</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <div className="bg-card rounded-2xl p-8 shadow-elevated">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h3>
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
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Select Product</label>
                    <select
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <option value="">-- Choose a product (optional) --</option>
                      {products.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
