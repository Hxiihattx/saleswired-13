import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from "lucide-react";
// import saleswiredLogo from "@/assets/saleswired-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ];

  const servicesLinks = [
    { name: "Customer Care", path: "/services#customer-care" },
    { name: "Digital Workflow Solutions", path: "/services#digital-workflow" },
    { name: "Creative & Digital", path: "/services#creative-digital" },
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-muted-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/4160bd84-d28a-4add-a6f3-342115bf900f.png" 
                alt="Saleswired logo – Powering Growth (white footer version)" 
                className="site-logo filter invert brightness-0"
                loading="lazy"
              />
            </div>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Your trusted UK-based outsourcing partner for Customer Care, Digital Workflow Solutions, and Creative/Digital Services.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Follow Saleswired on Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Follow Saleswired on Twitter/X">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Subscribe to Saleswired on YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div className="text-sm text-background/80">
                  <div>+44 7491 597 650</div>
                  <div>+44 7743 468 656</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@saleswired.com"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  info@saleswired.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div className="text-sm text-background/80">
                  Camberley GU15 2HU<br />
                  United Kingdom
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Legal links - right on desktop, above on mobile */}
            <ul className="order-1 flex flex-wrap justify-center gap-4 text-background/70 text-sm lg:order-2 lg:justify-end">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Copyright and credit */}
            <p className="order-2 text-center text-background/60 text-sm lg:order-1 lg:text-left">
              © {new Date().getFullYear()} Saleswired. All rights reserved. Your trusted CX outsourcing partner.{" "}
              Designed with love by{" "}
              <a
                href="https://hxii.site"
                target="_blank"
                rel="noopener"
                className="underline hover:text-primary"
                aria-label="Hxii.site"
              >
                Hxii.site
              </a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;