import { Button } from "@/components/ui/button";
import pricingImage from "@/assets/price.jpg";
const PricingSection = () => {
  return (
    <section id="pricing" className="pricing-section-custom py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="pricing-section-custom__box max-w-4xl mx-auto">
          <div className="pricing-section-custom__header">
            <div className="pricing-section-custom__illustration">
              <img src={pricingImage} alt="料金プラン" className="pricing-section-custom__illustration-image" />
            </div>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">料金プラン</h2>
          </div>

          <div className="pricing-section-custom__employment-types">
            <p className="pricing-section-custom__types-line1">
              正社員/契約社員/派遣社員/アルバイト
            </p>
            <p className="pricing-section-custom__types-line2">
              雇用形態問わず、どなたでも・・・
            </p>
          </div>

          <div className="pricing-section-custom__price-section">
            <div className="pricing-section-custom__price">22,000円</div>
            <div className="pricing-section-custom__no-additional">
              追加料金一切なし
            </div>
            <div className="pricing-section-custom__no-additional">
            全額返金保証
            </div>
          </div>

          <div className="pricing-section-custom__disclaimer">
            ※退職代行が終わっても相談はずーっと無料
          </div>

          <div className="pricing-section-custom__cta">
            <a href="/contact/line" target="_blank" rel="noreferrer">
              <Button size="lg" className="pricing-section-custom__cta-button">
                詳しくはこちら &gt;
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
