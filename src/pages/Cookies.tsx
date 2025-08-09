import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cookie Policy | Saleswired"
        description="Learn how Saleswired uses cookies to improve your browsing experience."
        canonicalPath="/cookies"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Cookie Policy",
          "url": typeof window !== "undefined" ? window.location.origin + "/cookies" : ""
        }}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Cookie Policy</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Understanding how we use cookies to enhance your browsing experience.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences 
                  and analyzing how you use our site. Cookies do not contain personally identifiable information 
                  and cannot harm your device.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Why We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Saleswired uses cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Ensure our website functions properly and securely</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide relevant content and advertisements</li>
                  <li>Enable social media features and integrations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable basic 
                      features like page navigation, access to secure areas, and form submissions. 
                      The website cannot function properly without these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground">
                      We use analytics cookies to understand how visitors interact with our website. 
                      This helps us analyze traffic patterns, identify popular content, and improve 
                      our site's performance and user experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies track your browsing habits to provide you with relevant advertisements 
                      and marketing content. They help us measure the effectiveness of our marketing 
                      campaigns and show you content that matches your interests.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Third-Party Cookies</h3>
                    <p className="text-muted-foreground">
                      Some cookies are set by third-party services that appear on our pages, such as 
                      social media widgets, embedded videos, or analytics tools. These cookies are 
                      controlled by the respective third parties.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cookie Duration</h2>
                <p className="text-muted-foreground mb-4">
                  We use both session and persistent cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Managing Your Cookie Preferences</h2>
                <p className="text-muted-foreground mb-4">
                  You have several options for managing cookies:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                    <p className="text-muted-foreground">
                      Most browsers allow you to control cookies through their settings. You can typically:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>View and delete existing cookies</li>
                      <li>Block cookies from specific sites</li>
                      <li>Block all third-party cookies</li>
                      <li>Clear all cookies when you close the browser</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                    <p className="text-muted-foreground">
                      When you first visit our website, you'll see a cookie consent banner. You can choose to 
                      accept all cookies, reject non-essential cookies, or customize your preferences.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Impact of Disabling Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  If you choose to disable cookies, please note that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Some website features may not function properly</li>
                  <li>Your preferences may not be saved</li>
                  <li>You may need to re-enter information frequently</li>
                  <li>Personalized content and recommendations may not be available</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in technology, 
                  legislation, or our business practices. We will notify you of any significant changes 
                  by posting the updated policy on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="font-semibold mb-2">Saleswired Data Protection Team</p>
                  <p className="text-muted-foreground">Email: info@saleswired.com</p>
                  <p className="text-muted-foreground">Phone: +44 7491 597 650 or +44 7743 468 656</p>
                  <p className="text-muted-foreground">Address: Camberley GU15 2HU, United Kingdom</p>
                </div>
              </section>

              <section>
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                  <strong>Last Updated:</strong> January 2025<br />
                  This Cookie Policy was last updated on the date shown above and may be updated periodically.
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

export default Cookies;