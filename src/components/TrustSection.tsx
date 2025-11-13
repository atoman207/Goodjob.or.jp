import { Shield, Award, Users } from "lucide-react";
import trustImage from "@/assets/2section.jpg";

const TrustSection = () => {
  const stats = [
    {
      icon: Users,
      value: "5,000件以上",
      label: "累積実績",
    },
    {
      icon: Award,
      value: "98%",
      label: "顧客満足度",
    },
    {
      icon: Shield,
      value: "労働組合",
      label: "直接運営",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-14">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:text-left md:gap-8">
            <div className="trust-section__avatar">
              <img
                src={trustImage}
                alt="信頼できる退職代行専門家"
                className="trust-section__image"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 trust-section__title">
                退職代行の専門家として、確かな実績を。
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-10 max-w-2xl trust-section__subtitle">
                私たちは法律の専門家として、これまで5,000件以上の退職をサポートしてきました。
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
