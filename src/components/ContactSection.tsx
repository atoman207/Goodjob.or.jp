import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            まずは無料相談
          </h2>
          <p className="text-lg mb-12 opacity-90">
            LINEまたは電話で気軽にご相談ください
            <br />
            24時間365日対応・秘密厳守
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">LINE相談</h3>
              <p className="text-sm opacity-90 mb-4">
                24時間受付・最短即日対応
              </p>
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                LINEで相談する
              </Button>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">電話相談</h3>
              <p className="text-sm opacity-90 mb-4">
                平日 9:00〜21:00（土日祝も対応）
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                0120-XXX-XXX
              </Button>
            </div>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mail className="w-5 h-5" />
              <h3 className="font-bold">メールでのお問い合わせ</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              お急ぎでない方はメールフォームからもご相談いただけます
            </p>
            <Button
              variant="outline"
              className="border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              メールフォームへ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
