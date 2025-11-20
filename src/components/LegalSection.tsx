import { Shield, Lock, FileCheck } from "lucide-react";

const LegalSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">
          法的・安心サポート
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          弁護士監修のもと、確実で安全なサービスを提供しています
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-lg p-8 md:p-12 border border-border mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">弁護士監修サービス</h3>
                <p className="text-muted-foreground mb-4">
                  当サービスは弁護士の監修のもと運営されています。労働法に基づいた適切な対応で、あなたの退職を法的にサポートします。
                </p>
                <div className="bg-gray-light p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-1">監修弁護士</p>
                  <p className="text-sm text-muted-foreground">
                    山田太郎法律事務所 代表弁護士 山田太郎
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    労働問題を専門とし、企業法務・労働紛争解決に20年以上の実績を持つ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">個人情報保護</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                お客様の個人情報は厳重に管理し、第三者に開示することは一切ありません。プライバシーマークを取得し、万全のセキュリティ体制を整えています。
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">労働組合運営</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                東京中央労働組合が直接運営しているため、団体交渉権に基づいた法的効力のある対応が可能です。違法性のない確実な退職をお約束します。
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="bg-background px-6 py-3 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">認定</p>
                <p className="font-semibold">プライバシーマーク取得</p>
              </div>
              <div className="bg-background px-6 py-3 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">運営</p>
                <p className="font-semibold">東京中央労働組合</p>
              </div>
              <div className="bg-background px-6 py-3 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">監修</p>
                <p className="font-semibold">弁護士ドットコム認定</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
