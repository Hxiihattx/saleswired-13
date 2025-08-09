import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms & Conditions | Saleswired"
        description="Review Saleswired's terms and conditions covering services, payment, and legal policies."
        canonicalPath="/terms"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms & Conditions",
          "url": typeof window !== "undefined" ? window.location.origin + "/terms" : ""
        }}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Terms & Conditions</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Terms and conditions governing our business relationship and service delivery.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Saleswired's services, you agree to be bound by these Terms & Conditions. 
                  These terms apply to all users of our customer care, digital workflow solutions, and creative/digital services. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
                <p className="text-muted-foreground mb-4">
                  Saleswired provides professional outsourcing services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Customer Care and Support Services</li>
                  <li>Digital Workflow Solutions</li>
                  <li>Creative and Digital Services</li>
                  <li>Business Process Outsourcing</li>
                </ul>
                <p className="text-muted-foreground">
                  All services are delivered in accordance with agreed service level agreements and project specifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As our client, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information required for service delivery</li>
                  <li>Respond promptly to requests for clarification or additional information</li>
                  <li>Make timely payments according to agreed terms</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain confidentiality of proprietary information shared between parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Invoices are typically issued monthly or as per agreed schedule</li>
                  <li>Payment is due within 30 days of invoice date unless otherwise agreed</li>
                  <li>Late payment may result in service suspension and additional charges</li>
                  <li>All fees are quoted exclusive of VAT and applicable taxes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All intellectual property rights in work products created specifically for clients 
                  shall be transferred to the client upon full payment. Saleswired retains rights to 
                  general methodologies, processes, and know-how developed through service delivery. 
                  Both parties agree to respect each other's pre-existing intellectual property rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground">
                  Both parties acknowledge that confidential information may be disclosed during the 
                  course of our business relationship. We commit to maintaining strict confidentiality 
                  of all client information and expect the same regarding our proprietary processes 
                  and methodologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Saleswired's liability is limited to the value of services provided under the specific 
                  engagement. We exclude liability for indirect, consequential, or special damages. 
                  This limitation does not apply to death, personal injury, or fraud.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate services with 30 days written notice. Immediate termination 
                  is permitted for material breach, insolvency, or failure to pay outstanding amounts. 
                  Upon termination, all outstanding amounts become immediately due.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms are governed by English law and subject to the exclusive jurisdiction 
                  of English courts. Any disputes will be resolved through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Good faith negotiation</li>
                  <li>Mediation if negotiation fails</li>
                  <li>Legal proceedings in English courts as a last resort</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these terms, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="font-semibold mb-2">Saleswired Legal Department</p>
                  <p className="text-muted-foreground">Email: info@saleswired.com</p>
                  <p className="text-muted-foreground">Phone: +44 7491 597 650 or +44 7743 468 656</p>
                  <p className="text-muted-foreground">Address: Camberley GU15 2HU, United Kingdom</p>
                </div>
              </section>

              <section>
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                  <strong>Last Updated:</strong> January 2025<br />
                  These terms may be updated periodically. Continued use of our services constitutes 
                  acceptance of any modifications.
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

export default Terms;