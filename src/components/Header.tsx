import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import desktopLogo from "@/assets/logo.jpg";
import mobileLogo from "@/assets/m-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <picture>
              <source media="(min-width: 768px)" srcSet={desktopLogo} />
              <img src={mobileLogo} alt="東京中央労働組合" className="h-12 md:h-16 w-auto object-contain" />
            </picture>

          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              サービス内容
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              料金
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-foreground hover:text-primary transition-colors"
            >
              手順
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors"
            >
              利用者レビュー
            </button>
            <Button onClick={() => scrollToSection("contact")}>
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
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                サービス内容
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                料金
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                手順
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                利用者レビュー
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
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
