import type { IconType } from "react-icons";
import {
  PiChatTeardropTextBold,
  PiClipboardTextBold,
  PiRocketLaunchBold,
  PiSealCheckBold,
} from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";
// Import process step images
import processImage1 from "@/assets/ste1.jpg";
import processImage2 from "@/assets/step2.jpg";
import processImage3 from "@/assets/ste3.jpg";
import processImage4 from "@/assets/ste4.jpg";

const ProcessSection = () => {
  const steps: {
    number: string;
    title: string;
    description: string;
    detail: string;
    time: string;
    Icon: IconType;
    accent: string;
    image: string;
  }[] = [
    {
      number: "01",
      title: "相談",
      description: "LINE/電話で相談",
      detail: "まずはLINEまたはお電話で、あなたの状況を気軽にご相談いただけます。今の職場で困っていることや不安な点を丁寧にヒアリングし、最適な解決方法をご提案します。相談はすべて無料で、匿名でも問題ありません。",
      time: "平均所要時間：15分",
      Icon: PiChatTeardropTextBold,
      accent: "process-step__accent--mint",
      image: processImage1,
    },
    {
      number: "02",
      title: "依頼",
      description: "内容確認後依頼",
      detail: "相談内容を確認し、料金や進め方を明確にご説明します。ご納得いただいたうえで、正式にご依頼いただく流れになります。追加費用は一切なく、明確でわかりやすい料金体系です。",
      time: "平均所要時間：30分",
      Icon: PiClipboardTextBold,
      accent: "process-step__accent--amber",
      image: processImage2,
    },
    {
      number: "03",
      title: "実行",
      description: "退職手続き代行",
      detail: "ご依頼後、私たちがあなたに代わって会社へ退職の意思を正式に伝えます。上司や会社と直接やり取りする必要はなく、全て労働組合が代行します。あなたはもう出社せず、ストレスなく退職手続きが進みます。",
      time: "平均所要時間：即日〜3日",
      Icon: PiRocketLaunchBold,
      accent: "process-step__accent--sky",
      image: processImage3,
    },
    {
      number: "04",
      title: "完了",
      description: "結果報告 + 転職支援",
      detail: "退職が無事完了した際に、結果をご報告いたします。今後のキャリアの方向性にあわせ、転職サポートや次の一歩へのアドバイスもご提供します。不安なく新しいスタートを切れるよう、最後まで寄り添います。",
      time: "完了後も安心サポート",
      Icon: PiSealCheckBold,
      accent: "process-step__accent--violet",
      image: processImage4,
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

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="process-step group bg-card rounded-3xl p-6 border border-border/70 overflow-hidden flex flex-col md:flex-row md:items-center md:gap-6">
                  <div className={`process-step__accent ${step.accent}`} aria-hidden="true" />
                  
                  {/* Image Section */}
                  <div className="process-step__image-wrapper mb-4 md:mb-0 md:flex-shrink-0">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="process-step__image"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="process-step__content flex-1">
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
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="process-step__triangle">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-yellow-500"
                      >
                        <path
                          d="M12 16L6 10H18L12 16Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
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
