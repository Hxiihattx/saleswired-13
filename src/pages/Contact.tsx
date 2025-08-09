import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      details: ["+44 7491 597 650", "+44 7743 468 656"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your enquiries",
      details: ["info@saleswired.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our UK headquarters",
      details: ["Camberley GU15 2HU, United Kingdom"],
      action: "Get Directions"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "9am - 5pm" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" }
  ];

  const quickLinks = [
    { title: "Service Overview", description: "Learn about our comprehensive business solutions", link: "/services" },
    { title: "About Our Company", description: "Discover our mission and expertise", link: "/about" },
    { title: "Frequently Asked Questions", description: "Find answers to common questions", link: "/faq" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Saleswired | Book a CX Consultation"
        description="Contact our UK team for customer care and digital workflow solutions."
        canonicalPath="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Saleswired",
          "url": typeof window !== "undefined" ? window.location.origin + "/contact" : "",
          "publisher": { "@type": "Organization", "name": "Saleswired" },
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+44 7491 597 650",
            "contactType": "customer support",
            "areaServed": "GB",
            "availableLanguage": ["English"]
          }]
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.45)), url(/lovable-uploads/36dc0429-a07c-4c3c-958b-2a23877946cc.png)`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Ready to transform your business operations? Get in touch with our team 
            to discuss how we can help you achieve your goals.
          </p>
          <Button asChild variant="cta" size="lg">
            <a href="tel:+447491597650">Call Now: +44 7491 597 650</a>
          </Button>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions, need help with a service, or want to learn more — we're here for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-strong transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <method.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    {method.details.map((detail, idx) => (
                      <div key={idx} className="font-medium text-foreground">{detail}</div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Use the form below and we'll get back to you soon.
              </p>
              
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company Ltd" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select id="service" className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select a service</option>
                      <option value="customer-care">Customer Care</option>
                      <option value="digital-workflow">Digital Workflow Solutions</option>
                      <option value="creative-digital">Creative/Digital Services</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              {/* Business Hours */}
              <Card className="p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((hours, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{hours.day}</span>
                      <span className="text-muted-foreground">{hours.time}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Location Image */}
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                  alt="Professional office building" 
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-2" />
                      <span>Camberley GU15 2HU, United Kingdom</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Conveniently located in Camberley, easily accessible from across the UK.
                    </p>
                  </div>
              </Card>

              {/* Contact Summary */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Contact Summary</h3>
                </div>
                <div className="space-y-3">
                  <div><strong>Email:</strong> info@saleswired.com</div>
                  <div><strong>Phone:</strong> +44 7491 597 650 or +44 7743 468 656</div>
                  <div><strong>Office Hours:</strong> Monday to Friday, 9am – 5pm</div>
                  <div><strong>Address:</strong> Camberley GU15 2HU, United Kingdom</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Located in Camberley, United Kingdom
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-strong">
            <iframe 
              src="https://www.google.com/maps?q=Camberley%20GU15%202HU&z=13&output=embed"
              width="100%" 
              height="400" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saleswired Office Location - Camberley, UK"
            />
          </div>
        </div>
      </section>

      {/* FAQ Shortcut */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Links</h2>
            <p className="text-lg text-muted-foreground">
              Find the information you need quickly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Card key={index} className="p-6 hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{link.title}</h3>
                  <p className="text-muted-foreground mb-6">{link.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={link.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our team to discover how Saleswired can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90">
              <a href="tel:+447491597650">Book Free Consultation</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;