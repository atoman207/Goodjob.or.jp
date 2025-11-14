import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import guideImage from "@/assets/m-image/download.png";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const dismissedRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const shouldShow = scrolled > 300;
      setIsVisible(shouldShow);

      if (!shouldShow) {
        setShowGuide(false);
        dismissedRef.current = false;
      } else {
        if (!dismissedRef.current) {
          setShowGuide(true);
        } else if (Math.abs(scrolled - lastScrollY.current) > 40) {
          setShowGuide(true);
          dismissedRef.current = false;
        }
      }

      lastScrollY.current = scrolled;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-cta-container fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {showGuide && (
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
            <p className="cta-guide-card__eyebrow">24時間受付</p>
            <p className="cta-guide-card__lead">お気軽にお問い合わせください。</p>
            <div className="cta-guide-card__actions">
              <Button size="sm" className="cta-guide-card__line">
                LINE相談
              </Button>
              <Button size="sm" variant="outline" className="cta-guide-card__phone">
                <Phone className="w-4 h-4 mr-2" />
                電話相談
              </Button>
            </div>
            <p className="cta-guide-card__note">相談はずーっと無料です！</p>
          </div>
          <div className="cta-guide-card__figure">
            <img src={guideImage} alt="案内するスタッフ" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
