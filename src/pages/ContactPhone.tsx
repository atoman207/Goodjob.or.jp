import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ContactPhone = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">電話で相談</h1>
              <p className="text-muted-foreground text-center mb-6">
                平日 9:00〜21:00（土日祝も対応）。お急ぎの方はこちらからお電話ください。
              </p>
              <div className="grid grid-cols-1 gap-6">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-14 text-lg border-2"
                  asChild
                >
                  <a href="tel:0120000000">
                    <Phone className="w-5 h-5 mr-2" />
                    0120-XXX-XXX に電話する
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  通話料金はお客様のご契約に準じます。録音のうえ品質向上に活用します。
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

export default ContactPhone;

