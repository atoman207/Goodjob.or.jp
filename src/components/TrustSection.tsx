import { Shield, Award, Users, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import trustImage from "@/assets/2section.jpg";

const comparisonColumns = [
  { key: "union", label: "東京中央労働組合", accent: "comparison-col comparison-col--union" },
  { key: "general", label: "一般労組", accent: "comparison-col comparison-col--general" },
  { key: "lawyer", label: "弁護士", accent: "comparison-col comparison-col--lawyer" },
  { key: "agency", label: "退職代行会社", accent: "comparison-col comparison-col--agency" },
] as const;

type ColumnKey = (typeof comparisonColumns)[number]["key"];

const comparisonRows: { label: string; values: Record<ColumnKey, string> }[] = [
  {
    label: "法的な信頼性",
    values: {
      union: "◎最高",
      general: "△低い",
      lawyer: "◎最高",
      agency: "×ほぼ無し",
    },
  },
  {
    label: "交渉権",
    values: {
      union: "◎あり",
      general: "◎あり",
      lawyer: "◎あり",
      agency: "×なし",
    },
  },
  {
    label: "費用",
    values: {
      union: "◎安い",
      general: "◎安い",
      lawyer: "×高い",
      agency: "◎普通〜やや高",
    },
  },
  {
    label: "トラブル対応力",
    values: {
      union: "◎強い",
      general: "△弱い",
      lawyer: "◎強い",
      agency: "×対応不可",
    },
  },
  {
    label: "実績",
    values: {
      union: "◎多数",
      general: "△少なめ",
      lawyer: "△案件により差",
      agency: "△不透明",
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

const getIndicator = (value: string) => {
  if (value.startsWith("◎")) {
    return { Icon: CheckCircle2, className: "comparison-indicator comparison-indicator--good" };
  }
  if (value.startsWith("△")) {
    return { Icon: AlertCircle, className: "comparison-indicator comparison-indicator--mid" };
  }
  return { Icon: XCircle, className: "comparison-indicator comparison-indicator--bad" };
};

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
    <>
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

      <section className="comparison-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="comparison-header">
            <p className="comparison-kicker trust-section__title">
              4つの退職サポート機関の比較
            </p>
            <p className="comparison-subtitle trust-section__subtitle">
              信頼性・料金・対応力の違いがひと目でわかる早見表
            </p>
          </div>

          <div className="comparison-table">
            <div className="comparison-table__head">
              <div className="comparison-table__head-item comparison-table__head-item--label">項目</div>
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
                    const { Icon, className } = getIndicator(value);
                    return (
                      <div key={`${row.label}-${column.key}`} className="comparison-table__cell">
                        <Icon aria-hidden className={className} />
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
    </>
  );
};

export default TrustSection;
