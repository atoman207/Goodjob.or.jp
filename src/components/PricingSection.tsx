import pricingImagePc from "@/assets/price.png";
import pricingImageMobile from "@/assets/mprice.png";

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing-section-custom py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative">
          {/* PC / Tablet image */}
          <img
            src={pricingImagePc}
            alt="料金プラン"
            className="hidden md:block w-full h-auto object-contain"
          />

          {/* Mobile image */}
          <img
            src={pricingImageMobile}
            alt="料金プラン"
            className="block md:hidden w-full h-auto object-contain"
          />

          {/* LINE CTA button - bottom right */}
          <div className="absolute right-10 bottom-20 md:right-6 md:bottom-10">
            <a href="/contact/line" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded bg-emerald-500 px-6.5
                 py-1 md:px-5 md:py-0.9 text-[1.35rem] md:text-[1.2rem] font-bold text-white shadow-md 
                 hover:bg-emerald-600 hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                LINEで相談
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
