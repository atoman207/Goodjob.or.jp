import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/review-avatar-1.jpg";
import avatar2 from "@/assets/review-avatar-2.jpg";
import avatar3 from "@/assets/review-avatar-3.jpg";

const PricingSection = () => {
  const plans = [
    {
      name: "正社員",
      price: "¥22,000",
      avatar: avatar1,
      features: [
        "退職連絡代行",
        "有給消化交渉",
        "未払い賃金交渉",
        "離職票取得サポート",
        "転職支援サービス",
      ],
    },
    {
      name: "アルバイト・パート",
      price: "¥16,000",
      avatar: avatar2,
      features: [
        "退職連絡代行",
        "有給消化交渉",
        "未払い賃金交渉",
        "離職票取得サポート",
      ],
    },
    {
      name: "公務員",
      price: "¥30,000",
      avatar: avatar3,
      features: [
        "退職連絡代行",
        "有給消化交渉",
        "特殊手続きサポート",
        "離職票取得サポート",
        "転職支援サービス",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">
          料金プラン
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          明確な料金体系で安心。追加費用は一切ありません。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={plan.avatar}
                  alt={plan.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-center text-muted-foreground mb-2">
                  追加費用なし・全額返金保証
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"/>
            </svg>
            LINEで無料相談
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
