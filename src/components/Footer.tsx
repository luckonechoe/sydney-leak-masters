import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { WarrantyBadge } from "./WarrantyBadge";
import { PHONE_NUMBER, PHONE_HREF } from "./CTAButton";

const footerLinks = {
  services: [
    { name: "Leaking Shower Repairs", href: "/services/shower-repairs" },
    { name: "Leaking Balcony Repairs", href: "/services/balcony-repairs" },
    { name: "Strata Waterproofing", href: "/strata" },
    { name: "Epoxy Regrouting", href: "/blog/epoxy-regrouting-guide" },
    { name: "Tile Sealing Services", href: "/blog/tile-sealing-services-sydney" },
  ],
  resources: [
    { name: "Complete Leak Repair Guide", href: "/guides/complete-guide-leak-repairs-sydney" },
    { name: "Blog & Expert Tips", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Epoxy vs Cement Grout", href: "/blog/epoxy-grout-vs-cement-grout" },
    { name: "Waterproofing Standards", href: "/blog/bathroom-waterproofing-standards" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/suburbs" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog & Expert Tips", href: "/blog" },
    { name: "Contact & Free Quote", href: "/contact" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
  suburbs: [
    { name: "Parramatta", href: "/leaking-shower-repairs/parramatta" },
    { name: "Bondi", href: "/leaking-shower-repairs/bondi" },
    { name: "Chatswood", href: "/leaking-shower-repairs/chatswood" },
    { name: "Manly", href: "/leaking-shower-repairs/manly" },
    { name: "Blacktown", href: "/leaking-shower-repairs/blacktown" },
    { name: "Mosman", href: "/leaking-shower-repairs/mosman" },
    { name: "View All Suburbs", href: "/suburbs" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Sydney Leak Repairs Pro Logo" className="w-10 h-10 object-contain" />
              <div>
                <span className="font-heading font-bold text-lg text-foreground">
                  Sydney Leak Repairs
                </span>
                <span className="font-heading font-bold text-lg text-accent ml-1">
                  Pro
                </span>
              </div>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Sydney's trusted specialists in <Link to="/services/shower-repairs" className="text-secondary hover:underline">shower leak repairs</Link> and{" "}
              <Link to="/services/balcony-repairs" className="text-secondary hover:underline">balcony waterproofing</Link>.{" "}
              Premium epoxy grout solutions with a 10-year warranty. Servicing{" "}
              <Link to="/suburbs" className="text-secondary hover:underline">50+ Sydney suburbs</Link>.
            </p>
            
            <WarrantyBadge size="sm" animated={false} className="mb-6" />
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={PHONE_HREF}
                className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary" />
                {PHONE_NUMBER}
              </a>
              <a 
                href="mailto:info@sydneyleakrepairspro.com.au"
                className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4 text-secondary" />
                info@sydneyleakrepairspro.com.au
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                Servicing All Sydney Suburbs
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Service Areas - single list */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-foreground mb-4">Popular Service Areas</h3>
            <ul className="space-y-2">
              {footerLinks.suburbs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sydney Leak Repairs Pro. All rights reserved. ABN: XX XXX XXX XXX. Licensed waterproofing contractor.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Follow Sydney Leak Repairs Pro on ${social.name}`}
                    className="p-2 rounded-lg text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}