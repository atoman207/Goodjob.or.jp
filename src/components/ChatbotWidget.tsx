import { useMemo, useState } from "react";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { X } from "lucide-react";

import chatGuide from "@/assets/chatbot.png";

type ChatbotConfig = Parameters<typeof Chatbot>[0];

const chatbotConfig: ChatbotConfig = {
  botName: "東京中央労働組合ガイド",
  initialMessages: [
    createChatBotMessage("こんにちは。東京中央労働組合のサポートAIです。"),
    createChatBotMessage("退職手続きや費用など、気になる点を日本語で入力してください。"),
  ],
  customComponents: {
    header: () => (
      <div className="chatbot-kit__custom-header">
        LiveChat案内／東京中央労働組合
      </div>
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
      this.createChatBotMessage("費用は一律で、追加料金なく労働組合が直接対応します。LINE/電話での相談も無料です。"),
    );
  }

  sendProcessGuide() {
    this.addMessage(
      this.createChatBotMessage("ご相談→ヒアリング→労働組合から会社へ連絡→退職成立、の流れで最短即日対応できます。"),
    );
  }

  sendSupportInfo() {
    this.addMessage(
      this.createChatBotMessage("弁護士監修で不当な引き止めや残業代の未払い相談も可能です。必要に応じて書面での証明も行います。"),
    );
  }

  sendContactInfo() {
    this.addMessage(
      this.createChatBotMessage("24時間LINEと電話で受付中です。サイト右下のボタンからすぐにご連絡いただけます。"),
    );
  }

  sendFallback() {
    this.addMessage(
      this.createChatBotMessage("もう少し詳しく教えてください。費用・流れ・サポート内容・連絡方法などについてお答えできます。"),
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

    if (text.includes("費") || text.includes("price") || text.includes("cost") || text.includes("料金")) {
      this.actionProvider.sendCostDetails();
      return;
    }
    if (text.includes("流れ") || text.includes("step") || text.includes("process") || text.includes("手続")) {
      this.actionProvider.sendProcessGuide();
      return;
    }
    if (text.includes("サポート") || text.includes("support") || text.includes("労働組合") || text.includes("守る")) {
      this.actionProvider.sendSupportInfo();
      return;
    }
    if (text.includes("連絡") || text.includes("contact") || text.includes("電話") || text.includes("line")) {
      this.actionProvider.sendContactInfo();
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
        aria-label="東京中央労働組合のLiveChatを開く"
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
                <p className="chatbot-modal__eyebrow">LiveChatガイド</p>
                <h3>退職サポートのことなら、何でもご相談くださいね</h3>
                <p>東京中央労働組合が提供する安心サポート。わからないことは何でも入力してください。</p>
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

