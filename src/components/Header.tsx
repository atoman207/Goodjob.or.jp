import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import desktopLogo from "@/assets/logo.jpg";
import mobileLogo from "@/assets/m-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false);
    
    // If we're on the home page, scroll to section
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home with hash
      navigate(`/#${id}`);
      // Scroll after a short delay to ensure page has loaded
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Handle hash navigation when component mounts or location changes
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.substring(1); // Remove the #
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
              }}
              className="focus:outline-none"
            >
              <picture>
                <source media="(min-width: 600px)" srcSet={desktopLogo} />
                <img
                  src={mobileLogo}
                  alt="東京中央労働組合"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </picture>
            </button>

          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              サービス内容
            </button>
            <button
              onClick={() => handleNavigation("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              料金
            </button>
            <button
              onClick={() => handleNavigation("process")}
              className="text-foreground hover:text-primary transition-colors"
            >
              手順
            </button>
            <button
              onClick={() => handleNavigation("reviews")}
              className="text-foreground hover:text-primary transition-colors"
            >
              利用者レビュー
            </button>
            <Button onClick={() => handleNavigation("contact")}>
              相談する
            </Button>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation("services")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                サービス内容
              </button>
              <button
                onClick={() => handleNavigation("pricing")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                料金
              </button>
              <button
                onClick={() => handleNavigation("process")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                手順
              </button>
              <button
                onClick={() => handleNavigation("reviews")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                利用者レビュー
              </button>
              <Button
                onClick={() => handleNavigation("contact")}
                className="w-full"
              >
                相談する
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
