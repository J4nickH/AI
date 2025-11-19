import { ArrowRight, TrendingDown, Users, Utensils, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Logo from "@/assets/nametag.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center max-w-4xl">
          <img src={Logo} alt="Hostelligence Logo" className="mx-auto mb-6 w-screen max-w-xs" />
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Transform your F&B operations from gut-feeling to data-driven excellence
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" variant="secondary" className="gap-2">
                See Product Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Purpose</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="bg-card rounded-2xl p-12 shadow-lg border border-border">
            <p className="text-2xl text-foreground leading-relaxed text-center font-light">
              Hostelligence is a SaaS-model to transform manual F&B operations into efficient, 
              data-driven workflows that continuously optimize through human feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Problem</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-3">Gut-Feeling Operations</h3>
              <p className="text-muted-foreground leading-relaxed">
                F&B processes run on intuition rather than data-driven decisions. POS, PMS, 
                and 3rd-party systems operate in silos, creating fragmentation.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <TrendingDown className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lost Profit Potential</h3>
              <p className="text-muted-foreground leading-relaxed">
                Average profit efficiency of only 61% means hotels aren't realizing their 
                full potential. Manual errors cause significant revenue leakage.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <Users className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-3">Staff Challenges</h3>
              <p className="text-muted-foreground leading-relaxed">
                Higher stress for already scarce skilled staff and management. Staff costs 
                represent 30-45% of operating costs, often based on estimates.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <Utensils className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-3">Food Waste Crisis</h3>
              <p className="text-muted-foreground leading-relaxed">
                5-15% of food ends up in the bin. HACCP compliance is often neglected due 
                to low awareness and poor documentation practices.
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 border-l-4 border-destructive">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Key Impact Statistics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">~61%</div>
                <div className="text-sm text-muted-foreground">Average profit efficiency in hotels</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">~17%</div>
                <div className="text-sm text-muted-foreground">Revenue leakage from manual errors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">5-15%</div>
                <div className="text-sm text-muted-foreground">Food waste rate in hospitality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Solution</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Menu & Beverage Intelligence</h3>
              <p className="text-muted-foreground text-sm">
                Data-driven insights to optimize your menu offerings and pricing strategies.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Demand Forecasting</h3>
              <p className="text-muted-foreground text-sm">
                Predict customer demand patterns to optimize inventory and staffing.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Workforce Scheduling</h3>
              <p className="text-muted-foreground text-sm">
                Intelligent roster planning based on real demand and staff availability.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Inventory & Waste Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Real-time monitoring to reduce waste and optimize stock levels.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Upselling & Recommendations</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered suggestions to boost revenue and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dashboard & Alerts</h3>
              <p className="text-muted-foreground text-sm">
                Real-time operational awareness with intelligent notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Vision</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-card rounded-2xl p-12 shadow-xl border border-border">
            <p className="text-xl text-foreground leading-relaxed mb-8">
              We envision a hospitality industry where every F&B operation runs at peak efficiency, 
              where staff can focus on creating memorable guest experiences rather than fighting 
              operational chaos, and where sustainable practices are the norm, not the exception.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By 2030, we aim to help reduce food waste by 50% across our partner establishments, 
              improve profit efficiency to 85%+, and empower hospitality professionals with the 
              tools they need to master the rush, every single day.
            </p>
          </div>
          
          <div className="mt-12">
            <Link to="/demo">
              <Button size="lg" className="gap-2">
                Explore the Platform <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
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

export default Home;
