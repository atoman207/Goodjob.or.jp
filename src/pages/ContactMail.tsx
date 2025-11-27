import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ContactMail = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-card border border-border rounded p-6 md:p-8 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">メールフォーム</h1>
              <p className="text-muted-foreground text-center mb-6">
                1〜3営業日以内にご返信いたします。必要事項をご入力ください。
              </p>
              <form className="grid grid-cols-1 gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-medium">お名前</span>
                  <input className="h-11 rounded border border-border px-3 bg-background" placeholder="山田 太郎" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium">メールアドレス</span>
                  <input type="email" className="h-11 rounded border border-border px-3 bg-background" placeholder="you@example.com" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium">ご相談内容</span>
                  <textarea className="min-h-[140px] rounded border border-border p-3 bg-background" placeholder="気になる点をご自由にご記載ください" />
                </label>
                <Button size="lg" className="w-full">送信する</Button>
                <p className="text-xs text-center text-muted-foreground">
                  送信によりプライバシーポリシーに同意したものとみなされます。
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactMail;

