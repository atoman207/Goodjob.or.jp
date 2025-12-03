import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CTAButtons from "@/components/CTAButtons";
import { ArrowLeft } from "lucide-react";
import { FaPhoneAlt, FaComments } from "react-icons/fa";

const ServiceRetirementContact = () => {
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
                    <FaPhoneAlt className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    <FaComments className="w-4 h-4 md:w-5 md:h-5 text-primary absolute -bottom-1 -right-1" />
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  退職連絡代行
                </h1>
              </div>

              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  あなたに代わって会社へ退職の意思を伝えます。面倒な手続きや気まずい会話は一切不要です。
                </p>

                <div className="space-y-6">
                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      サービス内容
                    </h2>
                    <div className="bg-gray-50 p-4 md:p-6 rounded space-y-4">
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・退職の意思伝達
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          労働組合として、あなたに代わって会社に退職の意思を正式に伝達いたします。直接的な会話や面倒な手続きは一切不要です。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・退職届の作成サポート
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          退職届のテンプレートをご用意し、必要事項を記入するだけで簡単に作成できます。郵送方法についても丁寧にサポートいたします。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・秘密厳守
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          ご本人様の同意なく個人情報を開示することは一切ありません。退職代行サービスを利用したことが会社に知られることはありません。
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
                        <span>気まずい会話や直接的な対話を避けられます</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>面倒な手続きを代行してもらえるため、時間と労力を節約できます</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>労働組合として法的根拠をもって対応するため、安心です</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>秘密厳守で、利用したことが会社に知られることはありません</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      対応可能なケース
                    </h2>
                    <div className="bg-blue-50 p-4 md:p-6 rounded">
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li>・パワハラやセクハラなどで退職を希望する場合</li>
                        <li>・長時間労働や過度なノルマで体調を崩した場合</li>
                        <li>・職場の人間関係に悩んでいる場合</li>
                        <li>・直接的な会話を避けたい場合</li>
                        <li>・退職手続きを代行してほしい場合</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  まずは無料相談でお気軽にお問い合わせください
                </p>
                <CTAButtons direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 3 }} />
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceRetirementContact;

