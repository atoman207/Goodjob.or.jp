import { Button } from "@/components/ui/button";
import type { IconType } from "react-icons";
import { FaPhoneAlt, FaComments, FaBalanceScaleLeft, FaUserGraduate, FaPeopleCarry } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiArrowBendUpRightBold } from "react-icons/pi";

const ServicesSection = () => {
  const services: {
    Icon: IconType;
    Accent: IconType;
    title: string;
    description: string;
    accentClass: string;
  }[] = [
    {
      Icon: FaPhoneAlt,
      Accent: FaComments,
      title: "退職連絡代行",
      description:
        "あなたに代わって会社へ退職の意思を伝えます。面倒な手続きや気まずい会話は一切不要です。",
      accentClass: "service-card__accent--lime",
    },
    {
      Icon: FaBalanceScaleLeft,
      Accent: FaPeopleCarry,
      title: "交渉対応",
      description:
        "未払い賃金や有給消化など、労働組合として会社と交渉を行います。法的根拠に基づいた対応で安心です。",
      accentClass: "service-card__accent--blue",
    },
    {
      Icon: FaUserGraduate,
      Accent: FaArrowTrendUp,
      title: "転職支援",
      description:
        "退職後の新しいキャリアをサポート。提携する転職エージェントを通じて次のステップをサポートします。",
      accentClass: "service-card__accent--amber",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">
          サービス内容
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          退職から転職まで、トータルでサポートします
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-card rounded-3xl p-8 border border-border/70 relative overflow-hidden"
            >
              <div className={`service-card__halo ${service.accentClass}`} aria-hidden="true" />
              <div className="service-card__icon-ring">
                <span className="service-card__pulse" aria-hidden="true" />
                <service.Icon className="service-card__icon-main" aria-hidden="true" />
                <service.Accent className="service-card__icon-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="link" className="service-card__cta p-0 h-auto text-primary">
                詳細を見る
                <PiArrowBendUpRightBold className="service-card__cta-arrow" aria-hidden="true" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
