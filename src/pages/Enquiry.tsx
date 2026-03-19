import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageSquare, Package, MapPin } from "lucide-react";
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
    address: "",
    product: preselected,
    message: "",
  });

  // Find the selected product image for the side preview
  const selectedProductData = products.find((p) => p.name === form.product);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constructing the WhatsApp message with the new address field
    const messageBody = `Hello Satya Enterprises,\n\nI am interested in *${form.product}*.\n\n*Customer Details:*\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\n\n*Message:*\n${form.message}`;
    
    const encodedText = encodeURIComponent(messageBody);
    window.open(`https://wa.me/919986824234?text=${encodedText}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero 
        title="Product Enquiry" 
        subtitle="Fill out the details below and we will connect with you on WhatsApp." 
        bgImage={contactBg} 
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Side: Dynamic Image Preview */}
              <div className="hidden lg:flex flex-col justify-center rounded-2xl overflow-hidden bg-muted/30 relative border border-border shadow-sm">
                {selectedProductData?.image ? (
                  <div className="h-full w-full">
                    <img 
                      src={selectedProductData.image} 
                      alt={form.product} 
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <p className="text-primary-foreground/80 font-body text-xs uppercase tracking-[0.2em] mb-1">Inquiry for</p>
                      <h3 className="text-white text-3xl font-display font-bold">{form.product}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Package className="text-primary" size={40} />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">Select a Product</h3>
                    <p className="text-muted-foreground mt-2 max-w-xs font-body text-sm">
                      Choose a product from the dropdown to see its preview here.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Side: Form Section */}
              <div className="bg-card rounded-2xl p-6 md:p-10 shadow-elevated border border-border">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageSquare className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">Enquiry Form</h2>
                    <p className="text-muted-foreground text-sm font-body">Quick response via WhatsApp</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block font-body text-sm font-medium">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block font-body text-sm font-medium">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 font-body text-sm font-medium">
                      <MapPin size={14} className="text-muted-foreground" />
                      Shipping/Contact Address
                    </label>
                    <input
                      type="text"
                      required
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Street name, City, Pincode"
                    />
                  </div>

                  {/* Product Selection */}
                  <div className="space-y-1.5">
                    <label className="block font-body text-sm font-medium">Select Product</label>
                    <div className="relative">
                      <select
                        required
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">-- Choose a product --</option>
                        {products.map((p) => (
                          <option key={p.name} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        <Package size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block font-body text-sm font-medium">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-all"
                      placeholder="Please tell us more about your requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-body font-semibold hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 mt-2"
                  >
                    <MessageSquare size={20} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;