import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ContactLine = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">LINEで無料相談</h1>
              <p className="text-muted-foreground text-center mb-6">
                QRコードまたはボタンから友だち追加・トーク開始ができます。
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center justify-center">
                  <div className="w-[220px] h-[220px] bg-gray-100 rounded-xl border border-border flex items-center justify-center text-sm text-muted-foreground">
                    QRコード
                  </div>
                </div>
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  LINEを開く
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  24時間365日受付／個人情報は厳重に管理します
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactLine;

