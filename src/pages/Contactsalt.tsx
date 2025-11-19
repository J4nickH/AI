import { Mail, Phone, MapPin, Euro, TrendingUp, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Contact & Funding</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us to learn more about Hostelligence or explore partnership opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We'd love to hear from you. Whether you're interested in implementing Hostelligence 
                  at your establishment or exploring investment opportunities, reach out to us.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:hello@hostelligence.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@hostelligence.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+49301234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +49 30 1234 567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Berlin, Germany
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Website Coming Soon</h3>
                <p className="text-muted-foreground text-sm">
                  Our official website is currently under development. For now, please use the 
                  contact information above to reach us directly.
                </p>
              </div>
            </div>

            {/* Funding Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Investment Opportunity</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join us in revolutionizing the F&B hospitality industry. We're capturing a 
                  rare market opportunity with significant growth potential.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Market Size</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">TAM (Global)</span>
                      <span className="font-semibold text-foreground">$7-9B</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">SAM (Addressable)</span>
                      <span className="font-semibold text-foreground">$1.5-2B</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">SOM (Target)</span>
                      <span className="font-semibold text-foreground">$8-15M</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Growth Projection</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    The European restaurant management software market is expected to grow 
                    <span className="font-semibold text-foreground"> 2.76x</span> by 2030, 
                    from $1.49B to $4.12B.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    German market specifically: <span className="font-semibold text-foreground">3.17x growth</span> from 
                    $271M to $862M
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Target Market</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Initial Target</div>
                      <div className="font-semibold text-foreground">1,500-2,000 F&B outlets</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Expected Market Share</div>
                      <div className="font-semibold text-foreground">12-16%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Focus</div>
                      <div className="font-semibold text-foreground">Complex F&B systems</div>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Request Investment Deck
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Let's Master the Rush Together
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're a hotel looking to optimize operations or an investor seeking 
              opportunities in the hospitality tech space, we'd love to connect.
            </p>
            <Button variant="secondary" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-90">
            © 2025 Hostelligence. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
