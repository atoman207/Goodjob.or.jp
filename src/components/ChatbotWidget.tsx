import { useMemo, useState } from "react";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { X } from "lucide-react";

import chatGuide from "@/assets/chatbot.png";

type ChatbotConfig = Parameters<typeof Chatbot>[0];

const chatbotConfig: ChatbotConfig = {
  initialMessages: [
    createChatBotMessage("こんにちは。東京中央労働組合のサポートスタッフです。"),
    createChatBotMessage("退職に関するご相談を承っております。費用、手続きの流れ、サービス内容など、お気軽にご質問ください。"),
  ],
  customComponents: {
    header: () => (
      <p className="chatbot-kit__custom-header">
        東京中央労働組合
      </p>
    ),
    botAvatar: () => (
      <div className="chatbot-bot-avatar" aria-hidden="true">
        <span className="chatbot-bot-avatar__glow" />
        <img src={chatGuide} alt="" />
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0f172a",
    },
    chatButton: {
      backgroundColor: "#0f172a",
    },
  },
  state: {
    lastUserQuestion: "",
  },
};

class ActionProvider {
  createChatBotMessage: typeof createChatBotMessage;
  setStateFunc: (update: any) => void;

  constructor(createChatBotMessageParam: typeof createChatBotMessage, setStateFunc: (update: any) => void) {
    this.createChatBotMessage = createChatBotMessageParam;
    this.setStateFunc = setStateFunc;
  }

  private addMessage(message: ReturnType<typeof createChatBotMessage>) {
    this.setStateFunc((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  sendCostDetails() {
    this.addMessage(
      this.createChatBotMessage("【料金について】\n\n東京中央労働組合の退職代行サービスは、一律22,000円 + 2,000円（合計24,000円）となっております。\n\n地域や雇用形態、年齢、依頼内容の難易度によって料金が変わることはありません。追加料金も一切ございませんので、初めての方でも安心してご利用いただけます。\n\nLINEやお電話でのご相談は無料です。まずはお気軽にお問い合わせください。"),
    );
  }

  sendProcessGuide() {
    this.addMessage(
      this.createChatBotMessage("【利用手順について】\n\n退職手続きは、以下の4つのステップで進めさせていただきます：\n\n① 相談（平均15分）\nLINEまたはお電話で、現在の状況やご希望をお聞かせください。\n\n② 依頼（平均30分）\n料金や進め方をご説明し、ご納得いただいたうえで正式にご依頼いただきます。\n\n③ 実行（即日〜3日）\n私たちがあなたに代わって会社へ退職の意思を正式に伝えます。\n\n④ 完了\n退職が無事完了した際に、結果をご報告いたします。\n\n最短で即日対応も可能です。"),
    );
  }

  sendSupportInfo() {
    this.addMessage(
      this.createChatBotMessage("【サービス内容について】\n\n東京中央労働組合では、以下の3つのサービスをご提供しております：\n\n1. 退職連絡代行\nあなたに代わって会社へ退職の意思を伝えます。面倒な手続きや気まずい会話は一切不要です。\n\n2. 会社との交渉対応\n未払い賃金や有給消化など、労働組合として会社と交渉を行います。法的根拠に基づいた対応で安心です。\n\n3. 転職支援\n退職後の新しいキャリアをサポート。提携する転職エージェントを通じて次のステップをサポートします。\n\n弁護士監修で不当な引き止めや残業代の未払い相談も可能です。"),
    );
  }

  sendContactInfo() {
    this.addMessage(
      this.createChatBotMessage("【お問い合わせ方法について】\n\n24時間、LINEとお電話でご相談を受け付けております。\n\nサイト右下のボタンから、いつでもお気軽にご連絡ください。\n\n休日や深夜でも柔軟に対応させていただきますので、お忙しい方でも安心です。\n\nまずは無料相談で、あなたの状況をお聞かせください。"),
    );
  }

  sendAboutUnion() {
    this.addMessage(
      this.createChatBotMessage("【東京中央労働組合について】\n\n東京中央労働組合は、東京都労働委員会に正式に認証された法適合の合同労働組合です。\n\n主な特徴：\n・退職成功率100%の実績（これまで5,000件以上の相談実績）\n・法律で認められた代理・交渉の権限を持つ\n・全国・全年齢・全雇用形態に対応\n・即日対応可能（相談当日から出社不要）\n・会社への連絡・交渉はすべて組合が代行\n・退職届提出も郵送で完結\n\n法的根拠に基づいた確実な対応で、安心してお任せいただけます。"),
    );
  }

  sendLegalBasis() {
    this.addMessage(
      this.createChatBotMessage("【法的根拠について】\n\n当組合は労働組合として、以下の法律に基づいて対応いたします：\n\n・労働基準法（賃金の支払い、労働時間、有給休暇など）\n・労働契約法（労働条件の変更、解雇など）\n・労働組合法（労働組合の権利）\n・労働安全衛生法（職場環境の改善）\n\n労働組合法により会社との団体交渉が可能で、弁護士並みの法的裏付けで対応します。一般企業とは異なり、法律で認められた代理・交渉権限を持っているため、安心してお任せいただけます。"),
    );
  }

  sendNegotiationInfo() {
    this.addMessage(
      this.createChatBotMessage("【会社との交渉対応について】\n\n以下のような交渉内容に対応しております：\n\n・未払い賃金の請求（残業代の未払いや給与の遅配など）\n・有給休暇の取得交渉\n・退職金の交渉\n・必要書類の取得交渉（離職票や源泉徴収票など）\n・不当な評価や処分への対応\n・労働条件の改善交渉\n\n労働組合として法的根拠をもって交渉するため、確実に結果を得られます。個人では難しい交渉も、組織として対応するため有利です。"),
    );
  }

  sendRetirementContact() {
    this.addMessage(
      this.createChatBotMessage("【退職連絡代行について】\n\nあなたに代わって会社へ退職の意思を伝えます。\n\n主なサービス内容：\n・退職の意思伝達（労働組合として正式に伝達）\n・退職届の作成サポート\n・秘密厳守（利用したことが会社に知られることはありません）\n\nメリット：\n✓ 気まずい会話や直接的な対話を避けられます\n✓ 面倒な手続きを代行してもらえるため、時間と労力を節約\n✓ 労働組合として法的根拠をもって対応するため、安心\n\nパワハラやセクハラ、長時間労働、職場の人間関係など、様々なケースに対応しております。"),
    );
  }

  sendJobChange() {
    this.addMessage(
      this.createChatBotMessage("【転職支援について】\n\n退職後の新しいキャリアをサポートいたします。\n\nサービス内容：\n・転職エージェントの紹介・マッチング\n・キャリアカウンセリング\n・履歴書・職務経歴書の作成サポート\n・面接対策・練習\n・給与交渉のサポート\n・入社後のフォローアップ\n\n提携する信頼できる転職エージェントをご紹介し、あなたのスキルや希望に合った求人を提案します。転職活動をトータルでサポートし、退職から転職まで一貫して支援いたします。"),
    );
  }

  sendFallback() {
    this.addMessage(
      this.createChatBotMessage("申し訳ございません。もう少し詳しく教えていただけますでしょうか？\n\n以下のような内容についてお答えできます：\n\n・費用・料金について\n・手続きの流れ\n・サービス内容（退職連絡代行、交渉対応、転職支援）\n・東京中央労働組合について\n・法的根拠について\n・会社との交渉について\n・お問い合わせ方法\n\nご質問の内容を具体的に教えていただければ、より詳しくご案内いたします。"),
    );
  }
}

class MessageParser {
  actionProvider: ActionProvider;

  constructor(actionProvider: ActionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    const text = message.toLowerCase();

    // 料金・費用に関する質問
    if (text.includes("費") || text.includes("料金") || text.includes("値段") || text.includes("いくら") || text.includes("price") || text.includes("cost") || text.includes("お金") || text.includes("代金")) {
      this.actionProvider.sendCostDetails();
      return;
    }
    
    // 手続きの流れに関する質問
    if (text.includes("流れ") || text.includes("手順") || text.includes("ステップ") || text.includes("進め方") || text.includes("どうやって") || text.includes("step") || text.includes("process") || text.includes("手続") || text.includes("方法")) {
      this.actionProvider.sendProcessGuide();
      return;
    }
    
    // サービス内容に関する質問
    if (text.includes("サービス") || text.includes("サポート") || text.includes("内容") || text.includes("何が") || text.includes("できる") || text.includes("support") || text.includes("できること")) {
      this.actionProvider.sendSupportInfo();
      return;
    }
    
    // 連絡方法に関する質問
    if (text.includes("連絡") || text.includes("問い合わせ") || text.includes("相談") || text.includes("電話") || text.includes("line") || text.includes("contact") || text.includes("どうすれば") || text.includes("どこに")) {
      this.actionProvider.sendContactInfo();
      return;
    }
    
    // 労働組合について
    if (text.includes("労働組合") || text.includes("東京中央") || text.includes("組合") || text.includes("どんな") || text.includes("特徴") || text.includes("実績") || text.includes("認証")) {
      this.actionProvider.sendAboutUnion();
      return;
    }
    
    // 法的根拠・法律について
    if (text.includes("法律") || text.includes("法的") || text.includes("根拠") || text.includes("権限") || text.includes("認証") || text.includes("労働基準法") || text.includes("労働組合法")) {
      this.actionProvider.sendLegalBasis();
      return;
    }
    
    // 交渉について
    if (text.includes("交渉") || text.includes("未払い") || text.includes("残業代") || text.includes("有給") || text.includes("退職金") || text.includes("賃金") || text.includes("請求")) {
      this.actionProvider.sendNegotiationInfo();
      return;
    }
    
    // 退職連絡代行について
    if (text.includes("退職連絡") || text.includes("退職代行") || text.includes("代行") || text.includes("退職届") || text.includes("意思伝達") || text.includes("伝える")) {
      this.actionProvider.sendRetirementContact();
      return;
    }
    
    // 転職支援について
    if (text.includes("転職") || text.includes("キャリア") || text.includes("次の仕事") || text.includes("エージェント") || text.includes("就職")) {
      this.actionProvider.sendJobChange();
      return;
    }

    this.actionProvider.sendFallback();
  }
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const memoizedConfig = useMemo(() => chatbotConfig, []);

  return (
    <>
      <button
        type="button"
        className="chatbot-hint-button"
        onClick={() => setIsOpen(true)}
        aria-label="東京中央労働組合のについて"
      >
        <span className="chatbot-hint-button__pulse" />
        <img src={chatGuide} alt="東京中央労働組合スタッフ" className="chatbot-hint-button__figure" />
      </button>

      {isOpen && (
        <div className="chatbot-modal" role="dialog" aria-modal="true">
          <div className="chatbot-modal__panel">
            <button
              type="button"
              className="chatbot-modal__close"
              onClick={() => setIsOpen(false)}
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="chatbot-modal__hero">
              <div className="chatbot-modal__hero-video" aria-hidden="true">
                <span />
              </div>
              <div className="chatbot-modal__hero-copy">
                <p className="chatbot-modal__eyebrow">無料相談受付中</p>
                <h3>退職に関するご相談、お気軽にどうぞ</h3>
                <p>東京中央労働組合が提供する安心の退職サポート。費用、手続きの流れ、サービス内容など、何でもお尋ねください。</p>
              </div>
              <img src={chatGuide} alt="案内するスタッフ" className="chatbot-modal__hero-image" />
            </div>

            <div className="chatbot-modal__body">
              <Chatbot
                config={memoizedConfig}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;

