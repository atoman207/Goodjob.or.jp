import { CheckCircle2 } from "lucide-react";
import worryImage from "@/assets/worryman.png";

const concerns = [
    "辞めたい理由を素直に伝えられない",
    "退職日をなかなか確定させてもらえない",
    "感情的に怒られそうで不安",
    "手続きや流れが分からず不安が募る",
    "話をねじ曲げられて不利な状況にされそう",
    "「人手が足りない」と責められそうで怖い",
     "強引に退職日を後ろ倒しにされそう",
     "引き継ぎを理由に無理な要求をされそう",
     "社内に噂が広まるのが心配",
   "「今辞めたら迷惑だ」と精神的に追い込まれそう",

];

const WorryandIntroduction = () => {
  return (
    <section id="worry" className="worry-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="worry-section__wrapper">
          <div className="worry-section__headline-block">
            <h2 className="worry-section__headline">今の会社、辞めたいのに辞めれない・・・</h2>
            <img src={worryImage} alt="悩むビジネスパーソン" className="worry-section__headline-image" />
          </div>

          <div className="worry-section__panel">
            <p className="worry-section__panel-title">ひとりで悩んでいませんか？</p>
            <ul className="worry-section__list">
              {concerns.map((item, index) => (
                <li key={index} className="worry-section__item">
                  <CheckCircle2 className="worry-section__icon" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WorryandIntroduction;