import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { 
  Headphones, 
  Calculator, 
  Palette, 
  Users, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp
} from "lucide-react";
const HERO_BG = "/lovable-uploads/1f0b53fd-07a5-48f4-85b0-77084a7d839b.png";
import teamImage from "@/assets/customer-support.jpg";
import solutionsImage from "@/assets/finance-team.jpg";

const Index = () => {
  const services = [
    {
      icon: Headphones,
      title: "Customer Care",
      description: "Professional customer support solutions tailored to enhance your customer experience and satisfaction."
    },
    {
      icon: Calculator,
      title: "Digital Workflow Solutions",
      description: "Smart automated workflow systems for digital approvals, task management, and team collaboration."
    },
    {
      icon: Palette,
      title: "Creative/Digital Services",
      description: "Innovative digital solutions including web design, marketing, and brand development services."
    }
  ];

  const features = [
    "24/7 Customer Support",
    "Experienced UK-Based Team",
    "Scalable Solutions",
    "Cost-Effective Services",
    "Industry Expertise",
    "Quality Assurance"
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "99.8%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CX Outsourcing Services | Saleswired"
        description="UK-based CX outsourcing: customer care, digital workflow automation, and creative/digital services to power growth."
        canonicalPath="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Saleswired",
          "url": typeof window !== "undefined" ? window.location.origin : "",
          "logo": (typeof window !== "undefined" ? window.location.origin : "") + "/lovable-uploads/4160bd84-d28a-4add-a6f3-342115bf900f.png",
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative md:min-h-[90vh] md:flex items-center justify-center overflow-hidden">
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_BG})`
          }}
        />
        <div className="hidden md:block absolute inset-0 bg-black/60" aria-hidden="true" />
        <img
          src={HERO_BG}
          alt="Saleswired customer experience outsourcing services hero"
          className="block md:hidden w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="relative z-10 container mx-auto px-4 pt-6 md:pt-0 text-center md:text-white text-foreground">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mobile-heading font-bold mb-6 leading-tight">
            Your Trusted <span className="text-primary">CX Outsourcing</span><br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Business Partner</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mobile-text mb-8 max-w-3xl mx-auto md:text-white/90 text-muted-foreground leading-relaxed">
            Elevate your business with our professional Customer Care, Digital Workflow Solutions, 
            and Creative/Digital Services. Based in the UK, trusted worldwide.
          </p>
          <div className="flex flex-row flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg" className="text-base px-5 py-3 md:text-lg md:px-8 md:py-4 bg-primary text-primary-foreground hover:bg-primary/90 md:bg-transparent md:text-white">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-5 py-3 md:text-lg md:px-8 md:py-4 border-foreground text-foreground hover:bg-accent hover:text-foreground md:bg-white/10 md:border-white md:text-white md:hover:bg-white md:hover:text-foreground">
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mobile-heading font-bold mb-4">Our Core Services</h2>
            <p className="text-lg mobile-text text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business solutions designed to streamline your operations and accelerate growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-strong transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg mobile-text text-muted-foreground max-w-2xl mx-auto">
              We deliver results through our proven approach and dedicated expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-Channel Strategy</h3>
              <p className="text-muted-foreground text-sm">Comprehensive approach across all customer touchpoints</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dedicated Account Manager</h3>
              <p className="text-muted-foreground text-sm">Personal support and strategic guidance for your success</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Weekly Performance Reports</h3>
              <p className="text-muted-foreground text-sm">Detailed insights and analytics to track your growth</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Human + Tech Approach</h3>
              <p className="text-muted-foreground text-sm">Perfect blend of human expertise and cutting-edge technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-4">Trusted by Growing Brands</h2>
            <p className="text-lg mobile-text text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of successful businesses who trust us with their growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center bg-white shadow-medium">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic">
                "Saleswired transformed our customer service. Their team is professional, 
                responsive, and truly understands our business needs."
              </blockquote>
              <cite className="font-semibold">Sarah Johnson, CEO TechStart</cite>
            </Card>
            
            <Card className="p-6 text-center bg-white shadow-medium">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic">
                "Outstanding digital workflow solutions. They helped streamline our 
                processes and improved our team efficiency significantly."
              </blockquote>
              <cite className="font-semibold">Michael Chen, Operations Director GrowthCorp</cite>
            </Card>
            
            <Card className="p-6 text-center bg-white shadow-medium">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic">
                "Their creative services exceeded our expectations. The team delivered 
                a complete brand transformation that boosted our market presence."
              </blockquote>
              <cite className="font-semibold">Emma Williams, Marketing Director</cite>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Qualified Leads Delivered</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">125+</div>
              <div className="text-muted-foreground">Campaigns Launched</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-4">Proven Track Record</h2>
            <p className="text-lg mobile-text text-primary-foreground/80">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={solutionsImage} 
                alt="Business solutions and digital transformation" 
                className="rounded-lg shadow-strong w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-6">
                Comprehensive <span className="text-primary">Business Solutions</span>
              </h2>
              <p className="text-lg mobile-text text-muted-foreground mb-6">
                From customer experience management to digital workflow automation and creative services, 
                we provide end-to-end solutions that transform your business operations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Scalable Growth</h4>
                    <p className="text-muted-foreground">Solutions that grow with your business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground">Rigorous quality controls and performance monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Expertise</h4>
                    <p className="text-muted-foreground">UK-based with international best practices</p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="cta" size="lg">
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mobile-heading font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mobile-text text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Saleswired for their outsourcing needs. 
            Let's discuss how we can help your business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
