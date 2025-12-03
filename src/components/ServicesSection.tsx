import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaComments } from "react-icons/fa";
import { FaBalanceScaleLeft, FaPeopleCarry } from "react-icons/fa";
import { FaUserGraduate, FaArrowTrendUp } from "react-icons/fa6";

const ServicesSection = () => {
  const services = [
    {
      title: "退職連絡代行",
      description: "あなたに代わって会社へ退職の意思を伝えます。面倒な手続きや気まずい会話は一切不要です。",
      icon: FaPhoneAlt,
      subIcon: FaComments,
      link: "/service/retirement-contact",
    },
    {
      title: "会社との交渉対応",
      description: "未払い賃金や有給消化など、労働組合として会社と交渉を行います。法的根拠に基づいた対応で安心です。",
      icon: FaBalanceScaleLeft,
      subIcon: FaPeopleCarry,
      link: "/service/negotiation",
    },
    {
      title: "転職支援",
      description: "退職後の新しいキャリアをサポート。提携する転職エージェントを通じて次のステップをサポートします。",
      icon: FaUserGraduate,
      subIcon: FaArrowTrendUp,
      link: "/service/job-change",
    },
  ];

  return (
    <section id="services" className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">
          サービス内容
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          退職に関する様々なサポートをご提供いたします
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const SubIconComponent = service.subIcon;
            
            return (
              <div
                key={index}
                className="bg-card border border-border rounded p-6 md:p-8 shadow-sm hover:shadow-md md:hover:shadow-md transition-all duration-300 flex flex-col mobile-card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                      <SubIconComponent className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary absolute -bottom-1 -right-1" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <Button asChild className="w-full">
                  <Link to={service.link}>
                    詳しく見る
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

