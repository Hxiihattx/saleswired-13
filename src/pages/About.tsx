import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Globe, Users, Award, Target, Shield, TrendingUp } from "lucide-react";
import teamImage from "@/assets/design-team.jpg";
import globalImage from "@/assets/remote-support.jpg";

const About = () => {
  const visionMission = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To be the leading global CX outsourcing partner, empowering businesses to deliver exceptional customer experiences while optimizing operational efficiency."
    },
    {
      icon: Award,
      title: "Our Mission", 
      description: "We provide comprehensive business solutions including customer care, digital workflow solutions, and creative services, helping our clients focus on their core business growth."
    }
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      experience: "15+ years in CX transformation"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      experience: "12+ years in outsourcing excellence"
    },
    {
      name: "Emma Williams",
      role: "Director of Client Success",
      experience: "10+ years in customer relationship management"
    }
  ];

  const trustFactors = [
    {
      icon: Shield,
      title: "Data Security",
      description: "ISO 27001 certified with enterprise-grade security protocols"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "UK-based with international best practices and 24/7 coverage"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "99.8% client satisfaction rate with measurable ROI improvements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Saleswired | UK CX Outsourcing Partner"
        description="Learn about Saleswired—UK-based outsourcing partner for customer care, digital workflow, and creative/digital services."
        canonicalPath="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Saleswired",
          "url": typeof window !== "undefined" ? window.location.origin + "/about" : ""
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${globalImage})`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl mobile-heading font-bold mb-6">
            About <span className="text-primary">Saleswired</span>
          </h1>
          <p className="text-lg md:text-xl mobile-text mb-8 max-w-3xl mx-auto text-white/90">
            Your trusted UK-based outsourcing partner with a global perspective, 
            delivering excellence in customer experience and business solutions since 2019.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-6">Who We Are</h2>
              <p className="text-lg mobile-text text-muted-foreground mb-6">
                Saleswired is a dynamic UK-based outsourcing company specializing in Customer Experience (CX), 
                Digital Workflow Solutions, and Creative/Digital Services. Founded with the vision to transform how 
                businesses manage their operations, we've grown to become a trusted partner for companies worldwide.
              </p>
              <p className="text-lg mobile-text text-muted-foreground mb-8">
                Our team of experienced professionals combines local expertise with global best practices, 
                ensuring that every client receives personalized attention and world-class service delivery.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/62e29fe0-8f1a-4956-8bea-410d4261e1e6.png" 
                alt="Team collaboration at Saleswired" 
                className="rounded-lg shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-4">Our Vision & Mission</h2>
            <p className="text-lg mobile-text text-muted-foreground max-w-2xl mx-auto">
              Guided by clear values and ambitious goals that drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/99c8065d-0386-4367-be4b-9d0afb279751.png" 
                alt="Global business presence" 
                className="rounded-lg shadow-strong w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-6">Our Global Reach</h2>
              <p className="text-lg mobile-text text-muted-foreground mb-6">
                While proudly based in the United Kingdom, our reach extends far beyond borders. 
                We serve clients across Europe, North America, and the Asia-Pacific region, 
                providing consistent, high-quality services regardless of location or time zone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>UK Headquarters in Camberley</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>International client portfolio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>GDPR compliant operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg mobile-text text-muted-foreground">
              Experienced professionals leading our mission to deliver excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-4">Why Clients Trust Us</h2>
            <p className="text-lg mobile-text text-muted-foreground max-w-2xl mx-auto">
              Built on a foundation of trust, security, and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-strong transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <factor.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{factor.title}</h3>
                  <p className="text-muted-foreground">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;