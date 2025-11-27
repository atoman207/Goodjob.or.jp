import { CheckCircle2 } from "lucide-react";
import worryImage from "@/assets/worryman.png";
import guardianImage from "@/assets/about.png";

const concerns = [
  "辞めたい理由を素直に伝えられない",
  "退職日をなかなか確定させてもらえない",
  "感情的に怒られそうで不安",
  "手続きや流れが分からず不安が募る",
  "話をねじ曲げられて不利な状況にされそう",
  "人手が足りないと 責められそうで怖い",
  "強引に退職日を後ろ倒しにされそう",
];

const highlightPhrase = "「人手が足りない」";
const guardianDescription = [
  "東京中央労働組合とは、働く人の権利を守り、困りごとやトラブルに対して相談・サポートを行う労働組合です。",
  "労働組合は、労働者が安心して働ける環境を整えるために設けられており、法律上、会社に対して団体交渉を行う権利が認められています。",
  "そのため、職場での不当な扱い、残業問題、給与未払い、退職時のトラブルなどについて、組合があなたに代わって会社とやり取りを行うことが可能です。",
  "また、組合加入後は、ご本人が直接職場と交渉したり、強い態度で詰められたりする心配はありません。必要なやり取りや希望の伝達はすべて組合が担当します。",
  "東京中央労働組合はこれまでに数多くの労働問題を解決してきた実績があり、その経験と専門知識をもとに、安心して相談できる窓口として利用されています。",
];


const WorryandIntroduction = () => {
  return (
    <>
      <section id="worry" className="worry-section py-8 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="worry-section__wrapper">
            {/* Headline and Image Row */}
            <div className="worry-section__headline-block">
              <h2 className="worry-section__headline section-title">
                今の会社、辞めたいのに辞めれない・・・
              </h2>
              <img src={worryImage} alt="悩むビジネスパーソン" className="worry-section__headline-image" />
            </div>

            {/* Panel with overlapping image */}
            <div className="worry-section__panel-wrapper">
              <div className="worry-section__panel">
                <p className="worry-section__panel-title">ひとりで悩んでいませんか？</p>
                <ul className="worry-section__list">
                {concerns.map((item, index) => {
                  if (!item.includes(highlightPhrase)) {
                    return (
                      <li key={index} className="worry-section__item">
                        <CheckCircle2 className="worry-section__icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    );
                  }

                  const before = item.substring(0, item.indexOf(highlightPhrase));
                  const after = item.substring(item.indexOf(highlightPhrase) + highlightPhrase.length);

                  return (
                    <li key={index} className="worry-section__item">
                      <CheckCircle2 className="worry-section__icon" aria-hidden="true" />
                      <span>
                        {before}
                        <span style={{ color: "#ef4444" }}>{highlightPhrase}</span>
                        {after}
                      </span>
                    </li>
                  );
                })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guardian-section py-0 md:py-0 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="guardian-section__wrapper">
            {/* Upper Section: Title centered, Image in upper right */}
            <div className="guardian-hero">
              <h3 className="guardian-hero__title section-title">あなたの退職を、確実に守ります。</h3>
              <div className="guardian-hero__image-wrapper">
                <img src={guardianImage} alt="退職代行ガーディアン" className="guardian-hero__image" />
              </div>
            </div>

            {/* Lower Section: Panel with Heading and Description */}
            <div className="guardian-panel">
              <p className="guardian-panel__title">
                <span className="guardian-panel__dot" aria-hidden="true" />
                東京中央労働組合とは？
              </p>
              <div className="guardian-panel__body">
                {guardianDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorryandIntroduction;