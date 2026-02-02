import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { WarrantyBadge } from "./WarrantyBadge";
import { PHONE_NUMBER, PHONE_HREF } from "./CTAButton";

const footerLinks = {
  services: [
    { name: "Shower Repairs", href: "/services/shower-repairs" },
    { name: "Balcony Repairs", href: "/services/balcony-repairs" },
    { name: "Strata Services", href: "/strata" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  suburbs: [
    { name: "Parramatta", href: "/services/parramatta" },
    { name: "Bondi", href: "/services/bondi" },
    { name: "Chatswood", href: "/services/chatswood" },
    { name: "Manly", href: "/services/manly" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Droplets className="w-6 h-6 text-secondary" />
              </div>
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
              Sydney's trusted specialists in shower and balcony leak repairs. 
              Premium epoxy grout solutions with a 10-year warranty.
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
                    className="text-muted-foreground hover:text-secondary transition-colors"
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
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {footerLinks.suburbs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors"
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
              © {new Date().getFullYear()} Sydney Leak Repairs Pro. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="p-2 rounded-lg text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
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
