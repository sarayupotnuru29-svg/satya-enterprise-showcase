import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone, MapPin, Instagram, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Satya Enterprises" className="h-14 w-14 object-contain" />
              <span className="font-display text-lg font-bold">Satya Enterprises</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trusted merchant exporter and supplier of high-quality agricultural and natural products from India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[["Home", "/"], ["About Us", "/about"], ["Products", "/products"], ["Contact", "/contact"], ["Enquiry", "/enquiry"]].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["Maize", "Rice", "Wheat", "Jowar", "Ragi", "Red Chilli", "Pulses & Grains"].map((p) => (
                <li key={p}>
                  <Link to={`/enquiry?product=${encodeURIComponent(p)}`} className="hover:text-secondary transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>9986824234 / 7026300930</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:satyaenterprises1@outlook.com" className="hover:text-secondary transition-colors">
                  satyaenterprises1@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Bellary Kampil Main Road, Hosa Daroji, Sandur (TQ), Bellary (DIST) – 583129</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="mt-0.5 shrink-0" />
                <a href="https://instagram.com/sree_sai_enterprises_pvt.ltd" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  sree_sai_enterprises_pvt.ltd
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Satya Enterprises. All rights reserved.
          </p>

          {/* Attribution */}
          <div className="flex justify-center items-center gap-1 text-sm text-primary-foreground/80">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;