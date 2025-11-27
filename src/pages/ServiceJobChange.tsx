import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FaUserGraduate, FaArrowTrendUp } from "react-icons/fa6";

const ServiceJobChange = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 md:mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ホームに戻る
                </a>
              </Button>
            </div>

            <article className="bg-card border border-border rounded p-6 md:p-8 lg:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaUserGraduate className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    <FaArrowTrendUp className="w-4 h-4 md:w-5 md:h-5 text-primary absolute -bottom-1 -right-1" />
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  転職支援
                </h1>
              </div>

              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  退職後の新しいキャリアをサポート。提携する転職エージェントを通じて次のステップをサポートします。
                </p>

                <div className="space-y-6">
                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      サービス内容
                    </h2>
                    <div className="bg-gray-50 p-4 md:p-6 rounded space-y-4">
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・転職エージェントの紹介
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          提携する信頼できる転職エージェントをご紹介いたします。あなたのスキルや希望に合った求人を提案し、転職活動をサポートします。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・キャリア相談
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          退職後のキャリアパスについて、専門のアドバイザーが個別に相談に乗ります。あなたの経験やスキルを活かした次のステップを一緒に考えます。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・履歴書・職務経歴書の作成サポート
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          転職活動に必要な履歴書や職務経歴書の作成をサポートします。あなたの強みを最大限にアピールできるよう、アドバイスいたします。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・面接対策
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          面接の準備や練習をサポートします。よくある質問への回答方法や、あなたの経験を効果的に伝える方法をアドバイスいたします。
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      メリット
                    </h2>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>専門の転職エージェントがあなたに合った求人を提案します</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>転職活動のノウハウを提供し、効率的に活動できます</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>個別のキャリア相談で、あなたに最適な次のステップを見つけられます</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>退職から転職まで、トータルでサポートします</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      サポート内容
                    </h2>
                    <div className="bg-blue-50 p-4 md:p-6 rounded">
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li>・転職エージェントの紹介・マッチング</li>
                        <li>・キャリアカウンセリング</li>
                        <li>・履歴書・職務経歴書の作成サポート</li>
                        <li>・面接対策・練習</li>
                        <li>・給与交渉のサポート</li>
                        <li>・入社後のフォローアップ</li>
                        <li>・転職活動全般のアドバイス</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      転職エージェントについて
                    </h2>
                    <div className="bg-gray-50 p-4 md:p-6 rounded">
                      <p className="text-sm md:text-base text-gray-700 mb-3">
                        当組合は、信頼できる転職エージェントと提携しています。以下の特徴があります：
                      </p>
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li>・実績豊富な転職エージェントのみを厳選</li>
                        <li>・あなたの希望やスキルに合った求人を提案</li>
                        <li>・転職活動をトータルでサポート</li>
                        <li>・無料で利用可能（成功報酬型）</li>
                        <li>・秘密厳守で、現在の会社に知られることはありません</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  まずは無料相談でお気軽にお問い合わせください
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <a href="/contact/line" target="_blank" rel="noopener noreferrer">LINEで相談</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="/contact/phone" target="_blank" rel="noopener noreferrer">電話で相談</a>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceJobChange;

