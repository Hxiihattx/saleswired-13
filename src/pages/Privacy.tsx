import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Saleswired"
        description="Read Saleswired's privacy policy covering data collection, usage, and your rights."
        canonicalPath="/privacy"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy",
          "url": typeof window !== "undefined" ? window.location.origin + "/privacy" : ""
        }}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Privacy Policy</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Our commitment to protecting your privacy and personal information.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  At Saleswired, we collect information that you provide directly to us, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Business information (company name, industry, requirements)</li>
                  <li>Communication preferences and service inquiries</li>
                  <li>Technical information when you visit our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and improve our customer care, digital workflow, and creative services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you service updates, newsletters, and marketing communications</li>
                  <li>Analyze usage patterns to enhance our website and services</li>
                  <li>Comply with legal obligations and protect our business interests</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Data Protection and Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement robust security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Encrypted data transmission and secure storage systems</li>
                  <li>Regular security audits and compliance with UK data protection laws</li>
                  <li>Access controls limiting data access to authorized personnel only</li>
                  <li>Staff training on data protection and privacy best practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cookie Usage</h2>
                <p className="text-muted-foreground mb-4">
                  Our website uses cookies to enhance your browsing experience. We use:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand website usage</li>
                  <li>Marketing cookies to provide relevant advertisements</li>
                </ul>
                <p className="text-muted-foreground">
                  You can manage your cookie preferences through your browser settings. For more details, 
                  please see our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Under UK and EU data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing or request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For any privacy-related questions or to exercise your rights, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="font-semibold mb-2">Data Protection Officer</p>
                  <p className="text-muted-foreground">Email: info@saleswired.com</p>
                  <p className="text-muted-foreground">Phone: +44 7491 597 650 or +44 7743 468 656</p>
                  <p className="text-muted-foreground">Address: Camberley GU15 2HU, United Kingdom</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Policy Updates</h2>
                <p className="text-muted-foreground">
                  This privacy policy was last updated on January 2025. We may update this policy 
                  periodically to reflect changes in our practices or legal requirements. 
                  We will notify you of any significant changes via email or website notice.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;