import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
// import saleswiredLogo from "@/assets/saleswired-logo.png";

const Header = () => {
  
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const legalItems = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/4160bd84-d28a-4add-a6f3-342115bf900f.png" 
              alt="Saleswired logo – Powering Growth" 
              className="site-logo"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild variant="cta">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="inline-flex items-center justify-center rounded-full p-2.5 hover:bg-muted/50 transition-colors"
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader>
                  <SheetTitle>
                    <Link to="/" className="flex items-center gap-2">
                      <img
                        src="/lovable-uploads/4160bd84-d28a-4add-a6f3-342115bf900f.png"
                        alt="Saleswired logo – Powering Growth"
                        className="h-6 w-auto"
                        loading="lazy"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 space-y-1">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <Link
                        to={item.path}
                        className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                          isActive(item.path)
                            ? "bg-muted text-primary"
                            : "text-foreground hover:bg-muted/60"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-6 px-4">
                  <SheetClose asChild>
                    <Button asChild variant="cta" className="w-full">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </SheetClose>
                </div>

                <div className="mt-8 border-t border-border pt-4">
                  <nav className="space-y-1 px-4">
                    {legalItems.map((item) => (
                      <SheetClose asChild key={item.path}>
                        <Link
                          to={item.path}
                          className="block rounded-md px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;