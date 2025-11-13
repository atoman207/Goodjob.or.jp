import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "会社にバレませんか？",
      answer:
        "ご安心ください。ご本人様の同意なく個人情報を開示することは一切ありません。秘密厳守で対応いたします。退職代行サービスを利用したことが会社に知られることはありません。",
    },
    {
      question: "当日対応は可能ですか？",
      answer:
        "はい、可能です。お急ぎの場合は当日中に会社へ連絡することも可能です。まずはLINEまたはお電話でご相談ください。状況に応じて最適なタイミングでご対応いたします。",
    },
    {
      question: "料金以外に追加費用は発生しますか？",
      answer:
        "一切発生しません。ご提示した料金以外に追加費用がかかることはありません。明朗会計で安心してご利用いただけます。",
    },
    {
      question: "本当に退職できますか？",
      answer:
        "法律上、退職の意思表示をすれば2週間後に雇用契約は終了します。当組合は労働組合として法的根拠をもって対応しますので、確実に退職することができます。これまで5,000件以上の実績があり、退職できなかったケースはございません。",
    },
    {
      question: "有給休暇は消化できますか？",
      answer:
        "はい、可能です。有給休暇の取得は労働者の権利ですので、当組合が会社と交渉いたします。残っている有給休暇を全て消化してから退職することができます。",
    },
    {
      question: "退職届は自分で書く必要がありますか？",
      answer:
        "退職届のテンプレートをご用意しておりますので、それを使って簡単に作成できます。郵送方法についてもサポートいたしますのでご安心ください。",
    },
    {
      question: "離職票や源泉徴収票はもらえますか？",
      answer:
        "会社には離職票や源泉徴収票などの必要書類を郵送するよう伝えます。万が一送られてこない場合も、当組合が再度催促いたしますのでご安心ください。",
    },
    {
      question: "転職のサポートもしてもらえますか？",
      answer:
        "はい、提携する転職エージェントをご紹介することが可能です。退職後のキャリア相談も承っておりますので、お気軽にご相談ください。",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          よくある質問
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          お客様からよくいただく質問をまとめました
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
