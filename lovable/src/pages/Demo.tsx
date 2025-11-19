import Navigation from "@/components/Navigation";
import operationsImg from "@/assets/screenshot-operations.png";
import inventoryImg from "@/assets/screenshot-inventory.png";
import rosterImg from "@/assets/screenshot-roster.png";
import insightsImg from "@/assets/screenshot-insights.png";
import chatImg from "@/assets/screenshot-chat.png";
import haccpImg from "@/assets/screenshot-haccp.png";

const Demo = () => {
  const screenshots = [
    {
      title: "Operations Dashboard",
      description: "Real-time operational awareness with smart assistant recommendations, demand tracking, and delivery management.",
      image: operationsImg,
      features: ["Live metrics", "Smart recommendations", "Real-time demand", "Delivery tracking"]
    },
    {
      title: "Live Inventory Management",
      description: "Track stock levels, manage expiry dates, and get food rescue action suggestions to minimize waste.",
      image: inventoryImg,
      features: ["Stock tracking", "Expiry monitoring", "Waste reduction", "Smart alerts"]
    },
    {
      title: "Staff Roster & Scheduling",
      description: "Intelligent workforce planning with conflict detection and smart optimization based on demand forecasts.",
      image: rosterImg,
      features: ["Smart scheduling", "Conflict detection", "Demand-based planning", "Team overview"]
    },
    {
      title: "Performance Analytics",
      description: "Deep dive into menu intelligence, guest sentiment, category sales mix, and top movers with actionable insights.",
      image: insightsImg,
      features: ["Menu intelligence matrix", "Guest sentiment analysis", "Sales insights", "Top performers"]
    },
    {
      title: "Team Communication Hub",
      description: "Streamlined team chat with channels for kitchen updates, service team coordination, and announcements.",
      image: chatImg,
      features: ["Channel-based chat", "Team coordination", "Online status", "Quick updates"]
    },
    {
      title: "HACCP Control Center",
      description: "Comprehensive safety and hygiene management with audit scores, daily protocols, and monitoring systems.",
      image: haccpImg,
      features: ["Hygiene audits", "Daily protocols", "Temperature monitoring", "Compliance tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Product Demo</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how Hostelligence transforms F&B operations with intelligent automation, 
              real-time insights, and seamless team collaboration.
            </p>
          </div>

          <div className="space-y-24">
            {screenshots.map((screen, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <img 
                      src={screen.image} 
                      alt={screen.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-secondary mb-2">
                      FEATURE {index + 1}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {screen.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {screen.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how Hostelligence can help you master the rush and optimize your F&B operations.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 transition-colors"
            >
              Get Started
            </a>
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

export default Demo;
