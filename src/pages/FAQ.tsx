import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer three main service categories: Customer Care (voice, chat, email support, technical support, back office, telesales, content moderation), Digital Workflow Solutions (digital approvals, task management, process automation, remote collaboration), and Creative/Digital Services (graphic design, IT consultation, AutoCAD, jewelry & architectural design)."
    },
    {
      question: "How do I get started with Saleswired?",
      answer: "Getting started is simple! Contact us through our website, phone, or email to schedule a free consultation. We'll discuss your specific needs, provide a customized proposal, and work with you to develop a solution that fits your requirements and budget. Our onboarding process typically takes 1-2 weeks depending on the complexity of services required."
    },
    {
      question: "Where are your teams located?",
      answer: "We are headquartered in Camberley, United Kingdom (GU15 2HU), with our primary operations based in the UK. This allows us to serve clients across different time zones while maintaining high-quality standards and GDPR compliance. Our UK-based location ensures cultural alignment and language proficiency for international clients."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 customer support services. Our round-the-clock availability ensures that your customers receive assistance whenever they need it, regardless of time zones. This includes voice support, live chat, email assistance, and technical support services, all delivered by our trained professionals."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us through multiple channels: Phone: +44 7491 597 650 or +44 7743 468 656, Email: info@saleswired.com, or visit our Contact Us page to fill out our contact form. We typically respond to inquiries within 2-4 hours during business hours."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including e-commerce, healthcare, financial services, technology, telecommunications, retail, and professional services. Our flexible approach allows us to adapt our services to meet the specific requirements of different sectors."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Data security is our top priority. We are ISO 27001 certified and fully GDPR compliant. We implement enterprise-grade security protocols, regular security audits, encrypted data transmission, and strict access controls. All our team members undergo comprehensive security training and sign confidentiality agreements."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including per-hour rates, per-transaction pricing, monthly retainers, and project-based fees. Our pricing is competitive and transparent, with no hidden costs. We provide detailed quotes based on your specific requirements during our initial consultation."
    },
    {
      question: "How do you measure and report performance?",
      answer: "We provide real-time performance dashboards, weekly reports, and monthly comprehensive analytics. Key metrics include response times, resolution rates, customer satisfaction scores, SLA compliance, and quality scores. Regular review meetings ensure continuous improvement and alignment with your business objectives."
    },
    {
      question: "Can you scale services up or down based on our needs?",
      answer: "Absolutely! Scalability is one of our core strengths. We can quickly scale our services up during peak periods or scale down during slower periods. Our flexible resource allocation ensures you only pay for what you need while maintaining service quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Saleswired FAQs | Services, Pricing, Support"
        description="Answers about CX outsourcing, pricing, security, availability, and more."
        canonicalPath="/faq"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80)`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Find answers to common questions about our services, processes, and how we can help your business grow.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Still Need Help?</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default FAQ;