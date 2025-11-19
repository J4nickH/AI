import { Mail, Phone, MapPin, Euro, TrendingUp, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
const TARGET_FUNDING = 750000; // €750k
const CURRENT_FUNDING = 0; // Aktueller Betrag (z.B. €100k)
const progressPercent = Math.min(100, (CURRENT_FUNDING / TARGET_FUNDING) * 100);

const handleSendMessage = () => {
  console.log("Nachricht senden wurde geklickt. Dies ist eine Platzhalter-Aktion.");
  // Hinweis: 'alert()' wurde entfernt, da es in der Ausführungsumgebung nicht angezeigt wird.
  console.log("Vielen Dank für Ihr Interesse! Dies ist nur eine Demo-Aktion.");
};
// Helper function to format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
    }).format(amount);
};
const Contact = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Contact & Funding</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us to learn about Hostelligence or explore partnership opportunities.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* NEUE SECTION 1: FUNDING GOAL (EINZELKARTE MIT PROGRESS BAR) */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Seed Investment Round</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Join us in revolutionizing the F&B hospitality industry.
                </p>
              </div>

              {/* Funding Goal Card mit Progress Bar */}
              <div className="max-w-2xl mx-auto p-8 bg-card rounded-xl border border-border shadow-2xl transition-all hover:scale-[1.01]">
                  
                  <div className="flex items-center gap-4 mb-6">
                    <Euro className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                        <h3 className="text-2xl font-bold text-foreground">Funding Goal (Seed Round)</h3>
                        <p className="text-sm text-muted-foreground">To achieve market readiness and acquire the first paying customers.</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 border-t border-border pt-4">
                      <div className="flex justify-between items-end">
                          <span className="text-4xl font-extrabold text-primary">
                              {formatCurrency(CURRENT_FUNDING)}
                          </span>
                          <span className="text-xl font-medium text-foreground">
                              / {formatCurrency(TARGET_FUNDING)}
                          </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                              className="bg-primary h-3 rounded-full transition-all duration-500" 
                              style={{ width: `${progressPercent}%` }}
                              title={`${progressPercent.toFixed(1)}% erreicht`}
                          ></div>
                      </div>
                      <p className="text-xs text-right text-muted-foreground">{progressPercent.toFixed(1)}% erreicht</p>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-lg font-bold text-foreground">Equity Offered: 5% Shares for €100k</p>
                  </div>
              </div>
            </div>
                
            {/* NEUE SECTION 2: GET IN TOUCH & FORMULAR */}
            <div className="max-w-4xl mx-auto space-y-12 pt-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  We look forward to hearing from you. Please use the form or contact us directly.
                </p>
              </div>

              {/* Kontaktdaten (3-Spalten-Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. E-Mail */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <a href="mailto:hostelligence@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      hostelligence@gmail.com
                    </a>
                  </div>
                </div>

                {/* 2. Telefon (Hinzugefügt) */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+4367761649330" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      +43 677 61649330
                    </a>
                  </div>
                </div>

                {/* 3. Standort */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Innsbruck, Austria
                    </p>
                  </div>
                </div>
              </div>

              {/* Kontaktformular */}
              <div className="bg-card rounded-xl p-8 border border-border shadow-2xl space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-3">Send Us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="w-full p-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Your Name" />
                  <input className="w-full p-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Your Email" />
                </div>
                <input className="w-full p-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Subject of Inquiry" />
                <textarea className="w-full p-3 border border-border rounded-lg bg-input text-foreground h-32 focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Your Message..." />
                
                {/* Interaktiver Button */}
                <Button className="w-full transition-transform transform hover:scale-[1.01]" onClick={handleSendMessage}>
                  Send Message
                </Button>
                
              </div>
            </div>


            {/* NEUE SECTION 3: ÜBRIGE FINANZDATEN (MARKET, GROWTH, TARGET) */}
            <div className="space-y-12 pt-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Financial & Market Data</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Important metrics on market opportunity and growth projections.
                </p>
              </div>

              {/* Funding-Karten (3-Spalten-Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. MARKET SIZE */}
                <div className="p-6 bg-card rounded-xl border border-border shadow-md">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Euro className="h-8 w-8" />
                    <h3 className="text-xl font-semibold text-foreground">Market Size</h3>
                  </div>
                  <div className="space-y-3 border-t border-border pt-4">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-muted-foreground">TAM (Global F&B)</span>
                      <span className="font-semibold text-foreground">€8B+</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-muted-foreground">SAM (outlets with complex F&B systems)</span>
                      <span className="font-semibold text-foreground">€6B</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-muted-foreground">SOM (DACH Region)</span>
                      <span className="font-semibold text-foreground">€12M</span>
                    </div>
                  </div>
                </div>

                {/* 2. GROWTH PROJECTION */}
                <div className="p-6 bg-card rounded-xl border border-border shadow-md">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <TrendingUp className="h-8 w-8" />
                    <h3 className="text-xl font-semibold text-foreground">Growth Projection</h3>
                  </div>
                  <div className="space-y-3 border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">
                      European Market grows by <span className="font-semibold text-foreground">2.76x</span>.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      German Market: <span className="font-semibold text-foreground">3.17x growth</span> ($271M to $862M).
                    </p>
                    <p className="text-sm text-muted-foreground pt-2">
                        Market for Restaurant Management Software in Europe (Forecast).
                    </p>
                  </div>
                </div>

                {/* 3. TARGET MARKET */}
                <div className="p-6 bg-card rounded-xl border border-border shadow-md">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Target className="h-8 w-8" />
                    <h3 className="text-xl font-semibold text-foreground">Target Market</h3>
                  </div>
                  <div className="space-y-3 border-t border-border pt-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Initial Target (DACH)</div>
                      <div className="font-semibold text-foreground">1,500-2,000 F&B Outlets</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Expected Market Share (Year 3)</div>
                      <div className="font-semibold text-foreground">~10%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Focus</div>
                      <div className="font-semibold text-foreground">Medium to large gastro systems</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 text-center text-primary-foreground mt-20 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Let's Master the Rush Together
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're a hotel looking to streamline operations or an investor seeking tech opportunities in hospitality – let's connect.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
