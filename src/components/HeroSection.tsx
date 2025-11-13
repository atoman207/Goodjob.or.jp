import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaHandshake,
  FaMedal,
  FaRegCommentDots,
  FaShieldAlt,
  FaFeather,
  FaHandsHelping,
} from "react-icons/fa";
import heroImage from "@/assets/hero-bg.jpg";

const heroAccents: { Icon: IconType; className: string }[] = [
  { Icon: FaRegCommentDots, className: "hero-floating-icon hero-floating-icon--one" },
  { Icon: FaFeather, className: "hero-floating-icon hero-floating-icon--two" },
  { Icon: FaHandsHelping, className: "hero-floating-icon hero-floating-icon--three" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 ">
      
      <div className="hero-background absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] md:top-6 md:bottom-6 lg:top-10 lg:bottom-10 z-0 overflow-hidden rounded-3xl">
        <img
          src={heroImage}
          alt="Professional consultant"
          className="hero-background-image w-[1440px] max-w-full h-full object-cover object-center md:object-[40%_center] opacity-100"
        />
        <div className="hero-background-overlay absolute inset-0" />
        <span className="hero-bird hero-bird--one" aria-hidden="true" />
        <span className="hero-bird hero-bird--two" aria-hidden="true" />
        <span className="hero-bird hero-bird--three" aria-hidden="true" />
        {heroAccents.map(({ Icon, className }, index) => (
          <span key={index} className={className} aria-hidden="true">
            <Icon />
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl flex flex-col items-start gap-10 relative">
          <h1
            className="hero-headline-panel text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight self-start"
            style={{ fontFamily: '"Noto Sans JP","Yu Gothic","Meiryo",sans-serif' }}
          >
            <span className="hero-title-line">
              <FaShieldAlt className="hero-title-line__icon" aria-hidden="true" />
              あなたの退職、
            </span>
            <br />
            <span className="hero-title-line hero-title-line--secondary">
              法的に安心・確実。
              <FaHandshake
                className="hero-title-line__icon hero-title-line__icon--trail"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p
            className="hero-subheadline-panel text-xl md:text-2xl self-center"
            style={{ fontFamily: '"Sawarabi Mincho","Hiragino Mincho ProN","Yu Mincho",serif' }}
          >
            <span className="hero-subtitle-segment">
              <FaRegCommentDots className="hero-subtitle-icon" aria-hidden="true" />
              弁護士監修の退職代行で、
            </span>
            <br />
            <span className="hero-subtitle-segment hero-subtitle-segment--second">
              安心の新たなスタートを。
              <FaFeather className="hero-subtitle-icon hero-subtitle-icon--flutter" aria-hidden="true" />
            </span>
          </p>
          <p
            className="hero-stats-panel text-2xl md:text-3xl text-muted-foreground mb-8 self-end"
            style={{
              fontFamily: '"Dancing Script","Pacifico","Yu Mincho",cursive',
              color: "#ffffff",
            }}
          >
            <span className="hero-stats-icon-wrapper">
              <FaMedal className="hero-stats-icon" aria-hidden="true" />
              労働組合・累計
            </span>
            <span
              style={{
                color: "#facc15",
                fontSize: "200%",
                lineHeight: 1,
                textShadow:
                  "-3px -3px 0 rgb(254, 254, 255), 3px 3px 6px rgba(255, 255, 255, 0.85), 0 0 10px rgba(255, 255, 255, 0.75)",
                WebkitTextStroke: "1px rgba(17,24,39,0.95)",
                display: "inline-block",
                transform: "skew(-6deg) rotate(-1.5deg)",
              }}
            >
              5,000
            </span> 
            件以上の実績
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="hero-line-button text-lg px-10 py-6 bg-secondary hover:bg-secondary/90"
            >
              <svg
                className="hero-line-icon w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"/>
              </svg>
              <span className="hero-line-label">LINEで簡単相談</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-phone-button text-lg px-8 py-6 border-2"
            >
              <Phone className="hero-phone-icon w-5 h-5 mr-2" />
              電話で相談
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
