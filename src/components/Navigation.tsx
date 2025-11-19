import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/nametag.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Hostelligence" className="h-10 w-auto" />
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/demo" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/demo") ? "text-primary" : "text-foreground"
              }`}
            >
              Product Demo
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact & Funding
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
