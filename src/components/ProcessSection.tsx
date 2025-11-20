import type { IconType } from "react-icons";
import {
  PiChatTeardropTextBold,
  PiClipboardTextBold,
  PiRocketLaunchBold,
  PiSealCheckBold,
} from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";

const ProcessSection = () => {
  const steps: {
    number: string;
    title: string;
    description: string;
    detail: string;
    time: string;
    Icon: IconType;
    accent: string;
  }[] = [
    {
      number: "01",
      title: "相談",
      description: "LINE/電話で相談",
      detail: "まずは無料相談から。あなたの状況を詳しくお聞かせください。",
      time: "平均所要時間：15分",
      Icon: PiChatTeardropTextBold,
      accent: "process-step__accent--mint",
    },
    {
      number: "02",
      title: "依頼",
      description: "内容確認後依頼",
      detail: "サービス内容と料金を確認後、正式に依頼いただきます。",
      time: "平均所要時間：30分",
      Icon: PiClipboardTextBold,
      accent: "process-step__accent--amber",
    },
    {
      number: "03",
      title: "実行",
      description: "退職手続き代行",
      detail: "私たちがあなたに代わって会社へ連絡し、退職手続きを進めます。",
      time: "平均所要時間：即日〜3日",
      Icon: PiRocketLaunchBold,
      accent: "process-step__accent--sky",
    },
    {
      number: "04",
      title: "完了",
      description: "結果報告 + 転職支援",
      detail: "退職完了のご報告と、転職サポートサービスのご案内をいたします。",
      time: "完了後も安心サポート",
      Icon: PiSealCheckBold,
      accent: "process-step__accent--violet",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">
          利用手順
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          4つのステップで簡単に退職をサポート
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="process-step group bg-card rounded-3xl p-6 border border-border/70 h-full overflow-hidden">
                  <div className={`process-step__accent ${step.accent}`} aria-hidden="true" />
                  <div className="flex items-center justify-between mb-5">
                    <div className="process-step__bubble">
                      <step.Icon className="process-step__bubble-icon" aria-hidden="true" />
                    </div>
                    <div className="text-4xl font-black text-primary/40 group-hover:text-primary/60 transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3 flex items-center gap-2">
                    <span className="process-step__indicator" aria-hidden="true" />
                    {step.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.detail}
                  </p>
                  <p className="text-xs text-muted-foreground border-t border-border/60 pt-3 flex items-center gap-2">
                    <BsArrowRightShort className="process-step__time-icon" aria-hidden="true" />
                    {step.time}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-primary/30"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
