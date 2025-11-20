import { useState, useEffect } from "react";
import { Shield, Award, Users, CheckCircle2, AlertCircle, XCircle, Scale, Building2 } from "lucide-react";
import trustImage from "@/assets/2section.png";
// Import icon images
import checkIcon from "@/assets/icons (1).png";
import shieldIcon from "@/assets/icons (2).png";
import starIcon from "@/assets/icons (3).png";
// Import strength images
import strength1Image from "@/assets/ava1.jpg";
import strength2Image from "@/assets/ava2.jpg";
import strength3Image from "@/assets/ava3.jpg";
import strength4Image from "@/assets/ava4.jpg";
import strength5Image from "@/assets/ava5.jpg";
import strength6Image from "@/assets/ava6.jpg";
import strength7Image from "@/assets/ava7.jpg";
import strength8Image from "@/assets/ava8.jpg";
import strength9Image from "@/assets/ava9.jpg";

const comparisonColumns = [
  { key: "guardian", label: "退職代行ガーディアン", accent: "comparison-col comparison-col--guardian" },
  { key: "private", label: "民間企業", accent: "comparison-col comparison-col--private" },
  { key: "lawyer", label: "弁護士事務所", accent: "comparison-col comparison-col--lawyer" },
] as const;

type ColumnKey = (typeof comparisonColumns)[number]["key"];

const comparisonRows: { label: string; values: Record<ColumnKey, string> }[] = [
  {
    label: "基本料金",
    values: {
      guardian: "◎19,800円",
      private: "△15,000円~50,000円",
      lawyer: "✕50,000円~100,000円",
    },
  },
  {
    label: "追加料金",
    values: {
      guardian: "◎追加料金一切なし!",
      private: "△場合により発生",
      lawyer: "△場合により発生",
    },
  },
  {
    label: "実績",
    values: {
      guardian: "◎労働組合運営25年超 退職率100%",
      private: "〇",
      lawyer: "△",
    },
  },
  {
    label: "会社との交渉",
    values: {
      guardian: "◎代理/交渉を行えることが、法律で定められています",
      private: "✕",
      lawyer: "〇",
    },
  },
  {
    label: "安全性",
    values: {
      guardian: "◎法人格を有する法適合組合",
      private: "✕",
      lawyer: "◎法律の専門家",
    },
  },
];

const highlightCards = [
  {
    title: "法的な信頼性",
    body: "労働委員会に正式認定された公的な労働組合。民間企業とは比較にならない安心感。",
  },
  {
    title: "交渉力の強さ",
    body: "労働組合法により会社との団体交渉が可能。弁護士並みの法的裏付けで対応します。",
  },
  {
    title: "良心的な費用",
    body: "弁護士より大幅に安価で追加料金ナシ。分かりやすい料金体系で安心です。",
  },
];

const strengths = [
  {
    image: strength1Image,
    title: "東京都労働委員会認証の 法適合組合 ",
    content: "東京中央労働組合は、東京都労働委員会に正式に認証された法適合の合同労働組合です。法に基づいた正当な手続きで退職を進められるため、違法性の心配がありません。公的機関に認められた確かな体制で、安心してお任せいただけます。",
  },
  {
    image: strength2Image,
    title: "依頼者様の状況に寄り添う 円満退職サポート",
    content: "ご事情やお気持ちを丁寧に伺い、最も無理のない方法で退職までの道筋を整えます。一方的に手続きを進めるのではなく、依頼者様の心情に沿った形で進行します。負担を少なくし、できる限り円満な退職となるよう全力で支援します。",
  },
  {
    image: strength3Image,
    title: "即日対応で、相談当日から出社不要",
    content: "ご相談をいただいたその日から、もう会社に行く必要はありません。どれだけ急なご依頼でも、即日対応でスムーズに退職手続きを開始します。就業規則にある ◯ヵ月前申告 などの条件も問題ありません。",
  },
  {
    image: strength4Image,
    title: "休日・深夜でも柔軟に対応",
    content: "仕事や生活の都合で日中の連絡が難しい方にも対応できる体制を整えています。深夜や休日でも、できる限り迅速にご相談を受け付けています。忙しい方でも安心して依頼できる柔軟さが強みです。",
  },
  {
    image: strength5Image,
    title: "全国・全年齢・全雇用形態に対応し、追加料金なしの一律料金",
    content: "地域や雇用形態、年齢、依頼内容の難易度によって料金が変わることはありません。どなたでも公平に利用できるよう、完全な一律料金制を徹底しています。追加料金の心配がないため、初めての方でも安心です。",
  },
  {
    image: strength6Image,
    title: "会社への連絡・交渉はすべて組合が代行",
    content: "社長や上司と直接対話する必要は一切ありません。会社への連絡・調整・必要なやり取りは、すべて東京中央労働組合が代わりに行います。精神的な負担を大幅に減らし、安心して任せられる体制です。",
  },
  {
    image: strength7Image,
    title: "退職届提出も貸与品返却も郵送で完結",
    content: "退職届の提出や会社からの貸与品返却は、すべて郵送で完結できます。会社へ出向いたり対面でやり取りをする必要はありません。ご自宅から安心して手続きを進められる仕組みです。",
  },
  {
    image: strength8Image,
    title: "法律で認められた 代理・交渉の権限 を持つ合同労働組合",
    content: "東京中央労働組合は、一般企業とは異なり、法律で認められた代理・交渉権限を持っています。正当な立場で企業と話し合えるため、安心して任せられます。依頼者様の権利を守るため、法的裏付けのある確実な対応が可能です。",
  },
  {
    image: strength9Image,
    title: "退職成功率100%の実績",
    content: "これまで退職できなかったケースは一度もありません。違法な引き止めや嫌がらせを行う企業にも、必要な法律を用いて適切に対応します。確実に退職を実現し、新しい生活へ踏み出せるよう支援します。",
  },
];

const getIndicator = (value: string) => {
  if (value.startsWith("◎")) {
    return { Icon: CheckCircle2, className: "comparison-indicator comparison-indicator--good", showIcon: true };
  }
  if (value.startsWith("〇")) {
    return { Icon: CheckCircle2, className: "comparison-indicator comparison-indicator--good", showIcon: true };
  }
  if (value.startsWith("△")) {
    return { Icon: AlertCircle, className: "comparison-indicator comparison-indicator--mid", showIcon: true };
  }
  if (value.startsWith("✕")) {
    return { Icon: XCircle, className: "comparison-indicator comparison-indicator--bad", showIcon: true };
  }
  return { Icon: CheckCircle2, className: "", showIcon: false };
};

const TrustSection = () => {
  const [showAllStrengths, setShowAllStrengths] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    {
      iconImage: checkIcon,
      value: "5,000件以上",
      label: "累計相談実績",
      description: "これまで多くの方々の退職をサポート",
    },
    {
      iconImage: shieldIcon,
      value: "弁護士監修",
      label: "安心体制",
      description: "法的に確実な対応を実現",
    },
    {
      iconImage: starIcon,
      value: "98%",
      label: "顧客満足度",
      description: "信頼と実績の証",
    },
  ];

  return (
    <>
      <section className="trust-section-redesigned py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* ① ヘッダー（セクションタイトル） */}
            <div className="trust-section-header text-center mb-16 md:mb-20">
              <h2 className="trust-section-main-title section-title">
                退職代行のプロフェッショナルとして、確かな実績を。
              </h2>
              <div className="trust-section-title-line"></div>
              <p className="trust-section-sub-copy">
                東京中央労働組合は、確かな体制と経験で、あなたの新しい一歩を支えます。
              </p>
            </div>

            {/* ② 実績数値（3カラム） */}
            <div className="trust-section-stats grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="trust-stat-card">
                  <div className="trust-stat-icon">
                    <img 
                      src={stat.iconImage} 
                      alt={stat.label}
                      className="trust-stat-icon-image"
                    />
                  </div>
                  <div className="trust-stat-value">{stat.value}</div>
                  <div className="trust-stat-label">{stat.label}</div>
                  <div className="trust-stat-description">{stat.description}</div>
                </div>
              ))}
            </div>



            {/* ④ バッジエリア（弁護士監修・法人対応可） */}
            <div className="trust-section-badges flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
              <div className="trust-badge">
                <Scale className="trust-badge-icon" />
                <span className="trust-badge-text">弁護士監修体制</span>
              </div>
              <div className="trust-badge">
                <Building2 className="trust-badge-icon" />
                <span className="trust-badge-text">法人依頼にも対応</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="comparison-header">
            <p className="comparison-kicker trust-section__title section-title">
            東京中央労働組合と他社との比較
            </p>
          </div>

          <div className="comparison-table">
            <div className="comparison-table__head">
              <div className="comparison-table__head-item comparison-table__head-item--label"></div>
              {comparisonColumns.map((column) => (
                <div key={column.key} className={column.accent}>
                  {column.label}
                </div>
              ))}
            </div>

            <div className="comparison-table__body">
              {comparisonRows.map((row) => (
                <div key={row.label} className="comparison-table__row">
                  <div className="comparison-table__cell comparison-table__cell--label">{row.label}</div>
                  {comparisonColumns.map((column) => {
                    const value = row.values[column.key];
                    const { Icon, className, showIcon } = getIndicator(value);
                    return (
                      <div key={`${row.label}-${column.key}`} className="comparison-table__cell">
                        {showIcon && <Icon aria-hidden className={className} />}
                        <span>{value}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="comparison-highlight">
            <h3>東京中央労働組合が最も安心できる理由</h3>
            <div className="comparison-highlight__grid">
              {highlightCards.map((card) => (
                <div key={card.title} className="comparison-highlight__card">
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9 Strengths Section */}
      <section className="strengths-section py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="strengths-section__title section-title text-center mb-12 md:mb-16">
              東京中央労働組合の9つの強み
            </h2>
            
            <div className="strengths-list">
              {strengths.map((strength, index) => {
                const isEven = index % 2 === 0;
                const maxVisible = isMobile ? 3 : 6;
                const shouldHide = !showAllStrengths && index >= maxVisible;
                
                if (shouldHide) return null;
                
                return (
                  <div 
                    key={index} 
                    className={`strength-item strength-item--${isEven ? 'left' : 'right'}`}
                  >
                    <div className="strength-item__image-wrapper">
                      <img 
                        src={strength.image} 
                        alt={strength.title}
                        className="strength-item__image"
                      />
                    </div>
                    <div className="strength-item__content">
                      <h3 className="strength-item__title">{strength.title}</h3>
                      <p className="strength-item__text">{strength.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showAllStrengths && (
              <div className="strengths-section__button-wrapper text-center mt-8 md:mt-12">
                <button
                  onClick={() => setShowAllStrengths(true)}
                  className="strengths-section__button"
                >
                  もっと見る
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
