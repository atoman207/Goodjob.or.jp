import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import guideImage from "@/assets/bottommenu.png";

const FloatingCTA = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const dismissedRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroElement = document.getElementById("hero");
      
      if (heroElement) {
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        const isPastHero = scrolled > heroBottom - 100; // Show 100px before hero ends
        
        setIsInHeroSection(!isPastHero);
        
        if (isPastHero) {
          if (!dismissedRef.current) {
            setShowGuide(true);
          } else if (Math.abs(scrolled - lastScrollY.current) > 40) {
            setShowGuide(true);
            dismissedRef.current = false;
          }
        } else {
          setShowGuide(false);
        }
      }

      lastScrollY.current = scrolled;
    };

    // Check initial position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="floating-cta-container fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
      style={{ 
        opacity: isInHeroSection ? 0 : 1,
        pointerEvents: isInHeroSection ? 'none' : 'auto',
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
        {showGuide && !isInHeroSection && (
          <div className="cta-guide-card">
          <button
            type="button"
            aria-label="閉じる"
            className="cta-guide-card__close"
            onClick={() => {
              setShowGuide(false);
              dismissedRef.current = true;
            }}
          >
            <X className="w-4 h-4" />
          </button>
          <div className="cta-guide-card__details">
            <p className="cta-guide-card__eyebrow">＼24時間受付／</p>
            <p className="cta-guide-card__lead">お気軽にお問い合わせください。</p>
            <div className="cta-guide-card__actions">
              <a href="/contact/line" target="_blank" rel="noreferrer" className="w-full">
                <Button size="sm" className="cta-guide-card__action cta-guide-card__action--line w-full">
                <svg viewBox="0 0 36 36" className="cta-guide-card__action-icon" aria-hidden>
                  <path
                    d="M18 4C10.27 4 4 9.65 4 16.6c0 3.99 2.13 7.54 5.48 9.84l-.37 4.27a.8.8 0 0 0 1.2.78l4.78-2.56c.85.13 1.72.2 2.61.2 7.73 0 14-5.65 14-12.6S25.73 4 18 4Z"
                    fill="currentColor"
                  />
                </svg>
                <span>LINE相談</span>
              </Button>
              </a>
              <a href="/contact/phone" target="_blank" rel="noreferrer" className="w-full">
              <Button size="sm" variant="outline" className="cta-guide-card__action cta-guide-card__action--phone w-full">
                <Phone className="w-4 h-4 mr-2" />
                <span>電話相談</span>
              </Button>
              </a>
            </div>
            <p className="cta-guide-card__note">相談はずーっと無料です！</p>
          </div>
          <div className="cta-guide-card__visual" aria-hidden="true">
           
            <img src={guideImage} className="cta-guide-card__figure" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
