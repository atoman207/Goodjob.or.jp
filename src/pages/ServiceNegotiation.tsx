import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FaBalanceScaleLeft, FaPeopleCarry } from "react-icons/fa";

const ServiceNegotiation = () => {
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
                    <FaBalanceScaleLeft className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    <FaPeopleCarry className="w-4 h-4 md:w-5 md:h-5 text-primary absolute -bottom-1 -right-1" />
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  交渉対応
                </h1>
              </div>

              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  未払い賃金や有給消化など、労働組合として会社と交渉を行います。法的根拠に基づいた対応で安心です。
                </p>

                <div className="space-y-6">
                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      サービス内容
                    </h2>
                    <div className="bg-gray-50 p-4 md:p-6 rounded space-y-4">
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・未払い賃金の請求
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          残業代の未払いや給与の遅配など、労働基準法に基づいて会社と交渉し、正当な賃金の支払いを請求いたします。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・有給休暇の取得交渉
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          有給休暇の取得は労働者の権利です。残っている有給休暇を全て消化してから退職できるよう、会社と交渉いたします。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・退職金の交渉
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          退職金制度がある場合、正当な退職金の支払いを交渉いたします。労働組合として法的根拠をもって対応します。
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                          ・必要書類の取得交渉
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          離職票や源泉徴収票などの必要書類を会社に郵送するよう交渉いたします。万が一送られてこない場合も、再度催促いたします。
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
                        <span>労働組合として法的根拠をもって交渉するため、確実に結果を得られます</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>個人では難しい交渉も、組織として対応するため有利です</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>労働基準法などの法律に基づいた対応で、安心してご利用いただけます</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>これまで5,000件以上の実績があり、退職できなかったケースはございません</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      対応可能な交渉内容
                    </h2>
                    <div className="bg-blue-50 p-4 md:p-6 rounded">
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li>・未払い残業代の請求</li>
                        <li>・給与の遅配・未払いの請求</li>
                        <li>・有給休暇の取得交渉</li>
                        <li>・退職金の支払い交渉</li>
                        <li>・離職票・源泉徴収票などの必要書類の取得</li>
                        <li>・不当な評価や処分への対応</li>
                        <li>・労働条件の改善交渉</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      法的根拠
                    </h2>
                    <div className="bg-gray-50 p-4 md:p-6 rounded">
                      <p className="text-sm md:text-base text-gray-700 mb-3">
                        当組合は労働組合として、以下の法律に基づいて対応いたします：
                      </p>
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li>・労働基準法（賃金の支払い、労働時間、有給休暇など）</li>
                        <li>・労働契約法（労働条件の変更、解雇など）</li>
                        <li>・労働組合法（労働組合の権利）</li>
                        <li>・労働安全衛生法（職場環境の改善）</li>
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

export default ServiceNegotiation;

