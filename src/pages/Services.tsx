import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import secureDataImage from "@/assets/secure-data.jpg";
import { 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calculator, 
  TrendingUp, 
  PieChart,
  Palette,
  Monitor,
  Cog,
  CheckCircle,
  Award
} from "lucide-react";

const Services = () => {
  const customerCareServices = [
    { icon: Phone, title: "Voice Support", description: "Professional inbound and outbound call handling" },
    { icon: MessageCircle, title: "Chat Support", description: "Real-time customer assistance via live chat" },
    { icon: Mail, title: "Email Support", description: "Comprehensive email customer service management" },
    { icon: Headphones, title: "Technical Support", description: "Specialized technical assistance and troubleshooting" }
  ];

  const digitalWorkflowServices = [
    { icon: Calculator, title: "Digital Approvals", description: "Streamlined approval workflows for faster decision-making" },
    { icon: TrendingUp, title: "Task Management", description: "Automated task assignment and progress tracking" },
    { icon: PieChart, title: "Process Automation", description: "Smart automation to reduce manual work" },
    { icon: Award, title: "Remote Collaboration", description: "Tools and systems for effective remote teamwork" }
  ];

  const creativeServices = [
    { icon: Palette, title: "Graphic Design", description: "Brand identity, marketing materials, and visual content" },
    { icon: Monitor, title: "IT Consultation", description: "Technology strategy and digital transformation guidance" },
    { icon: Cog, title: "AutoCAD Services", description: "Technical drawings and engineering design support" },
    { icon: Award, title: "Specialized Design", description: "Jewelry, architectural, and custom design solutions" }
  ];

  const qualityFeatures = [
    "ISO 27001 Certified Security",
    "24/7 Quality Monitoring",
    "Real-time Performance Dashboards",
    "Continuous Training Programs",
    "SLA Compliance Guarantee",
    "Regular Quality Audits"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Outsourced Customer Care & Digital Workflow | Saleswired"
        description="Customer care, digital workflow automation, and creative/digital services tailored to grow your business."
        canonicalPath="/services"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Customer Care",
            "provider": { "@type": "Organization", "name": "Saleswired" },
            "areaServed": "GB"
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Workflow Solutions",
            "provider": { "@type": "Organization", "name": "Saleswired" },
            "areaServed": "GB"
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Creative & Digital Services",
            "provider": { "@type": "Organization", "name": "Saleswired" },
            "areaServed": "GB"
          }
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80)`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Professional <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Comprehensive business solutions designed to optimize your operations, 
            enhance customer experience, and drive sustainable growth.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Customer Care Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Care Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering exceptional customer experiences across all touchpoints
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {customerCareServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-strong transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Additional CX Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Back Office Support</h4>
                <p className="text-muted-foreground mb-4">Data entry, document processing, and administrative tasks</p>
                <h4 className="font-semibold mb-2">Telesales</h4>
                <p className="text-muted-foreground">Professional outbound sales and lead generation</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Moderation</h4>
                <p className="text-muted-foreground mb-4">Social media and content review services</p>
                <h4 className="font-semibold mb-2">Quality Assurance</h4>
                <p className="text-muted-foreground">Comprehensive QA and performance monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Workflow Solutions */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Workflow Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your operations through smart, automated workflow systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {digitalWorkflowServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-strong transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Digital Workflow Solutions</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We streamline your operations through smart, automated workflow systems. From digital approvals to task management, we help businesses increase efficiency and reduce delays. Ideal for teams managing multiple projects or remote collaboration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Automated Task Assignment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Digital Approval Workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Progress Tracking & Reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Remote Team Collaboration</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                alt="Digital workflow automation and team collaboration" 
                className="rounded-lg shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative & Digital */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Creative & Digital Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative design and technology solutions to elevate your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {creativeServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-strong transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80" 
                alt="Creative design and digital solutions" 
                className="rounded-lg shadow-strong w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-6">Digital Innovation</h3>
              <p className="text-lg text-muted-foreground mb-6">
                From concept to execution, our creative team delivers compelling visual solutions 
                and technical expertise that resonate with your audience and drive results.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Brand Development</h4>
                  <p className="text-muted-foreground text-sm">Logo design, brand guidelines, and visual identity</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Web Design & Development</h4>
                  <p className="text-muted-foreground text-sm">Responsive websites and digital platforms</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Technical Documentation</h4>
                  <p className="text-muted-foreground text-sm">CAD drawings, technical illustrations, and manuals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Ensure Quality</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rigorous quality control processes that guarantee exceptional service delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-soft">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your business operations? Contact us today to discuss 
            how our services can drive your success.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;